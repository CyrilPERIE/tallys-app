import { Timestamped } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class TimestampedService extends CRUD<Timestamped, "timestamped"> {}
