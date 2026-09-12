"use client";

import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        "border-t border-muted-foreground/25 bg-muted/25 text-foreground",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <Link
          href="https://www.cypit.dev"
          target="_blank"
          className="flex items-center gap-2"
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
      </div>
    </footer>
  );
};
