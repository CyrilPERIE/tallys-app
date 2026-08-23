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
          "flex flex-col min-h-screen antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <LayoutClient>
          <div className="px-12 pt-6 mb-4">
            <Header className="mb-4" />
            <div className="min-h-full flex flex-col">{children}</div>
          </div>
          <Footer className="mt-auto" />
        </LayoutClient>
      </body>
    </html>
  );
}
