/*
  Warnings:

  - A unique constraint covering the columns `[programmeId,numOfficiel]` on the table `Reunion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reunion_programmeId_numOfficiel_key" ON "Reunion"("programmeId", "numOfficiel");
