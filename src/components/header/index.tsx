"use client";

import { cn, isLastItem } from "@/src/lib/utils";
import { buttonVariants } from "@/src/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CaretRightIcon } from "@phosphor-icons/react";

export const Header = ({ className }: { className?: string }) => {
  const menuItems = [
    {
      label: "Constat",
      href: "/",
    },
    {
      label: "Récupération",
      href: "/recuperation",
    },
    {
      label: "Exploration des données",
      href: "/exploration",
    },
    {
      label: "Modélisation",
      href: "/modelisation",
    },
    {
      label: "Résultats",
      href: "/resultats",
    },
  ];
  return (
    <div
      className={cn(
        "bg-muted text-foreground flex items-center py-4 sticky top-0 z-50 px-4 sm:px-2 lg:px-6 border border-muted-foreground/25",
        className,
      )}
    >
      <Link
        href="/"
        className="text-2xl font-bold border-r-2 border-primary pr-4 mr-4"
      >
        <h1>Tallys</h1>
      </Link>
      <div className="flex items-center gap-1 overflow-x-auto overflow-y-hidden"> 
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <MenuItem label={item.label} href={item.href} index={index} />
            {!isLastItem(index, menuItems) && (
              <CaretRightIcon size={14} weight="thin" className="mr-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({
  label,
  href,
  index,
}: {
  label: string;
  href: string;
  index: number;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ variant: isActive ? "default" : "ghost" }),
        "text-md",
      )}
    >
      <span className="mr-1.5">{index}.</span> {label}
    </a>
  );
};
