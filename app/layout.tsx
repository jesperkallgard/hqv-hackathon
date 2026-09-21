import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { isProduction } from "@/lib/blocks";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "700", "900"],
});

/**
 * Deliberately has no wordmark and no product name.
 *
 * This is whatever the room made — a site, a manifesto, a pitch, a set of
 * principles. It is named by the hackathon that made it, not by the thing that
 * ran the day, so each page owns its own heading and nothing here brands it.
 */
export const metadata: Metadata = {
  title: "Made in a day",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body className="min-h-dvh">
        {!isProduction() && (
          <div className="border-b border-rule bg-lime px-6 py-1.5 text-center text-xs font-bold text-ink">
            Preview — not merged yet
          </div>
        )}
        <main className="mx-auto max-w-5xl px-6 py-14">{children}</main>
        <footer className="mx-auto max-w-5xl border-t border-rule px-6 py-8 text-sm text-ink-soft">
          Written in a day by everyone in the room.
        </footer>
      </body>
    </html>
  );
}
