import { CRUD } from "@/server/services/utils/crud-common";
import { Incident } from "@prisma/client";

export class IncidentService extends CRUD<Incident, "incident"> {}
