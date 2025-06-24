import { appendFileSync } from 'fs';
import { join } from 'path';

class Logger {
  constructor(logFile = 'app.log') {
    this.logFile = join(process.cwd(), logFile);
    this.levels = {
      ERROR: 0,
      WARN: 1,
      INFO: 2,
      DEBUG: 3
    };
    this.currentLevel = this.levels.INFO;
  }

  setLevel(level) {
    this.currentLevel = this.levels[level] || this.levels.INFO;
  }

  formatMessage(level, message, meta = {}) {
    const timestamp = new Date().toISOString();
    const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    return `${timestamp} [${level}] ${message}${metaStr}\n`;
  }

  writeLog(level, message, meta) {
    if (this.levels[level] <= this.currentLevel) {
      const formattedMessage = this.formatMessage(level, message, meta);
      
      // Write to file
      try {
        appendFileSync(this.logFile, formattedMessage);
      } catch (error) {
        console.error('Failed to write to log file:', error);
      }
      
      // Also log to console in development
      if (process.env.NODE_ENV !== 'production') {
        console.log(formattedMessage.trim());
      }
    }
  }

  error(message, meta = {}) {
    this.writeLog('ERROR', message, meta);
  }

  warn(message, meta = {}) {
    this.writeLog('WARN', message, meta);
  }

  info(message, meta = {}) {
    this.writeLog('INFO', message, meta);
  }

  debug(message, meta = {}) {
    this.writeLog('DEBUG', message, meta);
  }
}

export const logger = new Logger();
export default logger;