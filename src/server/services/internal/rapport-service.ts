import { Rapport } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class RapportService extends CRUD<Rapport, "rapport"> {}

