"use client";

import Image from "next/image";
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
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label={`${SITE.name} — Home`}
        >
          <Image
            src="/images/brand/antares-resilience-mark-header.png"
            alt=""
            width={512}
            height={512}
            className="h-9 w-9 sm:h-10 sm:w-10"
            priority
          />
          <span className="hidden whitespace-nowrap text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-[var(--color-fg)] transition-colors group-hover:text-white sm:inline-flex">
            ANTARES RESILIENCE
          </span>
          <span className="sr-only">{SITE.name}</span>
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
