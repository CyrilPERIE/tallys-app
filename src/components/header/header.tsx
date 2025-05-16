import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";

export const Header = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Row
      className={cn(
        "gap-4 justify-center items-center py-4 shadow-sm rounded-b-xl",
        className
      )}
    >
      {children}
    </Row>
  );
};
