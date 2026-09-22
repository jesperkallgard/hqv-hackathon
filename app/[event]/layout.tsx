import { notFound } from "next/navigation";
import { readEvent } from "@/lib/events";
import { readStyles, readTheme } from "@/lib/read-theme";
import { fontHref, themeCss } from "@/lib/theme";

/**
 * One hackathon's entire visual identity, and only this hackathon's.
 *
 * The tokens, the typefaces and the curator's own stylesheet are loaded here,
 * scoped to `.result`, so nothing leaks between events and nothing is
 * inherited from the repo. The site draws the reading pages around the
 * prototype; it never draws the prototype.
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

  const [theme, styles] = await Promise.all([readTheme(slug), readStyles(slug)]);

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
      {styles && (
        <style
          // The look the curator wrote for this hackathon, from the tokens the
          // facilitator set. The site designs nothing; this does.
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      )}
      <div className="result">{children}</div>
    </>
  );
}
