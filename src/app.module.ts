import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashModule } from './dash/dash.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [DashModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
