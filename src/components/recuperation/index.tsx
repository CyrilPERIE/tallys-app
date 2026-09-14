import { Metrics } from "./metrics";
import { useGetMetrics } from "@/src/components/recuperation/hooks/use-get-metrics-recuperation";
import { ScraperLogsTable } from "@/src/components/recuperation/scraper-logs-table";
import {
  DownloadSimpleIcon,
  ExclamationMarkIcon,
  GhostIcon,
  PowerIcon,
  PulseIcon,
  SpinnerIcon,
} from "@phosphor-icons/react";
import { PageIntroduction } from "@/src/components/_common/page_summary";
import { Badge } from "@/src/ui/badge";
import PieChart from "@/src/components/recuperation/pie-chart";
import { RadialChart } from "@/src/components/recuperation/radial-chart";

export const Recuperation = () => {
  return (
    <>
      <PageIntroduction
        icon={
          <GhostIcon
            weight="bold"
            className="size-10 text-primary sm:size-12"
          />
        }
        title="Récupération"
        description="Métrics sur la récupération de données effectuée sur l'API publique de PMU."
        className="mb-4"
      >
        <RecuperationPageIntroductionChildren />
      </PageIntroduction>
      <RecuperationContent />
    </>
  );
};

const RecuperationPageIntroductionChildren = () => {
  const { arePipelinesActive, arePipelinesRunning } = useGetMetrics();
  if (arePipelinesActive === undefined && arePipelinesRunning === undefined)
    return (
      <Badge
        variant="secondary"
        className="h-auto max-w-full whitespace-normal"
      >
        <SpinnerIcon size={16} className="mr-1.5 animate-spin" />
        <span>Chargement des pipelines...</span>
      </Badge>
    );
  if (arePipelinesRunning)
    return (
      <Badge variant="warning" className="h-auto max-w-full whitespace-normal">
        <DownloadSimpleIcon size={16} weight="bold" className="mr-1.5" />
        <span>En cours de récupération</span>
      </Badge>
    );
  if (arePipelinesActive && !arePipelinesRunning)
    return (
      <Badge variant="success">
        <PulseIcon size={16} weight="bold" className="mr-1.5" />{" "}
        <span>Pipelines actives</span>
      </Badge>
    );
  return (
    <Badge variant="destructive">
      <PowerIcon size={16} weight="bold" className="mr-1.5" />{" "}
      <span>Pipelines éteintes</span>
    </Badge>
  );
};

const RecuperationContent = () => {
  const { data, isLoading, error } = useGetMetrics();
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <SpinnerIcon size={24} className="animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="flex min-w-0 items-start gap-2 text-sm">
        <ExclamationMarkIcon size={24} className="shrink-0 text-red-500" />
        <span>Erreur lors de la récupération des données</span>
      </div>
    );

  if (!data) return <div className="flex h-full">Aucune donnée disponible</div>;
  const scraperLogsMetric = data.metrics["Nombre de logs de scraper"].value;
  return (
    <div>
      <Metrics
        metrics={data.metrics}
        databaseSize={data.databaseSize}
        className="mb-4"
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-7">
        <ScraperLogsTable
          scraperLogs={data.scraperLogs}
          className="col-span-2 sm:col-span-3 xl:col-span-3"
        />
          <PieChart values={scraperLogsMetric} className="col-span-2 sm:col-span-3 xl:col-span-2" />
          <RadialChart values={scraperLogsMetric} className="col-span-2 sm:col-span-3 xl:col-span-2" />
      </div>
    </div>
  );
};
