"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Courses",
    href: "/",
  },
  {
    label: "Stats",
    href: "/stats",
  },
];

export const Nav = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div
      className={cn(
        "relative flex gap-6 bg-slate-100 rounded-full py-2 px-4",
        className
      )}
    >
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <div key={item.href} className="relative">
            {active && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 bg-white rounded-full z-0"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <Button
              variant="ghost"
              className={cn(
                "relative z-10 rounded-full py-2 px-4 transition-colors duration-200 hover:bg-transparent",
                active
                  ? "text-black font-bold underline"
                  : "text-muted-foreground"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
};
