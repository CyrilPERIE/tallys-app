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
          <Header className="mb-4" />
          <div className="lg:px-82 sm:px-4 lg:pt-6 sm:pt-4 mb-4">
            <div className="min-h-full flex flex-col px-4 sm:px-2 lg:px-0">
              {children}
            </div>
          </div>
          <Footer className="mt-auto" />
        </LayoutClient>
      </body>
    </html>
  );
}
