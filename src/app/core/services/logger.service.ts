import { Injectable } from '@angular/core';

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private enabled = true;

  public debug(message: string, context?: unknown): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  public info(message: string, context?: unknown): void {
    this.log(LogLevel.INFO, message, context);
  }

  public warn(message: string, context?: unknown): void {
    this.log(LogLevel.WARN, message, context);
  }

  public error(message: string, context?: unknown): void {
    this.log(LogLevel.ERROR, message, context);
  }

  private log(level: LogLevel, message: string, context?: unknown): void {
    if (!this.enabled) {
      return;
    }

    const PAYLOAD = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
    };

    switch (level) {
      case LogLevel.ERROR:
        console.error(PAYLOAD);
        break;
      case LogLevel.WARN:
        console.warn(PAYLOAD);
        break;
      default:
        console.log(PAYLOAD);
    }
  }
}
