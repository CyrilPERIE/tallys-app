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

export default function Nav({ className }: { className?: string }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div
      className={cn(
        "gap-4 flex justify-center items-center py-4 shadow-sm rounded-b-xl",
        className
      )}
    >
      <div className="flex gap-6 bg-slate-100 rounded-full py-2 px-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={isActive(item.href) ? "default" : "ghost"}
            className="rounded-full py-2 px-4"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
