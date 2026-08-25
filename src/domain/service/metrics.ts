import { fetchBackend } from "@/src/lib/backend-client";
import { Metric, Metrics } from "@/src/domain/entities/metrics";
import { ScraperLog, ScraperLogStatus } from "@/src/domain/entities/scraperLog";

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

export const getMetrics = async (): Promise<GetMetricsResponseMapped | undefined> => {
  try {
    const data = await fetchBackend<GetMetricsResponse>({
      endpoint: "/metrics",
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
