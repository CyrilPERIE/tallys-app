import { cn } from "@/lib/utils";
import { Section, SectionTitle } from "@/components/ui/layout";
import { texts } from "@/lib/constants/texts";
export const StatsHitRate = ({ className }: { className?: string }) => {
  const _hitRate = 60;
  return (
    <Section className={cn("", className)}>
      <SectionTitle>{texts.stats.hitRate.title}</SectionTitle>
      <div className="text-2xl font-bold">{_hitRate}%</div>
    </Section>
  );
};
