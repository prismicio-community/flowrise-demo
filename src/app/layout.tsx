import clsx from "clsx";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Nunito_Sans, Nunito } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nunitoSans.variable, nunito.variable)}>
        <Header />
        <main className="grid gap-12 mx-auto max-w-6xl">{children}</main>
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
