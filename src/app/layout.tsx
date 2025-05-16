import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/nav";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-PMU",
  description: "E-PMU is a platform that helps you manage your bets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(inter.className, "min-h-full flex flex-col bg-slate-100")}
      >
        <Header className="mb-4 bg-white" />
        <main className="flex-1">{children}</main>
        <Footer className="bg-white" />
      </body>
    </html>
  );
}
