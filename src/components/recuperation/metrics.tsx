import {
  Metrics as MetricsEntity,
} from "@/src/domain/entities/metrics";
import { CardMetric } from "@/src/components/recuperation/card-metric";
import { cn } from "@/src/lib/utils";
import { CalendarIcon, DatabaseIcon, FlagIcon, StackIcon } from "@phosphor-icons/react";

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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4",
        className,
      )}
    >
      <CardMetric
        title="PROGRAMMES"
        value={metrics["Nombre de programmes récupérés"].value.toString()}
        icon={<CalendarIcon size={18} />}
        caption={`depuis ${metrics["Année la plus ancienne des programmes"].value}`}
      />
      <CardMetric 
        title="RÉUNIONS"
        value={metrics["Nombre de réunions récupérées"].value.toString()}
        icon={<StackIcon size={18} />}
        caption={`${metrics["Nombre moyen de réunions par programme"].value.toFixed(1)} par programme`}
      />
      <CardMetric 
        title="COURSES"
        value={metrics["Nombre de courses récupérées"].value.toString()}
        icon={<FlagIcon size={18} />}
        caption={`${metrics["Nombre moyen de courses par programme"].value.toFixed(1)} par programme`}
      />
      <CardMetric 
        title="TAILLE BASE"
        value={databaseSize}
        icon={<DatabaseIcon size={18} />}
      />
    </div>
  );
};
