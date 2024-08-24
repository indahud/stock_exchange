import { Test, TestingModule } from '@nestjs/testing';
import { BseController } from './bse.controller';
import { BseService } from './bse.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  priceGainers,
  priceLosers,
  volumeGainers,
  volumeLosers,
} from 'src/utils/constants';

describe('BseController', () => {
  let controller: BseController;
  let bseService: BseService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BseController],
      providers: [
        BseService,
        {
          provide: PrismaService,
          useValue: {
            bSE: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    controller = module.get<BseController>(BseController);
    bseService = module.get<BseService>(BseService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('BSE Market movers', () => {
    it('should return gainers data', async () => {
      jest.spyOn(prismaService.bSE, 'findMany').mockResolvedValue(priceGainers);

      const movers = await bseService.marketMovers('gainers', 1, 1);
      expect(movers).toEqual(priceGainers);
    });

    it('should return losers data', async () => {
      jest.spyOn(prismaService.bSE, 'findMany').mockResolvedValue(priceLosers);

      const low = await bseService.marketMovers('losers', 1, 1);
      expect(low).toEqual(priceLosers);
    });
  });

  describe('BSE Volume movers', () => {
    it('should return gainers data', async () => {
      jest
        .spyOn(prismaService.bSE, 'findMany')
        .mockResolvedValue(volumeGainers);

      const movers = await bseService.volumeMovers('high', 1, 1);
      expect(movers).toEqual(volumeGainers);
    });

    it('should return losers data', async () => {
      jest.spyOn(prismaService.bSE, 'findMany').mockResolvedValue(volumeLosers);

      const low = await bseService.volumeMovers('low', 1, 1);
      expect(low).toEqual(volumeLosers);
    });
  });
});
