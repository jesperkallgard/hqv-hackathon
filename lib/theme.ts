/**
 * Each hackathon looks like itself.
 *
 * A result inherits nothing from this repo's own chrome: no palette, no
 * typeface, no spacing. The root layout carries a reset and nothing else, and
 * everything visual comes from the event's own `theme.json` when it has one.
 *
 * Most days have none — nothing writes that file any more — so the default is
 * the common case rather than the exception, and it is a set of choices rather
 * than an absence of them. It stays quiet on purpose: warm paper, near-black
 * ink, one warm accent, a body face that holds at a paragraph. Whatever the
 * room builds sits inside this and must be the loud thing on the page.
 */

export const FONTS = {
  /**
   * The faces a machine already has.
   *
   * Here because a brand's own type is often one of them: an internal tool
   * written in Arial is not a compromise, it is the house style, and a room
   * that hands over "Font: Arial" should get Arial rather than the nearest
   * webfont somebody thought was close.
   */
  system: "Arial, Helvetica",
  grotesk: '"Schibsted Grotesk"',
  sans: '"Inter"',
  humanist: '"Work Sans"',
  serif: '"Source Serif 4"',
  display: '"Bricolage Grotesque"',
  slab: '"Roboto Slab"',
  mono: '"IBM Plex Mono"',
  condensed: '"Archivo Narrow"',
} as const;

export type FontKey = keyof typeof FONTS;

/** Loaded per event, so a result only ever ships the faces it asked for. */
export const FONT_FAMILIES: Partial<Record<FontKey, string>> = {
  grotesk: "Schibsted+Grotesk:wght@400;500;700;900",
  sans: "Inter:wght@400;500;700;900",
  humanist: "Work+Sans:wght@400;500;700;900",
  serif: "Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700",
  display: "Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800",
  slab: "Roboto+Slab:wght@400;500;700;900",
  mono: "IBM+Plex+Mono:wght@400;500;600;700",
  condensed: "Archivo+Narrow:wght@400;500;600;700",
};

export type Theme = {
  /** Body text. */
  font: FontKey;
  /** Headings. Falls back to `font` when unset. */
  headingFont: FontKey | null;
  paper: string;
  ink: string;
  accent: string;
  /**
   * Headings, when a brand says headings are a different colour from its body
   * text. Falls back to `ink`.
   *
   * It is here because "navy headings over near-black text" is one of the most
   * ordinary things a brand says about itself, and with one ink role it was not
   * expressible: a facilitator handed over a navy, and the navy was silently
   * dropped because every other key was already spoken for.
   */
  headingInk: string | null;
  /** Rule and secondary text are derived unless given. */
  muted: string | null;
  rule: string | null;
  /**
   * The two tints of the paper a page sits things on: a panel, a card, an
   * alternate row. Derived from ink over paper unless the brand names them.
   *
   * They are keys rather than only derived values because a brand palette
   * almost always names its own panel grey, and a colour with nowhere to go is
   * a colour a component writes as a hex — which is the same as leaving the
   * system altogether, because it then stops moving when the theme does.
   */
  surface: string | null;
  surfaceAlt: string | null;
  /** Corner radius in px. 0 is a real choice. */
  radius: number;
  /** How hard headings shout, as a multiplier on the base scale. */
  headingScale: number;
  headingWeight: number;
  /** Letter-spacing on headings, in em. Negative tightens. */
  headingTracking: number;
  /** Body measure in characters. */
  measure: number;
  /** Vertical rhythm. */
  density: "tight" | "normal" | "airy";
  /** Headings centred or ranged left. */
  align: "left" | "center";
  uppercaseHeadings: boolean;
};

/**
 * What a hackathon looks like before it has said.
 *
 * Deliberately plain rather than good-looking, and that is the whole point: the
 * look belongs to the room. A default with a warm paper, a chosen typeface and
 * a terracotta accent is somebody's taste imposed on twenty-five people who
 * were never asked — and worse, a day that did choose its colours would be
 * judged against a page that already looked designed before it started.
 *
 * So: white, near-black, no hue the room did not name, and a face every machine
 * already has. The structure around it — the scale, the rhythm, the tables —
 * still applies, because that is craft rather than identity.
 */
