import { Chapeau } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class ChapeauService extends CRUD<Chapeau, "chapeau"> {}
