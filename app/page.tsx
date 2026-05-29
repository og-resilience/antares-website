import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
};

const services = [
  {
    n: "01",
    title: "Independent estimate review",
    body:
      "Third-party validation of electrical estimating packages, scope reconciliation, and labor and material assumptions before procurement.",
  },
  {
    n: "02",
    title: "Electrical preconstruction advisory",
    body:
      "Early-stage strategy for projects where power, coordination, constructability, and budget certainty matter.",
  },
  {
    n: "03",
    title: "Scope gap and risk reconciliation",
    body:
      "Structured review of where drawings, estimates, responsibilities, and assumptions fail to line up.",
  },
  {
    n: "04",
    title: "Critical power and infrastructure feasibility",
    body:
      "Electrical-first feasibility for power-dense projects including data centers, AI infrastructure, industrial facilities, and major service entrances.",
  },
  {
    n: "05",
    title: "Owner and developer decision support",
    body:
      "Clear technical reporting for leadership teams making capital decisions before full design or construction pricing is complete.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />
        <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Eyebrow>Snohomish, WA · Pacific Northwest</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.05] text-[var(--color-fg)] max-w-4xl">
            Electrical-first infrastructure intelligence for decisions that cannot afford bad assumptions.
          </h1>
          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[var(--color-fg-muted)]">
            Antares Resilience helps owners, developers, contractors, and project teams validate electrical estimating, reconcile scope, and identify infrastructure risk before cost, schedule, procurement, and responsibility are locked in.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Request a consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-fg)] px-5 py-3 text-sm font-medium hover:border-[var(--color-fg)] transition-colors"
            >
              Review services
            </Link>
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
                title="Power certainty and decision clarity, before construction assumptions harden."
              />
            </div>
            <div className="lg:col-span-8 space-y-5 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              <p>
                On power-dense projects, electrical systems can drive twenty to forty percent of capital cost, yet decisions are routinely made with incomplete, fragmented, or unvalidated information.
              </p>
              <p>
                Antares Resilience reviews preconstruction electrical packages with the same rigor a serious owner or estimator would apply internally. We validate quantities and labor assumptions, surface scope boundaries between trades, and flag where the drawings, the estimate, and the field will not agree.
              </p>
              <p>
                The work is restrained on purpose. Our deliverables are short, defensible, and decision-ready &mdash; not theater. Engagements are based in the Pacific Northwest and serve clients across North America.
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
              title="Infrastructure advisory and preconstruction review."
            />
            <Link
              href="/services"
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              View detailed services &rarr;
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
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
                Grounded in the field. Refined in preconstruction.
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[var(--color-fg-muted)] max-w-2xl">
                <p>
                  Antares is led by Oliver Gribble, whose two decades in electrical construction span field electrician work through senior estimating and preconstruction management on complex industrial and commercial projects.
                </p>
                <p>
                  We do not evaluate estimates from a purely academic standpoint. We understand how conduit is physically routed, how labor factors scale across environments, and where drawings hide the gaps that produce friction between owners, engineers, and contractors.
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
                Practice areas
              </p>
              <ul className="mt-5 space-y-3 text-[14px] text-[var(--color-fg-muted)]">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Division 26, 27, 28 scope review</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>NEC, NFPA, and industrial controls context</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Estimate validation and labor scaling</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Utility coordination and service capacity</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 bg-[var(--color-accent)]" />
                  <span>Critical power and redundancy review</span>
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
              Bring us in before assumptions become commitments.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              We accept a limited number of engagements at a time. The fastest path is a direct request describing the project and the decision in front of you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Request a consultation
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
