"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/60 sticky top-0 z-40">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={`${SITE.name} — Home`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 bg-[var(--color-accent)]"
          />
          <span className="text-[15px] font-medium tracking-tight text-[var(--color-fg)]">
            {SITE.name}
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2 text-sm">
            {NAV.filter((item) => item.href !== "/").map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "inline-flex items-center px-3 py-2 text-[13px] transition-colors",
                      active
                        ? "text-[var(--color-fg)]"
                        : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
