import { cn } from "@/lib/utils";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        "text-center text-sm py-4 rounded-t-xl shadow-sm",
        className
      )}
    >
      <p>E-PMU</p>
    </footer>
  );
};
