import { Identifiable } from "@/lib/types/pmu/common";

export interface CourseHippodrome extends Identifiable {
  codeHippodrome: string;
}

export interface ReunionHippodrome extends Identifiable {}

export type Hippodrome = CourseHippodrome;

export interface Meteo {
  datePrevision: number;
  nebulositeCode: string;
  nebulositeLibelleCourt: string;
  nebulositeLibelleLong: string;
  temperature: number;
  forceVent: number;
  directionVent: string;
}
