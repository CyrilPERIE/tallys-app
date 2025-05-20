import { TauxContribution } from "@/domain/entities/pmu/common";
import { BetType } from "@prisma/client";
export interface Cagnotte {
  numCourse: number;
  typePari: string;
  montant: number;
  cagnotteInternet: boolean;
  typeCagnotte?: string;
}

export interface Paris {
  poolId?: string;
  typePari: keyof typeof BetType;
  miseBase: number;
  miseMax?: number;
  enVente: boolean;
  audience: string;
  cagnotte?: number;
  reportable: boolean;
  codePari: string;
  nbChevauxReglementaire: number;
  ordre: boolean;
  combine: boolean;
  spotAutorise: boolean;
  complement: boolean;
  infosJackpot?: InfosJackpot;
  misEnPaiement?: boolean;
  valeursFlexiAutorisees?: number[];
  valeursRisqueAutorisees?: number[];
  nouveauQuinte?: boolean;
  infosOptionMax?: InfosOptionMax;
}

export interface InfosJackpot {
  miseBase: number;
  tauxContribution: TauxContribution;
}

export interface InfosOptionMax {
  miseBase: number;
  tauxContribution: TauxContribution;
  tirage: Tirage[];
}

export interface Tirage {
  coef: number;
  numeros: number[];
}

export interface ParisEvenement {
  codePari: string;
  course: {
    dateProgramme: number;
    numReunion: number;
    numOrdre: number;
  };
}

export interface PoolID {
  codePari: string;
  poolId: string;
}

export interface PhotosArrivee {
  heightSize: number;
  widthSize: number;
  url: string;
  originalSize: boolean;
}

export interface Pays {
  code: string;
  libelle: string;
}
