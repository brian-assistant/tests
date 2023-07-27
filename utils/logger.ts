// Implementation of the logger

export class Logger {
  private transport: string;

  constructor(transport = 'console') {
    this.transport = transport;
  }

  public error(message: string): void {
    this.log('error', message);
  }

  public debug(message: string): void {
    this.log('debug', message);
  }

  public info(message: string): void {
    this.log('info', message);
  }

  public warn(message: string): void {
    this.log('warn', message);
  }

  private log(level: string, message: string): void {
    const logMessage = `[${level.toUpperCase()}] ${message}`;

    if (this.transport === 'console') {
      console.log(logMessage);
    } else if (this.transport === 'file') {
      // Code to write log message to file
      // Use appropriate file system library or API to write the log message
    }
  }
}