export const URLS = {
    PMU: {
        PRONOSTIC: (pmuDate: string, reunionNum: string, courseNum: string) => `https://online.turfinfo.api.pmu.fr/rest/client/61/programme/${pmuDate}/R${reunionNum}/C${courseNum}/pronostics?commentaire=true`,
        PRONOSTICS_DETAILLES: (pmuDate: string, reunionNum: string, courseNum: string) => `https://online.turfinfo.api.pmu.fr/rest/client/61/programme/${pmuDate}/R${reunionNum}/C${courseNum}/pronostics-detailles`,
        RAPPORTS_DEFINITIFS: (pmuDate: string, reunionNum: string, courseNum: string) => `https://online.turfinfo.api.pmu.fr/rest/client/61/programme/${pmuDate}/R${reunionNum}/C${courseNum}/rapports-definitifs?specialisation=INTERNET&combinaisonEnTableau=true`,
        PROGRAMME: (pmuDate: string) => `https://online.turfinfo.api.pmu.fr/rest/client/61/programme/${pmuDate}?specialisation=INTERNET`,
        PROGAMME_WITH_METEO: (pmuDate: string) => `https://online.turfinfo.api.pmu.fr/rest/client/61/programme/${pmuDate}?meteo=true&specialisation=INTERNET`,
        COURSE: (pmuDate: string, reunionNum: string, courseNum: string) => `https://online.turfinfo.api.pmu.fr/rest/client/61/programme/${pmuDate}/R${reunionNum}/C${courseNum}?specialisation=INTERNET`,
    }
};
