"use client";
import localFont from "next/font/local";
import "./globals.css";
import HeaderApp from "@/components/HeaderApp";
import { usePathname } from 'next/navigation';
import FooterApp from "@/components/FooterApp";
import Example from "@/components/Navigation";
const geistSans = localFont({
  src: "./fonts/Proxima-Nova-Thin.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Proxima-Nova-Thin.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>KOA Studio</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!isHomePage && <Example />}

        {children}
        <FooterApp/>
      </body>
    </html>
  );
}
