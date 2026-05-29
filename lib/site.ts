/**
 * Single source of truth for site-wide metadata and configuration.
 * Edit these values rather than chasing strings across the codebase.
 */

export const SITE = {
  name: "Antares Resilience",
  shortName: "Antares",
  tagline: "Electrical-First Infrastructure Intelligence",
  description:
    "Antares Resilience helps owners, developers, contractors, and project teams validate estimates, reconcile scope, and identify electrical infrastructure risk before cost, schedule, procurement, and responsibility are locked in.",
  contactEmail: "signal@antaresresilience.com",
  location: "Snohomish, Washington",
  region: "Pacific Northwest",
  // Canonical origin used for SEO, sitemap, OG URLs. Falls back to a sane
  // default if NEXT_PUBLIC_SITE_URL is unset (e.g. during local dev).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://antaresresilience.com").replace(/\/$/, ""),
} as const;

export const NAV: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Project types offered in the contact form. Keep in sync between
 * the form UI and the server-side validation in /api/contact.
 */
export const PROJECT_TYPES = [
  "Estimate review",
  "Preconstruction advisory",
  "Critical power feasibility",
  "Scope reconciliation",
  "Owner / developer decision support",
  "Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
