import { Controller, Get, Param } from '@nestjs/common';
import { NseService } from './nse.service';

@Controller('nse')
export class NseController {
  constructor(private readonly nseService: NseService) {}

  @Get('market-movers/:type/:page')
  marketMovers(@Param('type') type: string, @Param('page') page: string) {
    return this.nseService.marketMovers(type, +page);
  }

  @Get('volume-movers/:type/:page')
  volumeMovers(@Param('type') type: string, @Param('page') page: string) {
    return this.nseService.volumeMovers(type, +page);
  }
}
