import { cn } from "@/src/lib/utils";
import { Card } from "@/src/ui/card";
import { BadgeIcon } from "@/src/components/_common/badge-icon";

export const PageIntroduction = ({
  icon,
  title,
  description,
  children,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-3 p-4 sm:flex-row sm:items-center",
        className,
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        <BadgeIcon className="shrink-0">{icon}</BadgeIcon>
        <div className="min-w-0">
          <h1 className="text-xl font-bold text-pretty sm:text-2xl">{title}</h1>
          <p className="text-sm text-muted-foreground text-pretty">
            {description}
          </p>
        </div>
      </div>
      {children ? (
        <div className="shrink-0 sm:ml-auto">{children}</div>
      ) : null}
    </Card>
  );
};
