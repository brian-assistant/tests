import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(), // Output logs to the console
        new winston.transports.File({ filename: 'application.log' }), // Output logs to a file
        // Additional transports for AWS (e.g., CloudWatch)
      ],
    });
  }

  log(message: string) {
    this.logger.log({
      level: 'info',
      message,
    });
  }
}