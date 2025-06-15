import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/filters/provider";
export const StatsROI = ({ className }: { className?: string }) => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const roi = data.roi
  const roiToDisplay = roi ? `(${roi}%)` : "Nan%";
  
  return <div className={cn("", className)}>{roiToDisplay}</div>;
};
