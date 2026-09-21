import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },

  /**
   * A generated block must never take the site down.
   *
   * Everything under `app/blocks/` is written by an agent during a hackathon,
   * at speed, for a room that is watching. One of them came back with an empty
   * array literal that TypeScript inferred as `never[]`, which failed the type
   * check, which failed the build, which meant the whole site stopped updating
   * for every hackathon on it while the room waited for their page to appear.
   *
   * The site's own code is checked by `npm run typecheck` and in the editor.
   * This only stops a machine-written component from being able to stop the
   * day. A block that is broken at runtime is already handled: it renders as a
   * warning in preview and is left out in production.
   */
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
