import { cn } from "@/lib/utils";

export const TypographyH1 = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className={cn("text-2xl font-bold", className)} {...props}>{children}</h1>;
};
