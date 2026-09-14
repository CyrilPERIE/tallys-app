import {
  Metrics as MetricsEntity,
} from "@/src/domain/entities/metrics";
import { CardMetric } from "@/src/components/recuperation/card-metric";
import { cn } from "@/src/lib/utils";
import { CalendarIcon, DatabaseIcon, FlagIcon, GitCommitIcon, StackIcon, UsersIcon } from "@phosphor-icons/react";
import { format_quantity } from "@/src/lib/format";

export const Metrics = ({
  metrics,
  databaseSize,
  className,
}: {
  metrics: MetricsEntity;
  databaseSize: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-6",
        className,
      )}
    >
      <CardMetric
        title="PROGRAMMES"
        value={format_quantity(metrics["Nombre de programmes récupérés"].value.value)}
        icon={<CalendarIcon size={18} />}
        caption={`depuis ${metrics["Année la plus ancienne des programmes"].value.value}`}
      />
      <CardMetric 
        title="RÉUNIONS"
        value={format_quantity(metrics["Nombre de réunions récupérées"].value.value)}
        icon={<StackIcon size={18} />}
        caption={`${format_quantity(metrics["Nombre moyen de réunions par programme"].value.value)} par programme`}
      />
      <CardMetric 
        title="COURSES"
        value={format_quantity(metrics["Nombre de courses récupérées"].value.value)}
        icon={<FlagIcon size={18} />}
        caption={`${format_quantity(metrics["Nombre moyen de courses par programme"].value.value)} par programme`}
      />
      <CardMetric 
        title="PARTICIPANTS"
        value={format_quantity(metrics["Nombre de participants récupérés"].value.value)}
        icon={<UsersIcon size={18} />}
        caption={`${format_quantity(metrics["Nombre moyen de participants par course"].value.value)} partants / course`}
      />
      <CardMetric 
        title="COMBINAISONS"
        value={format_quantity(metrics["Nombre de combinaisons récupérées"].value.value)}
        icon={<GitCommitIcon size={18} />}
        caption={`tous types de paris`}
      />
      <CardMetric 
        title="TAILLE BASE"
        value={databaseSize}
        icon={<DatabaseIcon size={18} />}
      />
    </div>
  );
};
