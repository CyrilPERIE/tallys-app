export interface Identifiable {
  code: string;
  libelleCourt: string;
  libelleLong: string;
}

export interface Timestamped {
  timestamp: number;
  timezoneOffset: number;
}

export interface CommentaireSource {
  texte: string;
  source: string;
}

export interface NomNumPMU {
  numPmu: number;
  nom: string;
}

export interface TauxContribution {
  numerateur: number;
  denominateur: number;
}

export interface Penetrometre {
  valeurMesure?: string;
  heureMesure: string;
  intitule: string;
  commentaire: string;
}

export interface Incident {
  type: string;
  numeroParticipants: number[];
}
