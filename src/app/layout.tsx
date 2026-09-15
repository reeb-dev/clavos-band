import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clavos Band · Clavito Actis",
  description:
    "Blues-rock argentino desde 1992. Escuchá a Clavos Band / Clavito Actis en Spotify, Instagram y más.",
  openGraph: {
    title: "Clavos Band · Clavito Actis",
    description:
      "Blues-rock argentino desde 1992. Hub oficial de redes y música.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
