import { CommentaireSource } from "@prisma/client";
import { CRUD } from "@/server/services/utils/crud-common";

export class CommentaireSourceService extends CRUD<
  CommentaireSource,
  "commentaireSource"
> {}
