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
    <Card className={cn("", className)}>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-md">{title.toUpperCase()}</p>
          <div className="flex items-center justify-center text-primary">{icon}</div>
        </div>
        <p className="text-2xl font-bold">{value}</p>
        {caption && <p className="text-sm text-gray-500">{caption}</p>}
      </CardContent>
    </Card>
  );
};
