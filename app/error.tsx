"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/primitives";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface server errors in client console for local debugging only.
    if (process.env.NODE_ENV !== "production") {
      console.error("[app/error]", error);
    }
  }, [error]);

  return (
    <section>
      <Container className="py-32 text-center">
        <Eyebrow>Error</Eyebrow>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-fg)]">
          Something went wrong.
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)] max-w-md mx-auto">
          The page could not be rendered. Try again, or return to the homepage.
        </p>
        <div className="mt-8 inline-flex gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-fg)] px-5 py-3 text-sm font-medium hover:border-[var(--color-fg)] transition-colors"
          >
            Return to homepage
          </Link>
        </div>
      </Container>
    </section>
  );
}
