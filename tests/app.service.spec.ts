import { AppService } from '../src/app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it('should return "Hello World"', () => {
    // Arrange

    // Act
    const result = appService.getHello();

    // Assert
    expect(result).toBe('Hello World');
  });
});
