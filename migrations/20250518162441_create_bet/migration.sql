-- CreateEnum
CREATE TYPE "BetStrategy" AS ENUM ('Random', 'Foule_v1_0');

-- CreateEnum
CREATE TYPE "BetType" AS ENUM ('E_SIMPLE_PLACE', 'E_SIMPLE_GAGNANT', 'E_COUPLE_PLACE', 'E_COUPLE_ORDRE', 'E_SUPER_QUATRE', 'E_DEUX_SUR_QUATRE', 'E_TRIO', 'E_TRIO_ORDRE', 'E_MINI_MULTI');

-- CreateEnum
CREATE TYPE "BetStatus" AS ENUM ('PENDING', 'WON', 'LOST');

-- CreateTable
CREATE TABLE "Bet" (
    "id" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "strategy" "BetStrategy" NOT NULL DEFAULT 'Random',
    "betType" "BetType" NOT NULL DEFAULT 'E_SIMPLE_PLACE',
    "amount" INTEGER NOT NULL,
    "betStatus" "BetStatus" NOT NULL DEFAULT 'PENDING',
    "gain" INTEGER,
    "profit" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);
