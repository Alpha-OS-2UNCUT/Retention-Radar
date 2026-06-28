import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Retention Radar — Know who needs your attention before clients slip away",
  description:
    "Retention Radar is an AI relationship intelligence workspace that helps service businesses organise client relationships, prioritise follow-ups, and take the right action before retention problems become expensive.",
  openGraph: {
    title: "Retention Radar",
    description: "AI-powered client retention for service businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100">{children}</body>
    </html>
  );
}
