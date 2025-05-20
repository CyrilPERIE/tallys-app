import { BetType } from "@prisma/client";
import { CourseIdentifiers } from "@/domain/entities/utils";
const BASE_PMU_URL = "https://online.turfinfo.api.pmu.fr/rest/client/61";

export const URLS = {
  PMU: {
    PARTICIPANTS: (courseIdentifiers: CourseIdentifiers) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}/participants?specialisation=INTERNET`,
    PRONOSTIC: (courseIdentifiers: CourseIdentifiers) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}/pronostics?commentaire=true`,
    PRONOSTICS_DETAILLES: (courseIdentifiers: CourseIdentifiers) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}/pronostics-detailles`,
    RAPPORTS_BY_BET_TYPE: (
      courseIdentifiers: CourseIdentifiers,
      betType: BetType
    ) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}/rapports/${betType}`,
    RAPPORTS_DEFINITIFS: (courseIdentifiers: CourseIdentifiers) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}/rapports-definitifs?specialisation=INTERNET&combinaisonEnTableau=true`,
    RAPPORTS_DEFINITIFS_BY_BET_TYPE: (
      courseIdentifiers: CourseIdentifiers,
      betType: keyof typeof BetType
    ) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}/rapports-definitifs/${betType}`,
    PROGRAMME: (pmuDate: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}?specialisation=INTERNET`,
    PROGAMME_WITH_METEO: (pmuDate: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}?meteo=true&specialisation=INTERNET`,
    COURSE: (courseIdentifiers: CourseIdentifiers) =>
      `${BASE_PMU_URL}/programme/${courseIdentifiers.pmuDate}/R${courseIdentifiers.reunionNum}/C${courseIdentifiers.courseNum}?specialisation=INTERNET`,
  },
};
