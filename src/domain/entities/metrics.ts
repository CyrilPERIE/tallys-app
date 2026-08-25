export interface Metric {
  name: MetricName;
  value: number;
  type: MetricType;
  created_at: Date;
  updated_at: Date;
}

export type Metrics = {
  [K in MetricName]: Metric & { name: K };
};

export enum MetricType {
  COUNT = "count",
  DURATION = "duration",
  PERCENTAGE = "percentage",
}

export const MetricNames = [
  "Nombre de courses récupérées",
  "Nombre de réunions récupérées",
  "Nombre de programmes récupérés",
  "Nombre de courses terminées",
  "Nombre de courses en cours de récupération",
  "Nombre moyen de courses par programme",
  "Nombre moyen de réunions par programme",
  "Année la plus ancienne des programmes",
  "Nombre moyen de courses par jour",
] as const;

export type MetricName = (typeof MetricNames)[number];