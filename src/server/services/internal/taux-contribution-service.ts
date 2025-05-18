import { CRUD } from "@/server/services/utils/crud-common";
import { TauxContribution } from "@prisma/client";

export class TauxContributionService extends CRUD<
  TauxContribution,
  "tauxContribution"
> {}
