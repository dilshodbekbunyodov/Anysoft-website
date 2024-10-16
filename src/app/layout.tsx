import "./globals.css";
import { Manrope, Unbounded } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

const manrope = Manrope({ subsets: ["latin"] });

export const unBounded = Unbounded({ subsets: ["latin"] });

const metadata: Metadata = {
  title: {
    default: "Anysoft-software and solutions",
    template: "%s | DigitalGov",
  },
  description: "Software and solutions",
  generator: "AnySoft",
  applicationName: "Anysoft",
  referrer: "origin-when-cross-origin",
  keywords: [
    "rraqamli xizmarlar markazi",
    "web dasturlash",
    "dasturiy taʼminot",
    "mobil dasturlash",
    "grafik dizayn",
    "ux/ui dizayn",
    "moushn dizayn",
    "IT - konsalting",
    "IT - audit",
    "biznes jarayonlari reinjineringi",
  ],
  authors: [{ name: "AnySoft", url: "https://anysoft.uz" }],
  colorScheme: "dark",
  creator: "AnySoft LLC",
  publisher: "AnySoft LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
