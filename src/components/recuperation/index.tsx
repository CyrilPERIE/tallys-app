import { Metrics } from "./metrics";
import { useGetMetrics } from "@/src/components/recuperation/hooks/use-get-metrics";
import { ScraperLogsTable } from "@/src/components/recuperation/scraper-logs-table";
import { ExclamationMarkIcon, SpinnerIcon } from "@phosphor-icons/react";

export const Recuperation = () => {
  const { data, isLoading, error } = useGetMetrics();
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <SpinnerIcon size={24} className="animate-spin" />
      </div>
    );
  if (error)
    return (
      <div className="flex h-full">
        <ExclamationMarkIcon size={24} className="text-red-500" /> Erreur lors
        de la récupération des données
      </div>
    );
  if (!data) return <div className="flex h-full">Aucune donnée disponible</div>;
  return (
    <div>
      <Metrics
        metrics={data.metrics}
        databaseSize={data.databaseSize}
        className="mb-4"
      />
      <ScraperLogsTable scraperLogs={data.scraperLogs} />
    </div>
  );
};
