import { cn } from "@/lib/utils";

export default function Header({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "gap-4 flex justify-center items-center py-4 shadow-sm rounded-b-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
