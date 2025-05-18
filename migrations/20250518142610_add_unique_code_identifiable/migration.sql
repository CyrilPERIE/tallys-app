/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Identifiable` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Identifiable_code_key" ON "Identifiable"("code");
