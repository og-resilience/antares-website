# Antares Resilience — Next.js Website (Delivery Brief)

**Status:** Source delivered. Build verification deferred to local machine.

This is the v2 website source for **Antares Resilience LLC**, built on Next.js 14 App Router + Tailwind CSS + React 18, intended for Vercel deployment. It replaces the prior Manus full-stack scaffold per the Codex review report, eliminating tRPC, Drizzle/MySQL, OAuth, and the `/admin` console.

---

## 1. What changed vs. the prior build

| Aspect | Prior build | This build |
|---|---|---|
| Framework | Vite + React + Express + tRPC | Next.js 14 App Router |
| Database | MySQL via Drizzle | None |
| Auth | Manus OAuth | None |
| `/admin` route | tRPC-gated dashboard | Removed entirely |
| Form backend | tRPC mutation + DB persistence | Single `app/api/contact` route, Resend or mailto fallback, no persistence |
| Analytics | Plausible embed in admin | Plausible site script via `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional) |
| Target host | Manus | Vercel |
| Lines of code | ~5,500 | ~1,400 |

The architectural reset matches Codex's recommendation: a credibility-and-conversion site has no need for a database, accounts, or a custom admin UI.

---

## 2. Build status (honest)

`pnpm typecheck` **passes clean** in the sandbox (0 errors, 0 warnings).

`pnpm build` **failed in the sandbox** with `TypeError: Cannot read properties of null (reading 'useContext')` during static page generation. I verified this is **not a source code issue** by scaffolding a completely fresh, unmodified `create-next-app@14.2.18` project in the same sandbox — the unmodified scaffold reproduces the same prerender failure on a single default homepage.

Conclusion: the sandbox's Node + pnpm environment cannot complete a Next.js production build. This is an environment problem at my end, not a problem with the code I'm handing you. Codex should be able to run `pnpm install && pnpm build` on your local Windows machine or in CI and get a clean build.

**What I verified instead before shipping:**

- `npx tsc --noEmit` — clean
- No `next/document`, `next/head`, or `<Html>` imports in source
- All imports resolve; alias `@/*` works
- All four pages exist with correct metadata exports
- API route exports `runtime = "nodejs"`, `dynamic = "force-dynamic"`, and `POST` / `GET` handlers
- `app/sitemap.ts` + `app/robots.ts` generate metadata routes
- Honeypot field present in form and validated server-side
- Resend imported dynamically so the cold path stays small when unconfigured

---

## 3. Run locally (Windows)

From the project root:

```powershell
pnpm install
pnpm typecheck   # should succeed
pnpm build       # should succeed in a normal environment
pnpm dev         # http://localhost:3000
```

If `pnpm` isn't installed:

```powershell
npm install -g pnpm
```

---

## 4. Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **New Project** → import the repo. Framework auto-detects as Next.js.
3. **Environment Variables** — see §6 below. All three are optional for a working preview deploy; set them before going public.
4. Bind your custom domain (`antaresresilience.com`) in Vercel → Project → Domains.

No build flags or special settings required.

---

## 5. Route map

| Path | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, positioning, services overview, founder credibility, CTA |
| `/services` | `app/services/page.tsx` | Five service lines with deliverables and engagement contexts |
| `/about` | `app/about/page.tsx` | Practice philosophy, founder background, geography |
| `/contact` | `app/contact/page.tsx` | Intro copy + `<ContactForm />` |
| `/api/contact` | `app/api/contact/route.ts` | Server-only POST handler. Validates, honeypot-checks, sends via Resend or returns mailto fallback. |
| `/sitemap.xml` | `app/sitemap.ts` | Generated from a four-entry route list |
| `/robots.txt` | `app/robots.ts` | Allows all; references sitemap |
| 404 | `app/not-found.tsx` | Calm not-found page |
| Errors | `app/error.tsx` | Client error boundary |

No `/admin` route exists. Removed entirely per OG's instruction.

---

## 6. Environment variables

All three are **optional**. The site renders and the contact form works without them — the form falls back to a prefilled `mailto:signal@antaresresilience.com` link.

| Variable | Scope | Purpose |
|---|---|---|
| `RESEND_API_KEY` | **server-only** | Resend API key from resend.com. Never prefix with `NEXT_PUBLIC_`. |
| `CONTACT_TO_EMAIL` | **server-only** | Destination address (e.g. `signal@antaresresilience.com`). Required alongside `RESEND_API_KEY` for delivery. |
| `CONTACT_FROM_EMAIL` | **server-only**, optional | Defaults to `Antares Resilience <noreply@antaresresilience.com>`. |
| `NEXT_PUBLIC_SITE_URL` | public | Canonical origin for SEO, sitemap, OG URLs. Defaults to `https://antaresresilience.com`. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | public | If set, layout injects the Plausible script. Omit to skip analytics. |

A `.env.example` file is included as a template.

---

## 7. Security posture

- No client-side admin password. No admin route at all.
- `RESEND_API_KEY` only ever referenced inside `app/api/contact/route.ts`, which runs on the server. No `NEXT_PUBLIC_` prefix.
- Honeypot field (`name="website"`, visually hidden) — bots get a fake 200 success without anything being sent.
- Server-side input validation: length caps on every field, email regex, project-type enum check, message minimum length.
- No persistence — nothing to leak, nothing to back up, nothing to migrate.
- No third-party scripts unless `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set, and Plausible is privacy-preserving and cookieless.
- `poweredByHeader: false` in `next.config.mjs`.

---

## 8. File tree (delivered)

```
antares-next/
├── DELIVERY_BRIEF.md          ← this file
├── README.md                   ← scaffold's default; safe to replace
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.mjs
├── next-env.d.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── app/
│   ├── favicon.ico
│   ├── fonts/                  ← Geist Sans + Mono (variable woff)
│   ├── globals.css             ← design tokens, base styles
│   ├── layout.tsx              ← root layout + metadata + Geist fonts
│   ├── page.tsx                ← Home
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── ContactForm.tsx
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   └── primitives.tsx          ← Container, Eyebrow, SectionHeading
└── lib/
    ├── cn.ts
    └── site.ts                 ← SITE constants, NAV, PROJECT_TYPES
```

---

## 9. Codex review pointers

If you're handing this to Codex for review, the highest-leverage targets are:

1. **`app/api/contact/route.ts`** — confirm Resend key is server-only, validation is sound, honeypot logic is correct, fallback path is structurally honest (no false success messages).
2. **`app/layout.tsx`** — confirm SEO metadata is correct, no client-side leakage of server vars, Plausible script is conditional and `afterInteractive`.
3. **`lib/site.ts`** — confirm `process.env.NEXT_PUBLIC_SITE_URL` fallback is sane and there's no accidental server-only env read at module top.
4. **`components/ContactForm.tsx`** — confirm error handling covers all three response shapes (success, fallback, error) and that `mailto` URLs are properly encoded.
5. **`app/robots.ts` / `app/sitemap.ts`** — confirm only the four public pages are listed and no admin route leaks in.

Specific things to ignore: the `README.md` is the scaffold default. The `app/fonts/` directory contains Geist binary fonts shipped by `create-next-app`.

---

## 10. Known follow-ups

- Vercel deploy + custom domain bind. Not done.
- Resend account + verified sending domain. Not done.
- Favicon is the Vercel default. Replace `app/favicon.ico` with the Antares mark.
- No OG image. Add `app/opengraph-image.png` (1200×630) once branding is final.
- No tests. The codebase is small enough that visual review + a manual contact-form submit on staging is sufficient for v1.
