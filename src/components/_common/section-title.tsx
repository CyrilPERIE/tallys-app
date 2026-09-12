import { Separator } from "@/src/ui/separator";

export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="mb-4 flex min-w-0 items-center gap-2">
      <p className="shrink-0 text-lg font-bold text-primary sm:text-xl">
        {title}{" "}
        {subtitle && (
          <span className="text-sm text-muted-foreground sm:text-base">
            {subtitle.toUpperCase()}
          </span>
        )}
      </p>
      <Separator className="min-w-0 flex-1 bg-border" />
    </div>
  );
};
