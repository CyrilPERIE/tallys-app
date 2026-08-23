"use client";

import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        "bg-muted/25 text-foreground flex items-center py-6 gap-4 z-50 px-6 border border-muted-foreground/25",
        className,
      )}
    >
        <Link
          href="https://www.cypit.dev"
          target="_blank"
          className="flex items-center gap-1 ml-auto"
        >
          <Image
            src={"/images/avatar.jpeg"}
            width={32}
            height={32}
            alt="avatar"
            className="rounded-full"
          />
          <p className="text-sm font-semibold">Cyril PERIE</p>
        </Link>
    </footer>
  );
};
