import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BseService {
  constructor(private prismaService: PrismaService) {}

  PAGE_SIZE = 10;
  LIMIT = 10;

  marketMovers(type: string, page: number, limit?: number) {
    return this.prismaService.bSE.findMany({
      skip: (page - 1) * this.PAGE_SIZE,
      take: limit ?? this.LIMIT,
      orderBy: [
        {
          day_high: type === 'gainers' ? 'desc' : 'asc',
        },
      ],
    });
  }

  volumeMovers(type: string, page: number, limit?: number) {
    return this.prismaService.bSE.findMany({
      skip: (page - 1) * this.PAGE_SIZE,
      take: limit ?? this.LIMIT,
      orderBy: [
        {
          volume: type === 'high' ? 'desc' : 'asc',
        },
      ],
    });
  }
}
