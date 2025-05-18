import { Timestamped } from "@/domain/entities/pmu/common";
import {
  Pays,
  Cagnotte,
  ParisEvenement,
} from "@/domain/entities/pmu/miscellaneous";
import { CourseElement } from "@/domain/entities/pmu/course";
import { Meteo, ReunionHippodrome } from "@/domain/entities/pmu/reusable";

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
