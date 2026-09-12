import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/header";
import { cn } from "@/src/lib/utils";
import { Footer } from "@/src/components/footer";
import { LayoutClient } from "./layout-client";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tallys",
  description: "Horse racing advisor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "flex min-h-dvh flex-col overflow-x-clip antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <LayoutClient>
          <Header className="mb-4" />
          <div className="mx-auto mb-4 flex w-full min-w-0 max-w-7xl flex-1 flex-col px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
            {children}
          </div>
          <Footer className="mt-auto" />
        </LayoutClient>
      </body>
    </html>
  );
}
