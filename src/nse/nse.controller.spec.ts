import { Test, TestingModule } from '@nestjs/testing';
import { NseController } from './nse.controller';
import { NseService } from './nse.service';
import { PrismaService } from '../prisma/prisma.service';
import { volumeGainers, volumeLosers } from 'src/utils/constants';

describe('NseController', () => {
  let controller: NseController;
  let nseService: NseService;
  let prismaService: PrismaService;

  const gainers = [
    {
      id: '3c00a8d9-8b18-4651-9eaa-734621f8a380',
      script: 'IREDA',
      close: 110,
      day_high: 110,
      day_low: 80,
      volume: 3431000,
      delivery_percent: 50,
    },
  ];

  const losers = [
    {
      id: 'f6579456-3109-4c7c-8a9c-4063c5d00845',
      script: 'IRCTC',
      close: 100,
      day_high: 100,
      day_low: 90,
      volume: 3420000,
      delivery_percent: 50,
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NseController],
      providers: [
        NseService,
        {
          provide: PrismaService,
          useValue: {
            nSE: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    controller = module.get<NseController>(NseController);
    nseService = module.get<NseService>(NseService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMarketMovers', () => {
    it('should return gainers data', async () => {
      jest.spyOn(prismaService.nSE, 'findMany').mockResolvedValue(gainers);

      const movers = await nseService.marketMovers('gainers', 1, 1);
      expect(movers).toEqual(gainers);
    });

    it('should return losers data', async () => {
      jest.spyOn(prismaService.nSE, 'findMany').mockResolvedValue(losers);

      const low = await nseService.marketMovers('losers', 1, 1);
      expect(low).toEqual(losers);
    });
  });

  describe('NSE Volume movers', () => {
    it('should return gainers data', async () => {
      jest
        .spyOn(prismaService.nSE, 'findMany')
        .mockResolvedValue(volumeGainers);

      const movers = await nseService.volumeMovers('high', 1, 1);
      expect(movers).toEqual(volumeGainers);
    });

    it('should return losers data', async () => {
      jest.spyOn(prismaService.nSE, 'findMany').mockResolvedValue(volumeLosers);

      const low = await nseService.volumeMovers('low', 1, 1);
      expect(low).toEqual(volumeLosers);
    });
  });
});
