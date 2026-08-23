import { Metric } from "@/src/domain/entities/metrics";
import { Card, CardContent } from "@/src/ui/card";

export const CardCountMetric = ({ metric }: { metric: Metric }) => {
  return (
    <Card>
        <CardContent>
            <p className="text-sm font-medium">{metric.name}</p>
            <p className="text-2xl font-bold text-center">{metric.value.toFixed(1)}</p>
        </CardContent>
    </Card>
  );
};
