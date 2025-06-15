import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/filters/provider";
export const StatsROI = ({ className }: { className?: string }) => {
  const { data, isLoading, error } = useFiltersStore((state) => state);

  if (!data || isLoading || error)
    return <Skeleton className={cn("h-4 w-3/5 animate-pulse", className)} />;

  const roi = data.roi;
  if (data)
    return (
      <div className={cn("", className)}>{roi ? `(${roi}%)` : "Nan%"}</div>
    );
};
