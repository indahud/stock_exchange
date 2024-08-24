import { Test, TestingModule } from '@nestjs/testing';
import { BseService } from 'src/bse/bse.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BseService', () => {
  let service: BseService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<BseService>(BseService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('marketMovers', () => {
    it('should call findMany with correct parameters for gainers', async () => {
      await service.marketMovers('gainers', 1, 1);
      expect(prismaService.bSE.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 1,
        orderBy: [{ day_high: 'desc' }],
      });
    });

    it('should call findMany with correct parameters for losers', async () => {
      await service.marketMovers('losers', 2);
      expect(prismaService.bSE.findMany).toHaveBeenCalledWith({
        skip: 10,
        take: 10,
        orderBy: [{ day_high: 'asc' }],
      });
    });
  });

  describe('volumeMovers', () => {
    it('should call findMany with correct parameters for high volume', async () => {
      await service.volumeMovers('high', 1, 1);
      expect(prismaService.bSE.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 1,
        orderBy: [{ volume: 'desc' }],
      });
    });

    it('should call findMany with correct parameters for low volume', async () => {
      await service.volumeMovers('low', 1, 1);
      expect(prismaService.bSE.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 1,
        orderBy: [{ volume: 'asc' }],
      });
    });
  });
});
