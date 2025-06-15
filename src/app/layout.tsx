import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
// import { Nav } from "@/components/header/nav";
import { LogoName } from "@/components/identity/logo-name";
import { texts } from "@/lib/constants/texts";
import { FiltersStoreProvider } from "@/stores/filters/provider";
import ReactQueryProvider from "@/components/react-query-provider";
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
    <html lang="fr" className="h-screen">
      <body className={cn(inter.className, "flex flex-col bg-[#f8f5f1]")}>
        <Header className="bg-white sm:h-20 h-12">
          <LogoName className="absolute left-4" />
          {/* <Nav /> */}
        </Header>
        <main className="flex-1 min-h-0 sm:px-24 sm:py-4 pb-4 pt-2 overflow-auto">
          <ReactQueryProvider>
            <FiltersStoreProvider>{children}</FiltersStoreProvider>
          </ReactQueryProvider>
        </main>
        <Footer className="bg-white sm:h-14 h-10" />
      </body>
    </html>
  );
}
