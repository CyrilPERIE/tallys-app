import { cn } from "@/lib/utils";
import { Logo } from "@/components/identity/logo";

export const LogoName = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo />
      <h1>E-PMU</h1>
    </div>
  );
};
