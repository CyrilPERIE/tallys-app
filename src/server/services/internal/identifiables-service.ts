import { Identifiable } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";
import { CRUD } from "@/server/services/utils/crud-common";

export class IdentifiableService extends CRUD<Identifiable, "identifiable"> {
  async create(data: Omit<Identifiable, "id">): Promise<Identifiable> {
    return await prisma.identifiable.upsert({
      where: { code: data.code },
      update: { ...data },
      create: { ...data },
    });
  }
}
