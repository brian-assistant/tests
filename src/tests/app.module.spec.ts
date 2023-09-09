import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appModule = moduleRef.get<AppModule>(AppModule);
  });

  it('should be defined', () => {
    expect(appModule).toBeDefined();
  });
});
