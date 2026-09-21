import type { ReactNode } from "react";

/** Preview-only notice. Never rendered in production. */
export function BlockWarning({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-amber-400/60 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-400/30 dark:bg-amber-950/30 dark:text-amber-100">
      <p className="font-semibold">⚠ {title}</p>
      <p className="mt-1 leading-relaxed [&_code]:rounded [&_code]:bg-amber-900/10 [&_code]:px-1 [&_code]:py-0.5 dark:[&_code]:bg-amber-100/10">
        {children}
      </p>
    </div>
  );
}
