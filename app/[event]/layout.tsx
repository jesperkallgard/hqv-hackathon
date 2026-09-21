import { notFound } from "next/navigation";
import { readEvent } from "@/lib/events";
import { readTheme } from "@/lib/read-theme";
import { fontHref, themeCss } from "@/lib/theme";
import { isProduction } from "@/lib/blocks";

/**
 * One hackathon's entire visual identity, and only this hackathon's.
 *
 * The stylesheet and the typefaces are loaded here, scoped to `.result`, so
 * nothing leaks between events and nothing is inherited from the repo.
 */
export default async function EventLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ event: string }>;
}) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const theme = await readTheme(slug);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={fontHref(theme)} />
      <style
        // The event's own tokens. Scoped, so two hackathons never collide.
        dangerouslySetInnerHTML={{ __html: themeCss(theme) }}
      />
      <div className="result">
        {!isProduction() && (
          <p
            className="px-6 py-1.5 text-center text-xs font-bold"
            style={{ background: "var(--accent)", color: "var(--paper)" }}
          >
            Preview — not merged yet
          </p>
        )}
        <main className="mx-auto max-w-5xl px-6 py-14">{children}</main>
        <footer className="muted rule mx-auto max-w-5xl border-t px-6 py-8 text-sm">
          Written in a day by everyone in the room.
        </footer>
      </div>
    </>
  );
}
