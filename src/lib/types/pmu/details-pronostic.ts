import { NomNumPMU, CommentaireSource } from "@/lib/types/pmu/common";

export interface PronosticsDetaillesResponse {
  commentaire: CommentaireSource;
  syntheses: Synthesis[];
  avis: AVI[];
  cribles: Crible[];
  quinte: boolean;
}

export interface AVI {
  societe: string;
  journaliste: string;
  pronostics: NomNumPMU[];
}

export interface Crible extends NomNumPMU {
  commentaire: string;
  partant: boolean;
}

export interface Synthesis {
  intitule: string;
  classement: NomNumPMU & { nbFoisCite: number }[];
}
