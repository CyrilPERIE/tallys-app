export interface PronosticsResponse {
  nom_prix: string;
  id_nav_course: number;
  num_course_pmu: number;
  pronostics: Pronostics;
  nb_partants: number;
  source: string;
  id: string;
  compressed: boolean;
  dateReunion: number;
  numeroReunion: number;
  numeroCourse: number;
}

export interface Pronostics {
  prono_pmu_fr: PronoPmuFr;
  presentation_course: {
    translate: string;
  };
}

export interface PronoPmuFr {
  selection: Selection[];
  chapeau: {
    text: string;
    translate: string;
  };
}

export interface Selection {
  cote_prob: string;
  id_nav_partant: number;
  rang: number;
  num_partant: number;
}
