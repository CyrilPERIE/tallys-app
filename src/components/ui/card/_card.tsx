import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CircleHelpIcon } from "lucide-react";

export const CardInfo = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <Popover>
        <PopoverTrigger className={cn("cursor-pointer", className)} >
          <CircleHelpIcon className="w-4 h-4 text-slate-500" />
        </PopoverTrigger>
        <PopoverContent className="text-sm text-slate-600 px-4 py-3 w-fit">
          {children}
        </PopoverContent>
      </Popover>
    );
  };
  