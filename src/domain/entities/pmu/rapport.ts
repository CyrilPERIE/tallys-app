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
