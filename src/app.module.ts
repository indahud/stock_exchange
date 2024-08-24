import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { NseModule } from './nse/nse.module';
import { BseModule } from './bse/bse.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, NseModule, BseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
