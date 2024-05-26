import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./reset.css";
import "./globals.css";
import "flowbite/dist/flowbite.css";
import FooterComponent from "../components/footer";
import HeaderComponent from "@/components/header";

const kanit = Kanit({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Rick&Mortydle",
  description: "This is a Rick and Morty fan site.",
  authors: {
    name: "Furkan Ergüldürenler",
    url: "https://github.com/Furkan-Erg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-400  flex  flex-col justify-center ${kanit.className}`}
      >
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
