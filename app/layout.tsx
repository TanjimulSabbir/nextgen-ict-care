import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NextGen ICT Care",
  description: "Building Strong ICT Foundations for HSC Students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body
        className={`${hindSiliguri.variable} antialiased min-h-screen text-white bg-hero`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
