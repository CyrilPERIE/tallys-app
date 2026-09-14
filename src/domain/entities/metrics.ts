export interface CountMetricValue {
  value: number;
}

export interface ScraperLogCounts {
  count: number;
  successes: number;
  failures: number;
  pending: number;
}

export type ScraperLogsMetricValue = Record<string, ScraperLogCounts>;

//TODO: Review the aggregateScraperLogCounts function to ensure it is correct and up to date.
export const aggregateScraperLogCounts = (
  values: ScraperLogsMetricValue,
): ScraperLogCounts =>
  Object.values(values ?? {}).reduce(
    (acc, item) => ({
      count: acc.count + item.count,
      successes: acc.successes + item.successes,
      failures: acc.failures + item.failures,
      pending: acc.pending + item.pending,
    }),
    { count: 0, successes: 0, failures: 0, pending: 0 },
  );

//TODO: Review the Metric interface to ensure it is correct and up to date.
export interface Metric<TName extends MetricName = MetricName> {
  name: TName;
  value: TName extends "Nombre de logs de scraper"
    ? ScraperLogsMetricValue
    : CountMetricValue;
  type: MetricType;
  created_at: Date;
  updated_at: Date;
}

export type Metrics = {
  [K in MetricName]: Metric<K>;
};

export enum MetricType {
  COUNT = "count",
  TABLE = "table",
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
  "Nombre de participants récupérés",
  "Nombre moyen de participants par course",
  "Nombre de combinaisons récupérées",
  "Nombre moyen de courses par jour",
  "Nombre de logs de scraper",
] as const;

export type MetricName = (typeof MetricNames)[number];
