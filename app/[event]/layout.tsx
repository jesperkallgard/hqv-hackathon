import { notFound } from "next/navigation";
import { readEvent } from "@/lib/events";
import { readTheme } from "@/lib/read-theme";
import { fontHref, themeCss } from "@/lib/theme";

/**
 * One hackathon's entire visual identity, and only this hackathon's.
 *
 * The stylesheet and the typefaces are loaded here, scoped to `.result`, so
 * nothing leaks between events and nothing is inherited from the repo.
 *
 * Nothing else is here. The masthead and the footer are a component the reading
 * pages ask for, because `/<event>/live` must have neither and a layout cannot
 * be opted out of. See [EventShell](../../components/EventShell.tsx).
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

  // Null when the event asked only for faces the machine already has, and then
  // the page should not be reaching out to a font host at all.
  const fonts = fontHref(theme);

  return (
    <>
      {fonts && (
        <>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="stylesheet" href={fonts} />
        </>
      )}
      <style
        // The event's own tokens. Scoped, so two hackathons never collide.
        dangerouslySetInnerHTML={{ __html: themeCss(theme) }}
      />
      <div className="result">{children}</div>
    </>
  );
}
