/*
  Warnings:

  - You are about to alter the column `volume` on the `BSE` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `volume` on the `NSE` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "BSE" ALTER COLUMN "volume" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "NSE" ALTER COLUMN "volume" SET DATA TYPE INTEGER;
