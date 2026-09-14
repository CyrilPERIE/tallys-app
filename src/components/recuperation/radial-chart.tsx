//TODO: Review the RadialChart component to ensure it is correct and up to date.

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/src/ui/chart";
import {
  aggregateScraperLogCounts,
  ScraperLogsMetricValue,
} from "@/src/domain/entities/metrics";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { cn } from "@/src/lib/utils";

const STATUS_KEYS = ["successes", "failures", "pending"] as const;

const chartConfig = {
  successes: {
    label: "Succès",
    color: "var(--chart-1)",
  },
  failures: {
    label: "Échecs",
    color: "var(--chart-2)",
  },
  pending: {
    label: "En cours",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

interface RadialChartProps {
  values: ScraperLogsMetricValue;
  className?: string;
}

export const RadialChart = ({ values, className }: RadialChartProps) => {
  const totals = aggregateScraperLogCounts(values ?? {});
  const totalRuns = totals.count;
  const totalSuccesses = totals.successes;
  const totalFailures = totals.failures;
  const totalPending = totals.pending;
  const chartData = [
    {
      successes: totals.successes,
      failures: totals.failures,
      pending: totals.pending,
    },
  ];

  return (
    <Card className={cn("flex min-h-64 min-w-0 flex-col", className)}>
      <CardHeader className="items-center pb-0">
        <CardTitle>Statut des runs</CardTitle>
        <CardDescription>Succès, échecs et en cours</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        {totalRuns === 0 ? (
          <p className="mx-auto text-sm text-muted-foreground">
            Aucun run disponible
          </p>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[250px]"
            initialDimension={{ width: 250, height: 250 }}
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                      return null;
                    }
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground font-mono text-2xl font-bold tabular-nums"
                        >
                          {totalRuns.toLocaleString("fr-FR")}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          {totalRuns <= 1 ? "run" : "runs"}
                        </tspan>
                      </text>
                    );
                  }}
                />
              </PolarRadiusAxis>
              {STATUS_KEYS.map((key) => (
                <RadialBar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  cornerRadius={5}
                  fill={chartConfig[key].color}
                  className="stroke-transparent stroke-2"
                />
              ))}
            </RadialBarChart>
          </ChartContainer>
        )}
      </CardContent>
      {totalRuns > 0 && (
        <CardFooter className="flex justify-between gap-2">
          {STATUS_KEYS.map((key) => (
            <div key={key} className="flex min-w-0 flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="size-2 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: chartConfig[key].color }}
                />
                <span className="text-muted-foreground">
                  {chartConfig[key].label}
                </span>
              </div>
              <span className="font-mono font-medium tabular-nums">
                {totals[key].toLocaleString("fr-FR")}
              </span>
            </div>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};
