-- CreateTable
CREATE TABLE "NSE" (
    "id" TEXT NOT NULL,
    "script" TEXT NOT NULL,
    "close" INTEGER NOT NULL,
    "day_high" INTEGER NOT NULL,
    "day_low" INTEGER NOT NULL,
    "volume" BIGINT NOT NULL,
    "delivery_percent" INTEGER NOT NULL,

    CONSTRAINT "NSE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BSE" (
    "id" TEXT NOT NULL,
    "script" TEXT NOT NULL,
    "close" INTEGER NOT NULL,
    "day_high" INTEGER NOT NULL,
    "day_low" INTEGER NOT NULL,
    "volume" BIGINT NOT NULL,
    "delivery_percent" INTEGER NOT NULL,

    CONSTRAINT "BSE_pkey" PRIMARY KEY ("id")
);
