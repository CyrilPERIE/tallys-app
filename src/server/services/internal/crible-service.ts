import { Crible } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class CribleService extends CRUD<Crible, "crible"> {}
