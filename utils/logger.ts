// Implementation of the logger

export class Logger {
  private transport: string;
  private cloudwatch: AWS.CloudWatchLogs;

  constructor(transport = 'console') {
    this.transport = transport;
    this.cloudwatch = new AWS.CloudWatchLogs();
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
    } else if (this.transport === 'aws') {
      // Send log message to AWS CloudWatch Logs
      const params = {
        logGroupName: '<LOG_GROUP_NAME>',
        logStreamName: '<LOG_STREAM_NAME>',
        logEvents: [{
          message: logMessage,
          timestamp: Date.now()
        }]
      };

      this.cloudwatch.putLogEvents(params, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
        }
      });
    } else if (this.transport === 'file') {
      // Write log message to a file
      fs.appendFileSync('<LOG_FILE_PATH>', logMessage + '\n');
    }
  }
}