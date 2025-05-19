import {
  Incident,
  Penetrometre,
  CommentaireSource,
} from "@/domain/entities/pmu/common";
import {
  PoolID,
  PhotosArrivee,
  Cagnotte,
  Paris,
} from "@/domain/entities/pmu/miscellaneous";
import { Hippodrome } from "@/domain/entities/pmu/reusable";

export interface CourseElement extends CourseBase {
  poolIds?: PoolID[];
  penetrometre?: Penetrometre;
  incidents?: Incident[];
  typePiste?: string;
  indicateurEvenementArriveeProvisoire?: string;
  detailsIndicateurEvenementArriveeProvisoire?: string;
  numQuestion?: number[];
  corde?: string;
}

export interface Course extends CourseBase {
  photosArrivee: PhotosArrivee[];
  commentaireApresCourse: CommentaireSource;
}

export interface CourseBase {
  cached: boolean;
  departImminent: boolean;
  arriveeDefinitive: boolean;
  timezoneOffset: number;
  numReunion: number;
  numExterneReunion: number;
  numOrdre: number;
  numExterne: number;
  heureDepart: number;
  libelle: string;
  libelleCourt: string;
  montantPrix: number;
  parcours: string;
  distance: number;
  distanceUnit: string;
  discipline: string;
  specialite: string;
  categorieParticularite: string;
  conditionAge?: string;
  conditionSexe: string;
  nombreDeclaresPartants: number;
  grandPrixNationalTrot: boolean;
  numSocieteMere: number;
  pariMultiCourses: boolean;
  pariSpecial: boolean;
  montantTotalOffert: number;
  montantOffert1er: number;
  montantOffert2eme: number;
  montantOffert3eme: number;
  montantOffert4eme: number;
  montantOffert5eme: number;
  conditions: string;
  numCourseDedoublee: number;
  paris: Paris[];
  statut: string;
  categorieStatut: string;
  dureeCourse: number;
  participants: any[];
  ecuries: any[];
  rapportsDefinitifsDisponibles: boolean;
  isArriveeDefinitive: boolean;
  isDepartImminent: boolean;
  isDepartAJPlusUn: boolean;
  cagnottes: Cagnotte[];
  pronosticsExpires: boolean;
  replayDisponible: boolean;
  hippodrome: Hippodrome;
  epcPourTousParis: boolean;
  courseTrackee: boolean;
  courseExclusiveInternet: boolean;
  formuleChampLibreIndisponible: boolean;
  ordreArrivee: Array<number[]>;
  hasEParis: boolean;
}
