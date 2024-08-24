import { Module } from '@nestjs/common';
import { NseService } from './nse.service';
import { NseController } from './nse.controller';

@Module({
  controllers: [NseController],
  providers: [NseService],
})
export class NseModule {}
