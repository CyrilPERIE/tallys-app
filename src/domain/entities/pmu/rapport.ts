export interface RapportsDefinitifsResponse {
  typePari: string;
  miseBase: number;
  rembourse: boolean;
  rapports: Rapport[];
  audience: string;
  dividendeUnite: string;
  famillePari: string;
}

export interface Rapport {
  libelle: string;
  dividende: number;
  dividendePourUnEuro: number;
  combinaison: number[];
  nombreGagnants: number;
  dividendePourUneMiseDeBase: number;
  dividendeUnite: string;
}

export interface RapportsReponse {
  dateProgramme: number;
  numeroReunion: number;
  numeroCourse: number;
  nbParticipants: number;
  rapportsParticipant: RapportsParticipant[];
  rapportsEcurie: any[];
  dateProgrammeOffset: number;
  typePari: string;
  dateMajDirect: number;
  dateMajDirectOffset: number;
  totalEnjeu: number;
}

export interface RapportsParticipant {
  numerosParticipant?: number[];
  rapportDirect?: number;
  tendance?: number;
  evolutionImportante?: boolean;
  grossePrise?: boolean;
  nom?: string;
  numPmu?: number;
  age?: number;
  sexe?: string;
  race?: string;
  statut?: string;
  placeCorde?: number;
  oeilleres?: string;
  proprietaire?: string;
  entraineur?: string;
  driver?: string;
  driverChange?: boolean;
  indicateurInedit?: boolean;
  musique?: string;
  nombreCourses?: number;
  nombreVictoires?: number;
  nombrePlaces?: number;
  nomPere?: string;
  nomMere?: string;
  nomPereMere?: string;
  ordreArrivee?: number;
  jumentPleine?: boolean;
  engagement?: boolean;
  handicapPoids?: number;
  poidsConditionMonteChange?: boolean;
  urlCasaque?: string;
  favoris?: boolean;
  allure?: string;
  minRapportProbable?: number;
  maxRapportProbable?: number;
  incident?: string;
  poidsConditionMonte?: number;
}
