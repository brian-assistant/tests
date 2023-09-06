import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import EventEmitter from './eventEmitter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EventEmitter],
})
export class AppModule {}
