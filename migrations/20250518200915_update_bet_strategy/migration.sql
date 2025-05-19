/*
  Warnings:

  - The values [RANDOM,FOULE_V1_0] on the enum `BetStrategy` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BetStrategy_new" AS ENUM ('Random', 'Foule_v1_0');
ALTER TABLE "Bet" ALTER COLUMN "strategy" TYPE "BetStrategy_new" USING ("strategy"::text::"BetStrategy_new");
ALTER TYPE "BetStrategy" RENAME TO "BetStrategy_old";
ALTER TYPE "BetStrategy_new" RENAME TO "BetStrategy";
DROP TYPE "BetStrategy_old";
COMMIT;
