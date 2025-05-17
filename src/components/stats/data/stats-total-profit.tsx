import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/pmu-to-domain";
export const StatsTotalProfit = ({ className }: { className?: string }) => {
  const totalProfit = 3125.64;
  const totalProfitToDisplay = amountToDisplay(totalProfit);
  return (
    <div className={cn("text-2xl font-bold", className)}>{totalProfitToDisplay}</div>
  );
};
