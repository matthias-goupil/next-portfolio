import type { Metadata } from "next";
import "../globals.css";
import poppinsFont from "../fonts/Poppins";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body className={`${poppinsFont.variable} antialiased`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}