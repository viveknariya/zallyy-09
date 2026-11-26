import type { Metadata } from "next";
import { JetBrains_Mono, Jost, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const tildaDisplay = Jost({
  variable: "--font-tilda-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tildaSans = Plus_Jakarta_Sans({
  variable: "--font-tilda-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tildaMono = JetBrains_Mono({
  variable: "--font-tilda-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tilda Starter — Editorial Website & App Template",
  description:
    "Next.js App Router starter template inspired by Tilda.cc design references from Refero.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tildaDisplay.variable} ${tildaSans.variable} ${tildaMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
