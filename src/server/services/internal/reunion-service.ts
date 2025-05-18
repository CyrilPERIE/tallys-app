import { Reunion } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";
import prisma from "@/lib/prisma/prisma";

export class ReunionService extends CRUD<Reunion, "reunion"> {
  async create(data: Omit<Reunion, "id">) {
    return await prisma.reunion.upsert({
      where: {
        programmeId_numOfficiel: {
          programmeId: data.programmeId!,
          numOfficiel: data.numOfficiel,
        },
      },
      update: { ...data },
      create: { ...data },
    });
  }
}
