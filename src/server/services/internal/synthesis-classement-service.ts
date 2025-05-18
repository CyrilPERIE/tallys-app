import { SynthesisClassement } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class SynthesisClassementService extends CRUD<
  SynthesisClassement,
  "synthesisClassement"
> {}
