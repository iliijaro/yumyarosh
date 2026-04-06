import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YumYarosh — кейтэрынг і гастрабоксы | Мінск",

  description:
  "Кейтэрынг у Мінску. Фуршэты, гастрабоксы і выязное абслугоўванне. Прафесійны кулінарны дуэт YumYarosh.",

  keywords: [
    // HIGH INTENT (most important)
    "кейтеринг Минск",
    "заказать кейтеринг Минск",
    "кейтеринг на мероприятие Минск",
    "выездной кейтеринг Минск",

    // FOOD FORMAT
    "гастробоксы Минск",
    "заказать гастробокс Минск",
    "фуршет Минск",
    "фуршет на заказ Минск",

    // EVENTS
    "кейтеринг на свадьбу Минск",
    "кейтеринг на корпоратив Минск",
    "кейтеринг на день рождения Минск",

    // SERVICE STYLE
    "выездное обслуживание Минск",
    "еда на мероприятие Минск",

    // BRAND
    "yumyarosh",
    "ямярош кейтеринг",
    "юмярош кейтеринг",


    // EXTRA (less critical but useful)
    "catering Minsk",
    "кейтеринг Беларусь",
    "Усяж",
    "кейтеринг Смолевичи",
    "Смолевичи"
  ],

  openGraph: {
    title: "YumYarosh — кейтеринг в Минске",
    description:
      "Фуршеты, гастробоксы и кейтеринг для мероприятий",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="be"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
