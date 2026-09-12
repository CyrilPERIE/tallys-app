import { cn } from "@/src/lib/utils";
import { Card, CardContent } from "@/src/ui/card";

interface CardCountMetricProps {
  value: string;
  title: string;
  icon: React.ReactNode;
  caption?: string;
  className?: string;
}

export const CardMetric = ({
  value,
  title,
  icon,
  caption,
  className,
}: CardCountMetricProps) => {
  return (
    <Card className={cn("min-w-0", className)}>
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs font-medium tracking-wide text-pretty">
            {title.toUpperCase()}
          </p>
          <div className="flex shrink-0 items-center justify-center text-primary">
            {icon}
          </div>
        </div>
        <p className="text-xl font-bold sm:text-2xl">{value}</p>
        {caption && (
          <p className="text-xs text-muted-foreground text-pretty sm:text-sm">
            {caption}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
