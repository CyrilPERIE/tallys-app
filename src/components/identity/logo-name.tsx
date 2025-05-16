import { cn } from "@/lib/utils";
import { Logo } from "@/components/identity/logo";
import { texts } from "@/lib/constants/texts";
import { TypographyH1 } from "@/components/ui/typography";

export const LogoName = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo />
      <TypographyH1>{texts.app.name}</TypographyH1>
    </div>
  );
};
