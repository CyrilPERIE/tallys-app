import { RapportsDefinitifsResponse } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class RapportsDefinitifsResponseService extends CRUD<
  RapportsDefinitifsResponse,
  "rapportsDefinitifsResponse"
> {}
