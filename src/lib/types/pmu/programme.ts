import { Timestamped } from "@/lib/types/pmu/common";
import { Pays, Cagnotte, ParisEvenement } from "@/lib/types/pmu/miscellaneous";
import { CourseElement } from "@/lib/types/pmu/course";
import { Meteo, ReunionHippodrome } from "@/lib/types/pmu/reusable";

export interface ProgrammeResponse {
  programme: Programme;
  timestampPMU: Timestamped;
}

export interface ProgrammeWithMeteoResponse extends ProgrammeResponse {}

export interface Programme {
  cached: boolean;
  date: number;
  timezoneOffset: number;
  reunions: Reunion[];
  prochainesCoursesAPartir: any[];
  datesProgrammesDisponibles: string[];
}

export interface Reunion {
  cached: boolean;
  timezoneOffset: number;
  dateReunion: number;
  numOfficiel: number;
  numOfficielReunionPrecedente: number | null;
  numOfficielReunionSuivante: number;
  numExterne: number;
  nature: string;
  hippodrome: ReunionHippodrome;
  pays: Pays;
  courses: CourseElement[];
  audience: string;
  statut: string;
  disciplinesMere: string[];
  specialites: string[];
  derniereReunion: boolean;
  parisEvenement: ParisEvenement[];
  meteo: Meteo;
  offresInternet: boolean;
  cagnottes: Cagnotte[];
  regionHippique?: string;
}
