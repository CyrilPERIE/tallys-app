import { cn } from "@/src/lib/utils";

export const BadgeIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-fit flex items-center justify-center bg-primary/10 rounded-lg p-2", className)}>
      {children}
    </div>
  );
};
