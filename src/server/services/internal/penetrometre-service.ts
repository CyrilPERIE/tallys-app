import { Penetrometre } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class PenetrometreService extends CRUD<Penetrometre, "penetrometre"> {}
