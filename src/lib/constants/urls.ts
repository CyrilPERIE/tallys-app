import { BetType } from "@prisma/client";

const BASE_PMU_URL = "https://online.turfinfo.api.pmu.fr/rest/client/61";

export const URLS = {
  PMU: {
    PARTICIPANTS: (pmuDate: string, reunionNum: string, courseNum: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}/participants?specialisation=INTERNET`,
    PRONOSTIC: (pmuDate: string, reunionNum: string, courseNum: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}/pronostics?commentaire=true`,
    PRONOSTICS_DETAILLES: (
      pmuDate: string,
      reunionNum: string,
      courseNum: string
    ) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}/pronostics-detailles`,
    RAPPORTS_BY_BET_TYPE: (
      pmuDate: string,
      reunionNum: string,
      courseNum: string,
      betType: BetType
    ) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}/rapports/${betType}`,
    RAPPORTS_DEFINITIFS: (
      pmuDate: string,
      reunionNum: string,
      courseNum: string
    ) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}/rapports-definitifs?specialisation=INTERNET&combinaisonEnTableau=true`,
    RAPPORTS_DEFINITIFS_BY_BET_TYPE: (
      pmuDate: string,
      reunionNum: string,
      courseNum: string,
      betType: keyof typeof BetType
    ) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}/rapports-definitifs/${betType}`,
    PROGRAMME: (pmuDate: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}?specialisation=INTERNET`,
    PROGAMME_WITH_METEO: (pmuDate: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}?meteo=true&specialisation=INTERNET`,
    COURSE: (pmuDate: string, reunionNum: string, courseNum: string) =>
      `${BASE_PMU_URL}/programme/${pmuDate}/R${reunionNum}/C${courseNum}?specialisation=INTERNET`,
  },
};
