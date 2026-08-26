import { Metrics } from "./metrics";
import { useGetMetrics } from "@/src/components/recuperation/hooks/use-get-metrics";
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

export const Recuperation = () => {
  return (
    <>
      <PageIntroduction
        icon={<GhostIcon weight="bold" className="text-primary size-12" />}
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
      <Badge variant="secondary">
        <SpinnerIcon size={16} className="animate-spin mr-1.5" />
        <span>Chargement des pipelines...</span>
      </Badge>
    );
  if (arePipelinesRunning && !arePipelinesActive)
    return (
      <Badge variant="warning">
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