export const DEFAULT_THEME: Theme = {
  font: "system",
  headingFont: null,
  paper: "#ffffff",
  ink: "#111111",
  accent: "#111111",
  headingInk: null,
  muted: null,
  rule: null,
  surface: null,
  surfaceAlt: null,
  radius: 0,
  headingScale: 1,
  headingWeight: 700,
  headingTracking: -0.01,
  measure: 66,
  density: "normal",
  align: "left",
  uppercaseHeadings: false,
};

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function colour(value: unknown, fallback: string): string {
  return typeof value === "string" && HEX.test(value.trim()) ? value.trim() : fallback;
}

function number(value: unknown, fallback: number, min: number, max: number): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : fallback;
}

function oneOf<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

/**
 * Anything unrecognised falls back rather than throwing. A theme is written by
 * an agent from a conversation; a typo must not take a hackathon's site down.
 */
export function parseTheme(raw: unknown): Theme {
  if (!raw || typeof raw !== "object") return DEFAULT_THEME;
  const t = raw as Record<string, unknown>;
  const fontKeys = Object.keys(FONTS) as FontKey[];

  return {
    font: oneOf(t.font, fontKeys, DEFAULT_THEME.font),
    headingFont: fontKeys.includes(t.headingFont as FontKey) ? (t.headingFont as FontKey) : null,
    paper: colour(t.paper, DEFAULT_THEME.paper),
    ink: colour(t.ink, DEFAULT_THEME.ink),
    accent: colour(t.accent, DEFAULT_THEME.accent),
    // Optional, and absent from every theme written before it existed, so an
    // unset or unreadable value is headings in the body colour rather than a
    // fallback of its own.
    headingInk: typeof t.headingInk === "string" && HEX.test(t.headingInk.trim())
      ? t.headingInk.trim()
      : null,
    muted: typeof t.muted === "string" && HEX.test(t.muted) ? t.muted : null,
    rule: typeof t.rule === "string" && HEX.test(t.rule) ? t.rule : null,
    surface: typeof t.surface === "string" && HEX.test(t.surface) ? t.surface : null,
    surfaceAlt: typeof t.surfaceAlt === "string" && HEX.test(t.surfaceAlt) ? t.surfaceAlt : null,
    radius: number(t.radius, DEFAULT_THEME.radius, 0, 32),
    headingScale: number(t.headingScale, DEFAULT_THEME.headingScale, 0.7, 1.8),
    headingWeight: number(t.headingWeight, DEFAULT_THEME.headingWeight, 300, 900),
    headingTracking: number(t.headingTracking, DEFAULT_THEME.headingTracking, -0.06, 0.2),
    measure: number(t.measure, DEFAULT_THEME.measure, 45, 95),
    density: oneOf(t.density, ["tight", "normal", "airy"] as const, DEFAULT_THEME.density),
    align: oneOf(t.align, ["left", "center"] as const, DEFAULT_THEME.align),
    uppercaseHeadings: t.uppercaseHeadings === true,
  };
}

const RHYTHM = { tight: 0.8, normal: 1, airy: 1.35 } as const;

/** Serif text wants a little more air between lines than a grotesk does. */
const SERIF_FACES = new Set<FontKey>(["serif", "slab"]);

function channels(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255) as [number, number, number];
}

