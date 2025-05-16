import { cn } from "@/lib/utils";
export const StatsTotalProfit = ({ className }: { className?: string }) => {
  const totalProfit = "+3125,64";
  return (
    <div className={cn("text-2xl font-bold", className)}>{totalProfit}€</div>
  );
};
