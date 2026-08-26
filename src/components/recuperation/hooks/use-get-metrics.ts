import { ScraperLogStatus } from "@/src/domain/entities/scraperLog";
import { getMetrics, GetMetricsResponseMapped } from "@/src/domain/service/metrics";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useGetMetrics = () => {
  const { data, isLoading, error } = useQuery<GetMetricsResponseMapped | undefined>({
    queryKey: ["metrics"],
    queryFn: async () => {
      const data = await getMetrics();
      if (data) {
        return {
          metrics: data.metrics,
          databaseSize: data.databaseSize,
          scraperLogs: data.scraperLogs.sort(
            (a, b) =>
              new Date(b.end_time ?? new Date()).getTime() -
              new Date(a.end_time ?? new Date()).getTime(),
          ),
        };
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
  });

  const arePipelinesActive: boolean | undefined = useMemo(() => {
    if (!data || data.scraperLogs.length === 0) return undefined;
    return data.scraperLogs[0].status !== ScraperLogStatus.FAILED;
  }, [data]);

  const arePipelinesRunning: boolean | undefined = useMemo(() => {
    if (!data || data.scraperLogs.length === 0) return undefined;
    return data.scraperLogs[0].status === ScraperLogStatus.RUNNING;
  }, [data]);

  return { data, isLoading, error, arePipelinesActive, arePipelinesRunning };
};