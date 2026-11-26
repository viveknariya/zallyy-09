import type { Metadata } from "next";
import { JetBrains_Mono, Jost, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "zallyy is a software development agency building production web applications, design systems, and Next.js engineering tooling.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: { type: "website", siteName: SITE_NAME },
  twitter: { card: "summary" },
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
