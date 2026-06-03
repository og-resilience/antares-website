import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Antares Resilience is an electrical-first estimating and preconstruction advisory practice led by Oliver Gribble in Snohomish, Washington.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${SITE.name}`,
    description:
      "Field-informed electrical estimating and preconstruction advisory led by Oliver Gribble in Snohomish, Washington.",
    url: `${SITE.url}/about`,
    images: [
      {
        url: "/images/about/oliver-gribble-founder.jpeg",
        width: 2048,
        height: 1536,
        alt: "Oliver Gribble, founder of Antares Resilience",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <Container className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-[var(--color-fg)] max-w-3xl">
            A small, field-informed practice for electrical estimating and preconstruction decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
            Antares Resilience is based in Snohomish, Washington, and supports clients across the Pacific Northwest and beyond where early electrical cost clarity and technical judgment matter.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              <p>
                The work is led by Oliver Gribble. His two decades in electrical construction span field electrician experience, field leadership, senior estimating, and preconstruction management across industrial, commercial, and mission-critical environments.
              </p>
              <p>
                That background matters because estimate risk rarely appears as one obvious error. It usually shows up as a soft labor assumption, a missing system boundary, a long-lead equipment exposure, or a responsibility gap between the drawings, specifications, and bid narrative.
              </p>
              <p>
                Antares exists to surface those issues while they are still inexpensive to address. The deliverables are concise, technical, and built for decisions: what is known, what is assumed, what is missing, and where the risk sits.
              </p>
              <p>
                The workflow is intentionally practical. Antares works from drawings, specifications, estimates, takeoff records, addenda, scope letters, and preconstruction notes, using electrical trade judgment and modern analysis tools to make fragmented information usable.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-[var(--color-border)] p-2 bg-[var(--color-bg-elevated)]">
                <Image
                  src="/images/about/oliver-gribble-founder.jpeg"
                  alt="Oliver Gribble, founder of Antares Resilience"
                  width={2048}
                  height={1536}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-6 border border-[var(--color-border)] p-6 sm:p-8 space-y-6">
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
                    <li>Division 26, 27, and 28 scope review</li>
                    <li>NEC, NFPA, industrial controls, and critical power context</li>
                    <li>Estimating, preconstruction, plan review, and scope reconciliation workflows</li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Based in
                  </p>
                  <p className="mt-2 text-[13px] text-[var(--color-fg-muted)]">
                    {SITE.location} · {SITE.region} and beyond
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
                  b: "If a focused review answers the question, that is the engagement. The work does not become a platform by default.",
                },
                {
                  t: "Independent of the pricing party",
                  b: "Antares serves the party that needs clarity, whether that is an electrical contractor, GC, owner, or developer.",
                },
                {
                  t: "Written for serious readers",
                  b: "Findings are concise, sourced, and structured for teams that need a decision rather than a long report.",
                },
                {
                  t: "Honest about uncertainty",
                  b: "Where available information does not support a firm conclusion, we state the assumption and frame the range.",
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
              Send the project context and the electrical decision you need clarified.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Discuss a Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-fg)] px-5 py-3 text-sm font-medium hover:border-[var(--color-fg)] transition-colors"
              >
                Review services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
