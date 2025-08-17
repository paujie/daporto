import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Jam from "@/components/ui/jam";
import Credit from "@/components/ui/credit";
import FinalProject from "@/components/ui/finalproject";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fauzi Ramadhani",
  description: "Portfolio of Fauzi Ramadhani, Designer x Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Jam />
        {children}
        <Credit />
        <FinalProject />
      </body>
    </html>
  );
}
