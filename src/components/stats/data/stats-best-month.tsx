import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Column } from "@/components/ui/layout";
import { amountToDisplay, getMonthLabel } from "@/lib/utils/pmu-to-domain";

type BestMonthProps = {
  month: string;
  year: string;
  profit: number;
};

export const StatsBestMonth = ({ className }: { className?: string }) => {
  const bestMonth: BestMonthProps = {
    month: "1",
    year: "2024",
    profit: 947.53,
  };
  const { month, year } = bestMonth;
  const monthLabel = getMonthLabel(month);
  const profitToDisplay = amountToDisplay(bestMonth.profit);
  return (
    <Column className={cn("items-center justify-center gap-2", className)}>
      <p className="text-2xl font-bold">{profitToDisplay}</p>
      <Row className="text-slate-500">
        <p>
          <span>{monthLabel}</span>{" "}
          <span>{year}</span>
        </p>
      </Row>
    </Column>
  );
};
