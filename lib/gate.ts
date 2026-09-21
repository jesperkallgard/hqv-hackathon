/**
 * Password protection for the deployment.
 *
 * The whole site is behind one shared password: previews are handed out in the
 * chat all day, and the projector page runs unattended in a room. This is a
 * lock on the door, not an identity system.
 *
 * If `SITE_PASSWORD` is unset the gate is off, so local development needs no
 * setup.
 */

export const GATE_COOKIE = "cohack_gate";

export function gatePassword(): string | null {
  const value = process.env.SITE_PASSWORD?.trim();
  return value ? value : null;
}

/** The cookie holds a digest, so a leaked cookie does not leak the password. */
export async function gateToken(password: string): Promise<string> {
  const salt = process.env.SITE_PASSWORD_SALT ?? "cohack-engine";
  const bytes = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Constant-time-ish comparison; both sides are fixed-length hex digests. */
export function sameToken(a: string | undefined, b: string): boolean {
  if (!a || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
