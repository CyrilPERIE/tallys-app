-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "BetType" ADD VALUE 'E_COUPLE_GAGNANT';
ALTER TYPE "BetType" ADD VALUE 'E_MULTI';
ALTER TYPE "BetType" ADD VALUE 'E_TIERCE';
ALTER TYPE "BetType" ADD VALUE 'E_QUARTE_PLUS';
ALTER TYPE "BetType" ADD VALUE 'E_QUINTE_PLUS';
ALTER TYPE "BetType" ADD VALUE 'E_PICK5';
ALTER TYPE "BetType" ADD VALUE 'SIMPLE_GAGNANT_INTERNATIONAL';
ALTER TYPE "BetType" ADD VALUE 'SIMPLE_PLACE_INTERNATIONAL';
ALTER TYPE "BetType" ADD VALUE 'EB5';
