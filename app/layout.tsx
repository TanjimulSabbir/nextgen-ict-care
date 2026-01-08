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
  title: "NextGen ICT Care | HSC ICT-তে A+ নিশ্চিত করার সেরা প্ল্যাটফর্ম",
  description: "কেবল একটি কোচিং নয়, কেবল একটি কোচিং নয়; এটি আইসিটি শেখার এক নতুন যাত্রা। আমরা মুখস্থ বিদ্যায় বিশ্বাসী নই, বরং প্রতিটি লজিককে বাস্তব জীবনের সাথে মিলিয়ে শিক্ষার্থীদের ব্রেইনে গেঁথে দেয়াই আমাদের সার্থকতা। অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে HSC ICT-এর জটিল বিষয়গুলো শিখুন একদম পানির মতো সহজ পদ্ধতিতে।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body
        className={`${hindSiliguri.variable} antialiased min-h-screen text-white bg-[#020617]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
