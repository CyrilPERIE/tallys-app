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
    <Card className={cn("flex flex-row items-center gap-2 p-4", className)}>
      <BadgeIcon>
        {icon}
      </BadgeIcon>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="ml-auto">{children}</div>
    </Card>
  );
};
