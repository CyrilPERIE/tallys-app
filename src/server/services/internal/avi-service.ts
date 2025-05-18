import { CRUD } from "@/server/services/utils/crud-common";
import { AVI } from "@prisma/client";

export class AviService extends CRUD<AVI, "aVI"> {}
