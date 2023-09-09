import { Logger } from '../utils/logger';

// Example test case for the Logger class
describe('Logger', () => {
  it('should log an error message', () => {
    const logger = new Logger();
    const consoleLogSpy = jest.spyOn(console, 'log');

    logger.error('Error message');

    expect(consoleLogSpy).toHaveBeenCalledWith('[ERROR] Error message');
  });
});