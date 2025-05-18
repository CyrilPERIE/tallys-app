import prisma from "@/lib/prisma/prisma";
import { Timestamped } from "@prisma/client";

export const timestampedService = {
  async create(data: Omit<Timestamped, "id">) {
    return await prisma.timestamped.create({ data });
  },

  async findAll() {
    return await prisma.timestamped.findMany();
  },

  async findOne(id: number) {
    return await prisma.timestamped.findUnique({ where: { id } });
  },

  async update(id: number, data: Partial<Timestamped>) {
    return await prisma.timestamped.update({ where: { id }, data });
  },

  async remove(id: number) {
    return await prisma.timestamped.delete({ where: { id } });
  },
};