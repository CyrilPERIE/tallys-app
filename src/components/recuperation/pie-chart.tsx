//TODO: Review the PieChart component to ensure it is correct and up to date.

"use client";

import { Badge } from "@/src/ui/badge";
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
  ChartTooltip,
} from "@/src/ui/chart";
import {
  aggregateScraperLogCounts,
  ScraperLogsMetricValue,
} from "@/src/domain/entities/metrics";
import { Label, Pie, PieChart as RechartsPieChart } from "recharts";
import { cn } from "@/src/lib/utils";

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
] as const;

const STATUS_ROWS = [
  { key: "successes", label: "Succès", variant: "success" },
  { key: "failures", label: "Échecs", variant: "danger" },
  { key: "pending", label: "En cours", variant: "warning" },
] as const;

const toChartKey = (name: string, index: number) => {
  const slug = name.replace(/[^a-zA-Z0-9_-]/g, "-");
  return slug || `pipeline-${index}`;
};

const formatPipelineName = (name: string) => name.replaceAll("_", " ");

interface PieChartProps {
  values: ScraperLogsMetricValue;
  className?: string;
}

const PieChart = ({ values, className }: PieChartProps) => {
  const chartData = Object.entries(values ?? {})
    .map(([name, counts], index) => {
      const key = toChartKey(name, index);
      return {
        key,
        label: formatPipelineName(name),
        count: counts.count,
        successes: counts.successes,
        failures: counts.failures,
        pending: counts.pending,
      };
    })
    .sort((a, b) => b.count - a.count)
    .map((item, index) => {
      const color = CHART_COLORS[index % CHART_COLORS.length];
      return {
        ...item,
        color,
        fill: `var(--color-${item.key})`,
      };
    });

  const totalRuns = aggregateScraperLogCounts(values ?? {}).count;

  const chartConfig = {
    count: { label: "Runs" },
    ...Object.fromEntries(
      chartData.map((item) => [
        item.key,
        {
          label: item.label,
          color: item.color,
        },
      ]),
    ),
  } satisfies ChartConfig;

  return (
    <Card className={cn("flex min-h-64 min-w-0 flex-col", className)}>
      <CardHeader className="items-center pb-0">
        <CardTitle>Runs par pipeline</CardTitle>
        <CardDescription>Volume de récupération par scraper</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center pb-0">
        {chartData.length === 0 || totalRuns === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun run disponible</p>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-h-[220px]"
            initialDimension={{ width: 220, height: 220 }}
          >
            <RechartsPieChart>
              <ChartTooltip cursor={false} content={<ScraperLogsTooltip />} />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="key"
                innerRadius={58}
                strokeWidth={5}
                paddingAngle={1.5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                      return null;
                    }
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground font-mono text-3xl font-bold tabular-nums"
                        >
                          {totalRuns.toLocaleString("fr-FR")}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground text-xs"
                        >
                          {totalRuns <= 1 ? "run" : "runs"}
                        </tspan>
                      </text>
                    );
                  }}
                />
              </Pie>
            </RechartsPieChart>
          </ChartContainer>
        )}
      </CardContent>
      {chartData.length > 0 && totalRuns > 0 && (
        <CardFooter className="flex-col items-stretch gap-1.5">
          {chartData.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex min-w-0 items-center gap-1.5">
                <span
                  className="size-2 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate capitalize">{item.label}</span>
              </div>
              <span className="font-mono font-medium tabular-nums">
                {item.count.toLocaleString("fr-FR")}
              </span>
            </div>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

type TooltipPayloadItem = {
  payload?: {
    label: string;
    count: number;
    successes: number;
    failures: number;
    pending: number;
  };
};

const ScraperLogsTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) => {
  if (!active || !payload?.length) return null;

  const item = payload[0]?.payload;
  if (!item) return null;

  return (
    <div className="grid min-w-44 gap-1.5 rounded-none border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="flex items-center justify-between gap-4 font-medium">
        <span className="capitalize">{item.label}</span>
        <span className="font-mono tabular-nums">
          {item.count.toLocaleString("fr-FR")}
        </span>
      </div>
      <div className="grid gap-1.5">
        {STATUS_ROWS.map((status) => (
          <div
            key={status.key}
            className="flex items-center justify-between gap-4"
          >
            <Badge variant={status.variant}>{status.label}</Badge>
            <span className="font-mono font-medium text-foreground tabular-nums">
              {item[status.key].toLocaleString("fr-FR")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
