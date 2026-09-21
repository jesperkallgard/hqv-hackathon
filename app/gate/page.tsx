import { PROJECT_NAME } from "@/config/day";

export const dynamic = "force-dynamic";

export default async function GatePage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next = "/", error } = await searchParams;

  return (
    <div className="mx-auto max-w-sm py-16">
      <h1 className="text-2xl font-semibold tracking-tight">{PROJECT_NAME}</h1>
      <p className="mt-2 text-sm text-ink-soft">
        This site is not public yet. Enter the password from the channel.
      </p>
      <form action="/api/gate" method="post" className="mt-6 space-y-3">
        <input type="hidden" name="next" value={next} />
        <input
          type="password"
          name="password"
          autoFocus
          autoComplete="current-password"
          placeholder="Password"
          className="w-full rounded-lg border border-rule bg-transparent px-3 py-2 outline-none focus:border-[var(--ink)]"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--ink)] px-3 py-2 font-medium text-white"
        >
          Enter
        </button>
        {error && <p className="text-sm text-lime">Wrong password.</p>}
      </form>
    </div>
  );
}
