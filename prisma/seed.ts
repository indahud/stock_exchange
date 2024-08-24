import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const stocks = [
  {
    script: 'IRCTC',
    close: 100,
    day_high: 100,
    day_low: 90,
    volume: 3420000,
    delivery_percent: 50,
  },
  {
    script: 'kOTAK BANK',
    close: 101,
    day_high: 101,
    day_low: 89,
    volume: 3423000,
    delivery_percent: 40,
  },
  {
    script: 'SBI',
    close: 102,
    day_high: 102,
    day_low: 88,
    volume: 3424000,
    delivery_percent: 60,
  },
  {
    script: 'HDFC BANK',
    close: 103,
    day_high: 103,
    day_low: 87,
    volume: 3424000,
    delivery_percent: 80,
  },
  {
    script: 'TATA MOTORS',
    close: 104,
    day_high: 104,
    day_low: 86,
    volume: 3425000,
    delivery_percent: 50,
  },
  {
    script: 'WIPRO',
    close: 105,
    day_high: 105,
    day_low: 85,
    volume: 3426000,
    delivery_percent: 50,
  },
  {
    script: 'TATA POWER',
    day_high: 106,
    close: 106,
    day_low: 84,
    volume: 3427000,
    delivery_percent: 50,
  },
  {
    script: 'ITC',
    day_high: 107,
    close: 107,
    day_low: 83,
    volume: 3428000,
    delivery_percent: 50,
  },
  {
    script: 'VBL',
    day_high: 108,
    close: 108,
    day_low: 82,
    volume: 3429000,
    delivery_percent: 50,
  },
  {
    script: 'ABBOTT',
    close: 109,
    day_high: 109,
    day_low: 81,
    volume: 3430000,
    delivery_percent: 50,
  },
  {
    script: 'IREDA',
    close: 110,
    day_high: 110,
    day_low: 80,
    volume: 3431000,
    delivery_percent: 50,
  },
];

async function main() {
  await prisma.nSE.createMany({
    data: stocks,
  });

  await prisma.bSE.createMany({
    data: stocks,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
