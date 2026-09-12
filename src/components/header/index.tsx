"use client";

import { cn, isLastItem } from "@/src/lib/utils";
import { buttonVariants } from "@/src/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CaretRightIcon, TrophyIcon } from "@phosphor-icons/react";

export const Header = ({ className }: { className?: string }) => {
  const menuItems = [
    {
      label: "Nature",
      href: "/",
    },
    {
      label: "Récupération",
      href: "/recuperation",
    },
    {
      label: "Exploration",
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
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-muted-foreground/25 bg-muted text-foreground",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-4 lg:px-8 lg:py-4">
        <div className="flex shrink-0 items-center justify-between gap-3 lg:mr-2 lg:border-r-2 lg:border-primary lg:pr-4">
          <Link href="/">
            <h1 className="text-xl font-bold sm:text-2xl">Tallys</h1>
          </Link>
        </div>
        <nav className="flex min-w-0 flex-wrap items-center gap-1">
          {menuItems.map((item, index) => (
            <div key={item.href} className="flex shrink-0 items-center gap-1">
              <MenuItem label={item.label} href={item.href} index={index} />
              {!isLastItem(index, menuItems) && (
                <CaretRightIcon
                  size={14}
                  weight="thin"
                  className="mr-1 hidden text-muted-foreground sm:block"
                />
              )}
            </div>
          ))}
        </nav>
        <p className="ml-auto hidden items-center gap-1 text-sm lg:flex">
          <TrophyIcon size={14} weight="thin" /> Code 100% Humain
        </p>
      </div>
    </header>
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
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: isActive ? "default" : "ghost",
          size: "sm",
        }),
      )}
    >
      <span className="mr-1 hidden md:inline">{index}.</span>
      {label}
    </Link>
  );
};
