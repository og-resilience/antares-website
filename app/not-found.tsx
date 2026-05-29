import Link from "next/link";
import { Container, Eyebrow } from "@/components/primitives";

export default function NotFound() {
  return (
    <section>
      <Container className="py-32 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-fg)]">
          That route does not exist.
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)] max-w-md mx-auto">
          The page you were looking for could not be found. Return to the homepage or review the public pages.
        </p>
        <div className="mt-8 inline-flex">
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
