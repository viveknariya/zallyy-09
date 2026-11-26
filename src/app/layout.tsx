import type { Metadata } from "next";
import { JetBrains_Mono, Jost, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
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

const brilliantSerif = Newsreader({
  variable: "--font-brilliant-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Design Systems — Curated UI Kits & Next.js Starter Templates",
    template: "%s | Design Systems",
  },
  description:
    "Explore curated website design systems, tokens, components, and Next.js App Router starter templates.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tildaDisplay.variable} ${tildaSans.variable} ${tildaMono.variable} ${brilliantSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
