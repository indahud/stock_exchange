import { Module } from '@nestjs/common';
import { BseService } from './bse.service';
import { BseController } from './bse.controller';

@Module({
  controllers: [BseController],
  providers: [BseService],
})
export class BseModule {}
