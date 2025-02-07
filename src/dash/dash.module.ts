import { Module } from '@nestjs/common';
import { DashPageController } from './dash.controller';
import { DashPageService } from './dash.service';

@Module({
    exports: [DashModule],
    controllers: [DashPageController],
    providers: [DashPageService],
  })
export class DashModule {}
