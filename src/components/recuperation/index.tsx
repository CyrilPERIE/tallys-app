import { Metrics } from "./metrics";
import { useGetMetrics } from "@/src/components/recuperation/hooks/use-get-metrics";
import { ScraperLogsTable } from "@/src/components/recuperation/scraper-logs-table";

export const Recuperation = () => {
  const { data, isLoading, error } = useGetMetrics();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;
  return (
    <div>
      <Metrics metrics={data.metrics} databaseSize={data.databaseSize} className="mb-4" />
      <ScraperLogsTable scraperLogs={data.scraperLogs} />
    </div>
  );
};
