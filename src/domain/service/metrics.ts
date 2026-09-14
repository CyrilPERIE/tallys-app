//TODO: Review the metrics service to ensure it is correct and up to date.

import { fetchBackend } from "@/src/lib/backend-client";
import { Metric, Metrics } from "@/src/domain/entities/metrics";
import { ScraperLog, ScraperLogStatus } from "@/src/domain/entities/scraperLog";

export enum MetricsCategory {
  RECUPERATION = "recuperation",
}

export interface GetMetricsResponse {
  metrics: Metric[];
  scraper_logs: ScraperLog[];
  database_size: string;
}

export interface GetMetricsResponseMapped {
  metrics: Metrics;
  scraperLogs: ScraperLog[];
  databaseSize: string;
}

export const getMetrics = async (metricsCategory: MetricsCategory): Promise<GetMetricsResponseMapped | undefined> => {
  try {
    const data = await fetchBackend<GetMetricsResponse>({
      endpoint: `/metrics/${metricsCategory}`,
    });
    const metrics = mapMetrics(data.metrics);
    const scraperLogs = data.scraper_logs.map((log) => {
      log.status = mapScraperLogStatus(log.status);
      return log;
    });
    return { metrics, scraperLogs, databaseSize: data.database_size };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const mapScraperLogStatus = (status: string): ScraperLogStatus => {
  switch (status) {
    case "completed":
      return ScraperLogStatus.COMPLETED;
    case "failed":
      return ScraperLogStatus.FAILED;
    default:
      return ScraperLogStatus.RUNNING;
  }
};

const mapMetrics = (metrics: Metric[]): Metrics => {
  return Object.fromEntries(
    metrics.map((metric) => [metric.name, metric]),
  ) as Metrics;
};
