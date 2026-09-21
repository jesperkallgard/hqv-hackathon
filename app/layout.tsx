import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import { PROJECT_NAME } from "@/config/day";
import { isProduction } from "@/lib/blocks";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: "Built by everyone in the room, in a day.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body className="min-h-dvh">
        <header className="border-b border-rule">
          <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-5">
            <Link href="/" className="text-[15px] font-bold tracking-tight">
              {PROJECT_NAME}
            </Link>
            {!isProduction() && (
              <span className="ml-auto rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                Preview
              </span>
            )}
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-14">{children}</main>
        <footer className="mx-auto max-w-5xl border-t border-rule px-6 py-8 text-sm text-ink-soft">
          Written during the day by everyone in the room, merged by the curator and
          approved by the facilitator.
        </footer>
      </body>
    </html>
  );
}
