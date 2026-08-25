import { getMetrics, GetMetricsResponseMapped } from "@/src/domain/service/metrics";
import { useQuery } from "@tanstack/react-query";

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

  return { data, isLoading, error };
};