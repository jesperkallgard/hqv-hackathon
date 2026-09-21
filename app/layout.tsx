import type { Metadata } from "next";
import Link from "next/link";
import { PROJECT_NAME } from "@/config/day";
import { isProduction } from "@/lib/blocks";
import "./globals.css";

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: "A site built by 25 people in six sprints, in one day.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const production = isProduction();
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <header className="border-b border-[var(--rule)]">
          <div className="mx-auto flex max-w-5xl flex-wrap items-baseline gap-x-6 gap-y-2 px-6 py-5">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {PROJECT_NAME}
            </Link>
            {!production && (
              <span className="ml-auto rounded-full border border-[var(--brand)] px-3 py-0.5 text-xs font-medium tracking-wide text-[var(--brand)] uppercase">
                Preview
              </span>
            )}
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-5xl px-6 pt-8 pb-16 text-xs text-[var(--ink-soft)]">
          Written during the day by everyone in the room. Merged by the curator,
          approved by the facilitator.
        </footer>
      </body>
    </html>
  );
}
