import { Controller, Get, Param } from '@nestjs/common';
import { BseService } from './bse.service';

@Controller('bse')
export class BseController {
  constructor(private readonly bseService: BseService) {}

  @Get('market-movers/:type/:page')
  marketMovers(@Param('type') type: string, @Param('page') page: string) {
    return this.bseService.marketMovers(type, +page);
  }

  @Get('volume-movers/:type/:page')
  volumeMovers(@Param('type') type: string, @Param('page') page: string) {
    return this.bseService.volumeMovers(type, +page);
  }
}
