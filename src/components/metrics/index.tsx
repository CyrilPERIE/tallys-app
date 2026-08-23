import { Metric, MetricType } from "@/src/domain/entities/metrics";
import { useGetMetrics } from "./hooks/use-get-metrics";
import { CardCountMetric } from "./card-metric";
import { SpinnerGapIcon } from "@phosphor-icons/react";

export const Metrics = () => {
  const { data, isLoading, error } = useGetMetrics();
  if (isLoading) return <MetricsLoading />;
  if (error || !data)
    return (
      <MetricsError
        error={
          error || new Error("Erreur lors de la récupération des métriques")
        }
      />
    );
  if (data.metrics.length === 0) return <MetricsEmpty />;
  return (
    <>
      <p>Dernière MàJ - {data.lastUpdate.toLocaleString()}</p>
      <MetricsData data={data?.metrics || []} />
    </>
  );
};

const MetricsData = ({ data }: { data: Metric[] | undefined }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {data?.map((metric: Metric) => (
            metric.type === MetricType.COUNT && <CardCountMetric metric={metric} key={metric.name}/>
        ))}
      </div>
    </div>
  );
};

const MetricsLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <SpinnerGapIcon className="w-10 h-10 animate-spin text-primary" />
    </div>
  );
};

const MetricsError = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>Metrics</h1>
      <div>{error.message}</div>
    </div>
  );
};

const MetricsEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Metriques</h1>
      <div className="text-sm text-gray-500">Aucune métrique calculée pour le moment.</div>
    </div>
  );
};