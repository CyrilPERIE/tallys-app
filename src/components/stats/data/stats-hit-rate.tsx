import { cn } from "@/lib/utils";

export const StatsHitRate = ({ className }: { className?: string }) => {
  const _hitRate = 60;
  const _hitRateToDisplay = `${_hitRate}%`;
  return <div className={cn("text-2xl font-bold", className)}>{_hitRateToDisplay}</div>;
};
