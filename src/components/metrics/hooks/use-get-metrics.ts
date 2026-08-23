import { Metric } from "@/src/domain/entities/metrics";
import { getMetrics } from "@/src/domain/service/metrics";
import { useQuery } from "@tanstack/react-query";

interface UseGetMetricsType {
  metrics: Metric[];
  lastUpdate: Date;
}

export const useGetMetrics = () => {
  const { data, isLoading, error } = useQuery<UseGetMetricsType | undefined>({
    queryKey: ["metrics"],
    queryFn: async () => {
      const data = await getMetrics();
      if (data) {
        const lastUpdate = data.reduce(
          (max, metric) => Math.max(max, new Date(metric.updated_at).getTime()),
          0,
        );
        return {
          metrics: data.sort(
            (a, b) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime(),
          ),
          lastUpdate: new Date(lastUpdate),
        };
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, error };
};
