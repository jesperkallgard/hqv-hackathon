/**
 * Each hackathon looks like itself.
 *
 * A result inherits nothing from this repo's own chrome: no palette, no
 * typeface, no spacing. The root layout carries a reset and nothing else, and
 * everything visual comes from the event's own `theme.json`, written by its UX
 * Lead through the agent.
 *
 * The default below is deliberately plain rather than good-looking. An event
 * that has set no direction should look unstyled, not borrowed from whoever
 * styled it last.
 */

export const FONTS = {
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
export const FONT_FAMILIES: Record<FontKey, string> = {
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
  /** Rule and secondary text are derived unless given. */
  muted: string | null;
  rule: string | null;
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

export const DEFAULT_THEME: Theme = {
  font: "sans",
  headingFont: null,
  paper: "#ffffff",
  ink: "#111111",
  accent: "#111111",
  muted: null,
  rule: null,
  radius: 0,
  headingScale: 1,
  headingWeight: 700,
  headingTracking: -0.01,
  measure: 68,
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
    muted: typeof t.muted === "string" && HEX.test(t.muted) ? t.muted : null,
    rule: typeof t.rule === "string" && HEX.test(t.rule) ? t.rule : null,
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

/** The event's entire visual identity, as one scoped stylesheet. */
export function themeCss(theme: Theme): string {
  const body = FONTS[theme.font];
  const heading = theme.headingFont ? FONTS[theme.headingFont] : body;
  const rhythm = RHYTHM[theme.density];

  return `
.result {
  --paper: ${theme.paper};
  --ink: ${theme.ink};
  --accent: ${theme.accent};
  --muted: ${theme.muted ?? `color-mix(in oklab, ${theme.ink} 62%, ${theme.paper})`};
  --rule: ${theme.rule ?? `color-mix(in oklab, ${theme.ink} 16%, ${theme.paper})`};
  --radius: ${theme.radius}px;
  --measure: ${theme.measure}ch;
  --rhythm: ${rhythm};
  --font-body: ${body}, ui-sans-serif, system-ui, sans-serif;
  --font-heading: ${heading}, ui-sans-serif, system-ui, sans-serif;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  min-height: 100dvh;
}
.result h1, .result h2, .result h3, .result h4 {
  font-family: var(--font-heading);
  font-weight: ${theme.headingWeight};
  letter-spacing: ${theme.headingTracking}em;
  text-transform: ${theme.uppercaseHeadings ? "uppercase" : "none"};
  text-align: ${theme.align};
  line-height: 1.08;
}
.result h1 { font-size: calc(clamp(2rem, 6vw, 3.75rem) * ${theme.headingScale}); }
.result h2 { font-size: calc(clamp(1.4rem, 3vw, 2.1rem) * ${theme.headingScale}); }
.result h3 { font-size: calc(1.2rem * ${theme.headingScale}); }
.result a { color: var(--accent); }
.result .rule { border-color: var(--rule); }
.result .muted { color: var(--muted); }
.result .measure { max-width: var(--measure); }
.result .stack > * + * { margin-top: calc(1em * var(--rhythm)); }
.result .card { border: 1px solid var(--rule); border-radius: var(--radius); }
`.trim();
}

/** Only the faces this event actually uses. */
export function fontHref(theme: Theme): string {
  const keys = new Set<FontKey>([theme.font]);
  if (theme.headingFont) keys.add(theme.headingFont);
  const families = [...keys].map((key) => `family=${FONT_FAMILIES[key]}`).join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
