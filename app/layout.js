import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { pageDescription, pageTitle } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montSerrat = Montserrat({
  variable: "--font-geist-montserrat",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["900", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: { pageTitle },
  description: { pageDescription },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montSerrat.variable} ${poppins.variable} antialiased`}
      >
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
