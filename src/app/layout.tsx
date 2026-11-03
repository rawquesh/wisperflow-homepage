import type { Metadata } from "next";
import { EB_Garamond, Figtree } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wispr Flow | Voice to Text Dictation & AI Notetaker",
  description:
    "The voice-to-text AI that turns speech into clear, polished writing in every app. Available on Mac, Windows, iPhone, and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFEB] text-[#1A1A1A] selection:bg-[#EBDCFF] selection:text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
