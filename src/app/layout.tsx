import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "خلاقیت و تولید محتوا",
  description: "تدوین، موشن گرافیک و مدل‌سازی سه‌بعدی با کیفیت عالی",
  keywords: "تدوین, موشن گرافیک, سه بعدی, مستر شایان",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231a1a2e' rx='20'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' font-weight='bold' fill='%23d4af37'>MS</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231a1a2e' rx='20'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' font-weight='bold' fill='%23d4af37'>MS</text></svg>"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
