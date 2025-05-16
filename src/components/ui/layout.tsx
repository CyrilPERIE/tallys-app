import { cn } from "@/lib/utils";

export const Row = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-row gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export const Column = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export const Section = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "shadow-sm rounded-md p-4 bg-white relative flex flex-col justify-center items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const SectionTitle = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("font-medium absolute top-2 left-3", className)}
      {...props}
    >
      {children}
    </div>
  );
};
