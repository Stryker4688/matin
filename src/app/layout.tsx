import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "شرکت مستر شایان - خلاقیت در اوج کیفیت",
  description:
    "شرکت مستر شایان | ارائه خدمات حرفه‌ای تدوین، موشن گرافیک و مدل‌سازی سه‌بعدی",
  keywords: "تدوین, موشن گرافیک, سه بعدی, مستر شایان, ویرایش ویدیو",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
