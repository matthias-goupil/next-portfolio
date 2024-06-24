import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./components/ThemeToggle";
// import { appWithTranslation, useTranslation } from 'next-i18next';
// import '../i18n';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthias Goupil Portfolio",
  description: "Site personnel Matthias Goupil",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { t } = useTranslation('common');
  
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <header className="w-full flex flex-row justify-between items-center py-7 px-14">
          <div className="flex flex-row gap-x-10 items-center">
            <p className="text-2xl font-semibold">Matthias Goupil</p>
            <nav>
              <ul className="flex flex-row gap-x-12 font-light text-1xl">
                <li>
                  <Link href="/">A propos</Link>
                </li>
                <li>
                  <Link href="/">Projets</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-row gap-x-6">
            <ThemeToggle />
            <Button variant="outline">Recrutez-moi</Button>
          </div>
        </header>
        {children}
        <footer>
          {/* <p>{t("Welcome")}</p> */}
        </footer>
      </body>
    </html>
  );
}

export default RootLayout