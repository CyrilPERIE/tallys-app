import { Identifiable } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";

export const IdentifiableService = {
  async create(data: Omit<Identifiable, "id">): Promise<Identifiable> {
    return await prisma.identifiable.upsert({
      where: { code: data.code },
      update: { ...data },
      create: { ...data },
    });
  },

  async findAll(): Promise<Identifiable[]> {
    return prisma.identifiable.findMany();
  },

  async findById(id: number): Promise<Identifiable | null> {
    return prisma.identifiable.findUnique({ where: { id } });
  },

  async update(id: number, data: Partial<Omit<Identifiable, "id">>): Promise<Identifiable> {
    return prisma.identifiable.update({
      where: { id },
      data,
    });
  },

  async delete(id: number): Promise<Identifiable> {
    return prisma.identifiable.delete({ where: { id } });
  },
};
