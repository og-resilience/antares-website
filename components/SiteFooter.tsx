import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-[13px] text-[var(--color-fg-muted)]">
        <div className="flex flex-col gap-3">
          <Link href="/" className="inline-flex w-fit" aria-label={`${SITE.name} — Home`}>
            <Image
              src="/images/brand/antares-resilience-logo-v01.png"
              alt=""
              width={147}
              height={80}
              className="h-8 w-auto"
            />
            <span className="sr-only">{SITE.name}</span>
          </Link>
          <div className="flex flex-col gap-1">
            <p className="text-[var(--color-fg)] font-medium">
              {SITE.name} LLC
            </p>
            <p>
              {SITE.location} · {SITE.region} and beyond
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors"
          >
            {SITE.contactEmail}
          </a>
          <p>
            <span aria-hidden="true">© </span>
            {year} {SITE.name} LLC. All rights reserved.
          </p>
          <p>
            <Link href="/" className="hover:text-[var(--color-fg)] transition-colors">
              Home
            </Link>
            <span aria-hidden="true"> · </span>
            <Link href="/services" className="hover:text-[var(--color-fg)] transition-colors">
              Services
            </Link>
            <span aria-hidden="true"> · </span>
            <Link href="/about" className="hover:text-[var(--color-fg)] transition-colors">
              About
            </Link>
            <span aria-hidden="true"> · </span>
            <Link href="/contact" className="hover:text-[var(--color-fg)] transition-colors">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
