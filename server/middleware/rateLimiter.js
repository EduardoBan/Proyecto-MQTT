import logger from '../utils/logger.js';

class RateLimiter {
  constructor(windowMs = 15 * 60 * 1000, maxRequests = 100) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    this.requests = new Map();
  }

  middleware() {
    return (req, res, next) => {
      const key = req.ip;
      const now = Date.now();
      const windowStart = now - this.windowMs;

      // Clean old entries
      if (this.requests.has(key)) {
        const userRequests = this.requests.get(key);
        const validRequests = userRequests.filter(time => time > windowStart);
        this.requests.set(key, validRequests);
      }

      // Check current request count
      const currentRequests = this.requests.get(key) || [];
      
      if (currentRequests.length >= this.maxRequests) {
        logger.warn('Rate limit exceeded:', {
          ip: req.ip,
          url: req.url,
          requestCount: currentRequests.length
        });
        
        return res.status(429).json({
          message: 'Too many requests, please try again later.'
        });
      }

      // Add current request
      currentRequests.push(now);
      this.requests.set(key, currentRequests);
      
      next();
    };
  }
}

export const rateLimiter = new RateLimiter();
export default rateLimiter;