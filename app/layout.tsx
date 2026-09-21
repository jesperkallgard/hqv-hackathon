import type { Metadata } from "next";
import "./globals.css";

/**
 * Carries a reset and nothing else.
 *
 * No typeface, no palette, no chrome, no wordmark. A result is whatever the
 * room made and is named and styled by the hackathon that made it — everything
 * visual arrives from that event's own theme, one level down.
 */
export const metadata: Metadata = {
  title: "Made in a day",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
