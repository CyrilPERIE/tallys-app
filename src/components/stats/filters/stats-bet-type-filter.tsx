import { MultiSelect } from "@/components/ui/multi-select";
import { texts } from "@/lib/constants/texts";
import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/filters/provider";
import { BetType } from "@prisma/client";

export const StatsBetTypeFilter = ({ className }: { className?: string }) => {
  const { betTypeFilter, updateBetTypeFilter } = useFiltersStore((state) => state);
  const onValueChange = (values: string[]) => {
    updateBetTypeFilter(values as BetType[]);
  }
  return (
    <MultiSelect
      className={cn("", className)}
      options={Object.values(BetType).map((betType) => ({
        label: betType,
        value: betType,
      }))}
      onValueChange={onValueChange}
      placeholder={texts.stats.betType.filters.placeholder}
      maxCount={3}
      defaultValue={[BetType.E_SIMPLE_PLACE]}
    />
  );
};
