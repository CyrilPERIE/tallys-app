import { cn } from "@/lib/utils";
import { Section, SectionTitle } from "@/components/ui/layout";
export const StatsHitRate = ({ className }: { className?: string }) => {
  const _hitRate = 60;
  return (
    <Section className={cn("", className)}>
      <SectionTitle>Hit Rate</SectionTitle>
      <div className="text-2xl font-bold">{_hitRate}%</div>
    </Section>
  );
};
