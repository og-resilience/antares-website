import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Antares Resilience is an electrical-first infrastructure intelligence and preconstruction advisory practice based in Snohomish, Washington, serving the Pacific Northwest and clients across North America.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${SITE.name}`,
    description:
      "Electrical-first infrastructure intelligence and preconstruction advisory, based in Snohomish, Washington.",
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <Container className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-[var(--color-fg)] max-w-3xl">
            A small, field-informed practice for electrical-heavy projects.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
            Antares Resilience is an independent advisory practice based in Snohomish, Washington, working with owners, developers, contractors, and project teams across the Pacific Northwest and North America.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              <p>
                The work is led by Oliver Gribble. His two decades in electrical construction span field electrician roles, foreman and superintendent work, and senior estimating and preconstruction management on industrial, commercial, and mission-critical projects.
              </p>
              <p>
                That trajectory matters because preconstruction decisions reach further than most teams admit. A misread on labor factors, a soft assumption on long-lead gear, a quiet ambiguity in scope between trades &mdash; any of these can compound into procurement risk, schedule slip, or a defensible claim long before construction starts.
              </p>
              <p>
                Antares exists to surface those issues while they are still inexpensive to fix. The deliverables are short and direct. The voice is technical without theater. The intent is to leave the client with a clearer decision, not a longer report.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-[var(--color-border)] p-6 sm:p-8 space-y-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Principal
                  </p>
                  <p className="mt-3 text-[var(--color-fg)] font-medium">
                    Oliver Gribble
                  </p>
                  <p className="text-[13px] text-[var(--color-fg-muted)]">
                    Founder, Antares Resilience
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Background
                  </p>
                  <ul className="mt-3 space-y-2 text-[13px] text-[var(--color-fg-muted)]">
                    <li>20+ years in electrical construction</li>
                    <li>Field electrician through senior estimating</li>
                    <li>Division 26, 27, 28 scope review</li>
                    <li>NEC, NFPA, industrial controls</li>
                    <li>Critical power and utility coordination</li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Based in
                  </p>
                  <p className="mt-2 text-[13px] text-[var(--color-fg-muted)]">
                    {SITE.location} &middot; serving the Pacific Northwest and North America
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
                Restrained engagements. Defensible output.
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  t: "Scope is sized to the decision",
                  b: "We do not pad engagements. If a one-week review is the right answer, that is the engagement.",
                },
                {
                  t: "Independent of the contracting party",
                  b: "We work for the party making the decision, not the party pricing the work.",
                },
                {
                  t: "Written for serious readers",
                  b: "Reports are concise, sourced, and structured for owners, engineers, and counsel.",
                },
                {
                  t: "Honest about uncertainty",
                  b: "Where the data does not support a conclusion, we say so plainly and frame the range.",
                },
              ].map((item) => (
                <div key={item.t}>
                  <p className="text-[var(--color-fg)] font-medium">{item.t}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                    {item.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)]">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <Eyebrow>Engage</Eyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
              Send a short note. We will respond directly.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact Antares
              </Link>
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-fg)] px-5 py-3 text-sm font-medium hover:border-[var(--color-fg)] transition-colors"
              >
                {SITE.contactEmail}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
