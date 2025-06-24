// Centralized API configuration and utilities
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://64.181.164.73:5000';

class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `${options.method || 'GET'}_${url}`;
    
    // Check cache for GET requests
    if (!options.method || options.method === 'GET') {
      const cached = this.cache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
        return cached.data;
      }
    }

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache successful GET requests
      if (!options.method || options.method === 'GET') {
        this.cache.set(cacheKey, {
          data,
          timestamp: Date.now(),
        });
      }

      return data;
    } catch (error) {
      console.error(`API request failed for ${url}:`, error);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }

  clearCache() {
    this.cache.clear();
  }
}

export const apiClient = new ApiClient();
export default apiClient;