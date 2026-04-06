import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yumyarosh.by"),
  title: "YumYarosh — кейтэрынг і гастрабоксы | Мінск",
  description:
    "Кейтэрынг у Мінску. Фуршэты, гастрабоксы і выязное абслугоўванне. Прафесійны кулінарны дуэт YumYarosh.",
  keywords: [
    "кейтеринг Минск",
    "заказать кейтеринг Минск",
    "кейтеринг на мероприятие Минск",
    "выездной кейтеринг Минск",
    "гастробоксы Минск",
    "заказать гастробокс Минск",
    "фуршет Минск",
    "фуршет на заказ Минск",
    "кейтеринг на свадьбу Минск",
    "кейтеринг на корпоратив Минск",
    "кейтеринг на день рождения Минск",
    "выездное обслуживание Минск",
    "еда на мероприятие Минск",
    "yumyarosh",
    "ямярош кейтеринг",
    "юмярош кейтеринг",
    "catering Minsk",
    "кейтеринг Беларусь",
    "Усяж",
    "кейтеринг Смолевичи",
    "Смолевичи",
  ],
  verification: {
    yandex: "7c1687aa61eaefcf",
  },
  openGraph: {
    title: "YumYarosh — кейтеринг в Минске",
    description: "Фуршеты, гастробоксы и кейтеринг для мероприятий",
    url: "https://yumyarosh.by",
    siteName: "YumYarosh",
    type: "website",
    locale: "be_BY",
  },
  alternates: {
    canonical: "https://yumyarosh.by",
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
    <html
      lang="be"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}