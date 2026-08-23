"use client";

import { cn } from "@/src/lib/utils";
import { buttonVariants } from "@/src/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = ({ className }: { className?: string }) => {
  const menuItems = [
    {
      label: "Recuperation",
      href: "/recuperation",
    },
  ];
  return (
    <div
      className={cn(
        "bg-muted/25 text-foreground flex items-center py-4 gap-4 rounded-3xl sticky top-0 z-50 px-6 border border-muted-foreground/25",
        className,
      )}
    >
      <Link href="/" className="text-2xl font-bold border-r-2 border-primary pr-4">
        <h1>Tallys</h1>
      </Link>
      {menuItems.map((item) => (
        <MenuItem key={item.href} label={item.label} href={item.href} />
      ))}
    </div>
  );
};

const MenuItem = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant: isActive ? "default" : "ghost" }), "text-md")}
    >
      {label}
    </a>
  );
};
