import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rebel Barber Harstad | Premium Barbersalong",
    template: "%s | Rebel Barber Harstad",
  },
  description:
    "Premium barbersalong i Harstad. Tradisjonelt håndverk, moderne presisjon. Book time hos Tommy Meistad og teamet. 5.0 stjerner, 1700+ anmeldelser.",
  keywords: [
    "barber harstad",
    "herreklipp harstad",
    "barbersalong harstad",
    "skjeggtrimming",
    "fade harstad",
    "barberkurs nord-norge",
  ],
  authors: [{ name: "Rebel Barber" }],
  creator: "Rebel Barber",
  metadataBase: new URL("https://rebelbarber.no"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Rebel Barber Harstad",
    title: "Rebel Barber Harstad | Premium Barbersalong",
    description:
      "Premium barbersalong i Harstad. Tradisjonelt håndverk, moderne presisjon.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
