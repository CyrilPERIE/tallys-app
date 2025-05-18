import { Synthesis } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class SynthesisService extends CRUD<Synthesis, "synthesis"> {}
