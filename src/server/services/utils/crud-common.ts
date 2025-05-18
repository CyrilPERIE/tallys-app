import prisma from "@/lib/prisma/prisma";
import { PrismaClient } from "@prisma/client";

type PrismaModels = {
  [K in keyof PrismaClient]: PrismaClient[K] extends {
    findUnique: (...args: any[]) => any;
    findMany: (...args: any[]) => any;
    create: (...args: any[]) => any;
    update: (...args: any[]) => any;
    delete: (...args: any[]) => any;
  }
    ? K
    : never;
}[keyof PrismaClient];

export class CRUD<T extends { id: number }, M extends PrismaModels> {
  constructor(private readonly model: M) {}

  async create(data: Omit<T, "id">) {
    return await (prisma[this.model] as any).create({ data });
  }

  async findAll() {
    return await (prisma[this.model] as any).findMany();
  }

  async findOne(id: number) {
    return await (prisma[this.model] as any).findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<T>) {
    return await (prisma[this.model] as any).update({ where: { id }, data });
  }

  async remove(id: number) {
    return await (prisma[this.model] as any).delete({ where: { id } });
  }
}
