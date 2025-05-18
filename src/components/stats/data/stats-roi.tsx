import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/label";

export const StatsROI = ({ className }: { className?: string }) => {
  const roi = 3.27;
  const roiToDisplay = `(${amountToDisplay(roi, "%")})`;
  return <div className={cn("", className)}>{roiToDisplay}</div>;
};
