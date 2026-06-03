/**
 * Single source of truth for site-wide metadata and configuration.
 * Edit these values rather than chasing strings across the codebase.
 */

export const SITE = {
  name: "Antares Resilience",
  shortName: "Antares",
  tagline: "Electrical Estimating and Preconstruction Clarity",
  description:
    "Antares Resilience is a Pacific Northwest based electrical estimating, preconstruction, and infrastructure advisory practice serving electrical contractors, general contractors, owners, and developers where early cost clarity and technical judgment matter.",
  publicPositioning:
    "Antares Resilience is Pacific Northwest based and supports electrical estimating, preconstruction, and infrastructure advisory work for clients beyond the region where early cost clarity and technical judgment matter.",
  contactEmail: "signal@antaresresilience.com",
  location: "Snohomish, Washington",
  locality: "Snohomish",
  region: "Pacific Northwest",
  state: "Washington",
  country: "US",
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

export const SERVICE_LINES = [
  "Pre-design electrical estimating and ROM support",
  "Independent estimate and peer review",
  "Electrical preconstruction advisory",
  "Scope reconciliation and risk review",
  "Critical power and infrastructure feasibility",
] as const;

/**
 * Project types offered in the contact form. Keep in sync between
 * the form UI and the server-side validation in /api/contact.
 */
export const PROJECT_TYPES = [
  "Pre-design electrical estimating / ROM",
  "Independent estimate / peer review",
  "Electrical preconstruction advisory",
  "Scope reconciliation and risk review",
  "Critical power / infrastructure feasibility",
  "Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
