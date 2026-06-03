import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description:
    "Pacific Northwest based electrical estimating, estimate review, scope reconciliation, and preconstruction advisory for electrical contractors, general contractors, owners, and developers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: "/images/home/main-page-hero.jpg",
        width: 2560,
        height: 1136,
        alt: "Abstract infrastructure intelligence visual for Antares Resilience",
      },
    ],
  },
};

const services = [
  {
    n: "01",
    title: "Pre-design electrical estimating",
    body:
      "ROM and budgetary cost opinions for early project decisions, before drawings are complete enough for hard pricing.",
  },
  {
    n: "02",
    title: "Independent estimate review",
    body:
      "Second-opinion review of electrical estimates, labor assumptions, material coverage, and contractor or in-house pricing packages.",
  },
  {
    n: "03",
    title: "Scope reconciliation",
    body:
      "Structured review of where drawings, specifications, inclusions, exclusions, and trade responsibilities fail to align.",
  },
  {
    n: "04",
    title: "Preconstruction advisory",
    body:
      "Electrical-first guidance for constructability, coordination, procurement sequencing, and decision risk before assumptions harden.",
  },
  {
    n: "05",
    title: "Critical power and infrastructure feasibility",
    body:
      "Early review of utility capacity, service approach, standby power, resilience requirements, and infrastructure constraints before they become budget risk.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />
        <Container className="relative pt-20 pb-20 sm:pt-28 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Pacific Northwest based · Pacific Northwest and beyond</Eyebrow>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.05] text-[var(--color-fg)] max-w-4xl">
                Electrical estimating and preconstruction clarity before assumptions become commitments.
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[var(--color-fg-muted)]">
                Antares Resilience helps electrical contractors, general contractors, owners, and developers validate estimates, reconcile scope, and identify electrical infrastructure risk early enough to act.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
            <div className="lg:col-span-5">
              <div className="relative border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2">
                <Image
                  src="/images/home/main-page-hero.jpg"
                  alt="Abstract strategy visual representing electrical infrastructure intelligence and preconstruction decision clarity"
                  width={2560}
                  height={1136}
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="What Antares does"
                title="Cost clarity and scope discipline for electrical-heavy decisions."
              />
            </div>
            <div className="lg:col-span-8 space-y-5 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              <p>
                Electrical scope often carries the assumptions that decide whether a project budget holds, a bid is defensible, or a procurement path creates avoidable risk.
              </p>
              <p>
                Antares reviews electrical estimating and preconstruction information with field-informed judgment. We test quantities, labor logic, equipment assumptions, scope boundaries, and the gaps between drawings, specifications, and pricing narratives.
              </p>
              <p>
                {SITE.publicPositioning}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Capabilities"
              title="Focused advisory lines. No platform theater."
            />
            <Link
              href="/services"
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              View detailed services &rarr;
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {services.map((s) => (
              <li
                key={s.n}
                className="bg-[var(--color-bg)] p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    {s.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[var(--color-border-strong)]"
                  />
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight text-[var(--color-fg)] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Founder credibility */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Field-informed judgment</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)] max-w-2xl">
                Built from electrical construction, not generic consulting language.
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[var(--color-fg-muted)] max-w-2xl">
                <p>
                  Antares is led by Oliver Gribble, whose two decades in electrical construction span field electrician work through senior estimating and preconstruction management.
                </p>
                <p>
                  The work is intentionally direct: read the documents, test the estimate, identify the missing scope, and give the decision-maker a clearer basis for action.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-sm text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors"
                >
                  More about the practice &rarr;
                </Link>
              </div>
            </div>
            <aside className="lg:col-span-5 border border-[var(--color-border)] p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Practice context
              </p>
              <ul className="mt-5 space-y-3 text-[14px] text-[var(--color-fg-muted)]">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Division 26, 27, 28 scope review</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Estimate validation and labor scaling</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Constructability and coordination review</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Utility, service capacity, and critical power context</span>
                </li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Engage</Eyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
              Bring Antares in before the estimate becomes the plan.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              Send the project context, the current decision point, and the electrical scope question you need answered.
            </p>
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