/** WCAG relative luminance. */
function luminance(hex: string): number {
  const [r, g, b] = channels(hex).map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

/**
 * What text goes on a filled block of `fill`.
 *
 * Computed rather than assumed, because every generated component writes
 * `color: var(--paper)` on an accent button and a room that picks a pale
 * yellow or a mint green then ships a button nobody can read. The page's own
 * two colours are tried first — a result should not introduce a third — and
 * only if neither clears 4.5:1 does it fall back to plain black or white.
 */
function readableOn(fill: string, ink: string, paper: string): string {
  const best = contrast(fill, ink) >= contrast(fill, paper) ? ink : paper;
  if (contrast(fill, best) >= 4.5) return best;
  return luminance(fill) > 0.42 ? "#000000" : "#ffffff";
}

/**
 * The event's entire visual identity, as one scoped stylesheet.
 *
 * Two layers come out of this function. The first is the token set: colour,
 * type, space, radius, every one of them derived from the handful of things
 * the facilitator actually said. The second, in `globals.css`, is what plain
 * markup does with them.
 *
 * The split matters because a component is written by a model in one pass with
 * no chance to look at the result. It cannot be trusted to invent a type scale
 * or a spacing rhythm on the spot — that is the part that has been coming back
 * looking like an unstyled document — but it can be trusted to pick a step off
 * a scale that already exists. So every number a component might otherwise
 * guess is named here.
 */
export function themeCss(theme: Theme): string {
  const body = FONTS[theme.font];
  const heading = theme.headingFont ? FONTS[theme.headingFont] : body;
  const rhythm = RHYTHM[theme.density];
  const serif = SERIF_FACES.has(theme.font);

  // Headings shout by the room's chosen multiplier; body text does not, or a
  // loud theme becomes an unreadable one. Half the multiplier reaches the
  // steps in between.
  const s = theme.headingScale;
  const half = 1 + (s - 1) * 0.5;
  const step = (rem: number) => `${(rem * half).toFixed(4)}rem`;

  const muted = theme.muted ?? `color-mix(in oklab, ${theme.ink} 62%, ${theme.paper})`;
  const rule = theme.rule ?? `color-mix(in oklab, ${theme.ink} 16%, ${theme.paper})`;

  return `
.result {
  /* ---- colour. Three were given; the rest are mixed from them, so a result
     never contains a colour nobody chose. ---- */
  --paper: ${theme.paper};
  --ink: ${theme.ink};
  --accent: ${theme.accent};
  --muted: ${muted};
  --rule: ${rule};
  /* A heavier rule, for the line under a table head or between two halves of
     a page — the places where a hairline reads as an accident. */
  --rule-strong: color-mix(in oklab, ${theme.ink} 34%, ${theme.paper});
  /* Two tints of the paper — a panel, and the row under a row. Depth on these
     pages comes from a shade of the paper and a hairline, never from a drop
     shadow. */
  --surface: ${theme.surface ?? `color-mix(in oklab, ${theme.ink} 4%, ${theme.paper})`};
  --surface-alt: ${theme.surfaceAlt ?? theme.surface ?? `color-mix(in oklab, ${theme.ink} 8%, ${theme.paper})`};
  --accent-soft: color-mix(in oklab, ${theme.accent} 13%, ${theme.paper});
  --accent-strong: color-mix(in oklab, ${theme.accent} 82%, ${theme.ink});
  /* Text on a filled block, worked out rather than guessed. */
  --on-accent: ${readableOn(theme.accent, theme.ink, theme.paper)};
  --on-ink: ${readableOn(theme.ink, theme.ink, theme.paper)};
  --focus: var(--accent);

  /* ---- type ---- */
  --font-body: ${body}, ui-sans-serif, system-ui, sans-serif;
  --font-heading: ${heading}, ui-sans-serif, system-ui, sans-serif;
  /* Exposed because a few headings are not h-anything — the goal on the
     projector is a paragraph, and it still has to be in the heading voice. */
  --heading-weight: ${theme.headingWeight};
  --heading-ink: ${theme.headingInk ?? theme.ink};
  --heading-tracking: ${theme.headingTracking}em;
  --weight-medium: 500;
  --weight-strong: 700;

  --text-xs: ${step(0.75)};
  --text-sm: ${step(0.875)};
  --text-base: 1rem;
  --text-lg: ${step(1.125)};
  --text-xl: ${step(1.375)};
  --text-2xl: calc(clamp(1.55rem, 1.25rem + 1.3vw, 2rem) * ${s});
  --text-3xl: calc(clamp(1.95rem, 1.45rem + 2.4vw, 2.85rem) * ${s});
  --text-display: calc(clamp(2.25rem, 1.4rem + 3.8vw, 3.9rem) * ${s});

  --leading-display: 1.02;
  --leading-tight: 1.12;
  --leading-snug: 1.3;
  --leading-body: ${((serif ? 1.65 : 1.55) + (rhythm - 1) * 0.15).toFixed(3)};

  --measure: ${theme.measure}ch;
  /* Headings hold a shorter line than body text at any measure. */
  --measure-heading: ${Math.round(theme.measure * 0.42)}ch;

  /* ---- space. One unit, scaled by the room's density, so "airy" means
     something everywhere at once rather than in whichever component
     remembered. ---- */
  --rhythm: ${rhythm};
  --space-unit: calc(0.25rem * var(--rhythm));
  --space-1: var(--space-unit);
  --space-2: calc(var(--space-unit) * 2);
  --space-3: calc(var(--space-unit) * 3);
  --space-4: calc(var(--space-unit) * 4);
  --space-6: calc(var(--space-unit) * 6);
  --space-8: calc(var(--space-unit) * 8);
  --space-12: calc(var(--space-unit) * 12);
  --space-16: calc(var(--space-unit) * 16);
  --space-24: calc(var(--space-unit) * 24);
  /* The margin a full-width page keeps from the edge of the screen. */
  --gutter: clamp(1.25rem, 4vw, 2.75rem);

  /* ---- shape. 0 is a real choice and it has to stay 0 all the way down. ---- */
  --radius: ${theme.radius}px;
  --radius-sm: ${Math.round(theme.radius / 2)}px;
  --radius-lg: ${Math.min(theme.radius * 2, 40)}px;
  --radius-pill: ${theme.radius === 0 ? "0" : "999px"};

  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: var(--leading-body);
  min-height: 100dvh;
}
/*
 * Every element rule here is wrapped in :where() and therefore weighs nothing.
 * A component the room built can override any of it with one class of its own,
 * which is what a baseline is for: it is the floor a page stands on, not a
 * ceiling it has to fight.
 */
:where(.result) :where(h1, h2, h3, h4, h5, h6) {
  color: var(--heading-ink);
  font-family: var(--font-heading);
  font-weight: var(--heading-weight);
  letter-spacing: var(--heading-tracking);
  text-transform: ${theme.uppercaseHeadings ? "uppercase" : "none"};
  text-align: ${theme.align};
  line-height: var(--leading-tight);
  text-wrap: balance;
  margin: 0 0 var(--space-3);
}
/* One scale, whether the heading is the page's or the prototype's. An h1 in a
   product page header is a wordmark, not a billboard — a page that wants a
   billboard asks for one with the .display class. */
:where(.result) :where(h1) { font-size: var(--text-3xl); line-height: var(--leading-display); }
:where(.result) :where(h2) { font-size: var(--text-2xl); }
:where(.result) :where(h3) { font-size: var(--text-xl); }
:where(.result) :where(h4) { font-size: var(--text-lg); }
:where(.result) :where(h5, h6) {
  font-size: var(--text-sm);
  font-weight: var(--weight-strong);
  letter-spacing: 0;
}
/* The room's alignment governs the page it is shown on. Inside the prototype it
   is only the starting point: a product page whose every heading is centred
   because a theme said so is not what the theme meant. */
:where(.result .canvas) :where(h1, h2, h3, h4, h5, h6) { text-align: inherit; }
:where(.result) :where(a) { color: var(--accent); }
`.trim();
}

/** Only the faces this event actually uses. */
export function fontHref(theme: Theme): string | null {
  const keys = new Set<FontKey>([theme.font]);
  if (theme.headingFont) keys.add(theme.headingFont);
  // A face the machine already has needs no request, and an event using only
  // those should not be made to wait on fonts.googleapis.com at all.
  const families = [...keys]
    .map((key) => FONT_FAMILIES[key])
    .filter(Boolean)
    .map((family) => `family=${family}`);
  if (!families.length) return null;
  return `https://fonts.googleapis.com/css2?${families.join("&")}&display=swap`;
}
