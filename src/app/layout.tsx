import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/header/nav";
import { LogoName } from "@/components/identity/logo-name";
import { texts } from "@/lib/constants/texts";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: texts.app.name,
  description: texts.app.description,
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
        <Header className="mb-4 bg-white">
          <LogoName className="absolute left-4" />
          <Nav />
        </Header>
        <main className="flex-1">{children}</main>
        <Footer className="bg-white" />
      </body>
    </html>
  );
}
