import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent estimate review, preconstruction advisory, scope reconciliation, critical power feasibility, and decision support for owners and developers.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description:
      "Independent estimate review, preconstruction advisory, scope reconciliation, critical power feasibility, and decision support.",
    url: `${SITE.url}/services`,
  },
};

const services = [
  {
    n: "01",
    title: "Independent estimate and peer review",
    summary:
      "Third-party validation of contractor or in-house electrical estimating packages before procurement and contract execution.",
    deliverables: [
      "Line-item review of labor, material, and equipment assumptions",
      "Quantity and takeoff sampling against drawings and specifications",
      "Risk-weighted commentary on missing scope and soft assumptions",
      "Short written report sized for an executive read",
    ],
    fit: "Owners and developers requesting a second opinion before contract award. GCs and ECs validating internal bids before submission.",
  },
  {
    n: "02",
    title: "Electrical preconstruction advisory",
    summary:
      "Early-stage strategy on projects where power, coordination, constructability, and budget certainty matter from day one.",
    deliverables: [
      "Constructability commentary on draft drawings and narratives",
      "Long-lead equipment and procurement risk callouts",
      "Trade-coordination scope boundary mapping (Division 26 / 27 / 28)",
      "Working sessions with design and ownership teams",
    ],
    fit: "Owner teams in early design through DD. Developers structuring RFPs and pricing assumptions before full design.",
  },
  {
    n: "03",
    title: "Scope gap and risk reconciliation",
    summary:
      "Structured review of where drawings, specifications, estimates, responsibilities, and assumptions fail to agree.",
    deliverables: [
      "Cross-document gap matrix flagging conflicts and silences",
      "Responsibility-matrix commentary across trades and utilities",
      "Identified ambiguity in performance specs and basis-of-design notes",
      "Recommended clarifications before pricing or award",
    ],
    fit: "Projects mid-bid or pre-award where scope drift, change orders, or claim exposure is already visible.",
  },
  {
    n: "04",
    title: "Critical power and infrastructure feasibility",
    summary:
      "Electrical-first feasibility for power-dense projects: data centers, AI infrastructure, industrial facilities, and major service entrances.",
    deliverables: [
      "Service capacity and utility coordination feasibility commentary",
      "Backup and redundancy approach review (UPS, generation, ATS, paralleling)",
      "Single-line and basis-of-design sanity check",
      "Cost-band framing for high-density power scenarios",
    ],
    fit: "Owners and developers evaluating sites or schemes before committing to an engineering and procurement path.",
  },
  {
    n: "05",
    title: "Owner and developer decision support",
    summary:
      "Plain, defensible technical reporting for leadership teams making capital decisions before full design or construction pricing is complete.",
    deliverables: [
      "Executive briefs framing risk, options, and tradeoffs",
      "Independent commentary alongside engineer or contractor proposals",
      "Milestone validation at key go / no-go decision points",
      "Direct access to the principal for follow-up questions",
    ],
    fit: "Owner and developer leadership facing committee, board, or capital-allocation decisions on electrical-heavy projects.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-[var(--color-border)]">
        <Container className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-[var(--color-fg)] max-w-3xl">
            Five focused advisory lines, all anchored in electrical reality.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
            Each engagement is sized to the decision in front of you, not to a retainer template. Deliverables are written to be defensible to engineers, executives, and counsel alike.
          </p>
        </Container>
      </section>

      {/* Service list */}
      <section>
        <Container className="py-12 sm:py-16">
          <div className="divide-y divide-[var(--color-border)]">
            {services.map((s) => (
              <article
                key={s.n}
                id={`service-${s.n}`}
                className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <header className="lg:col-span-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-accent)]">
                    {s.n}
                  </span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                    {s.summary}
                  </p>
                </header>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                      Deliverables
                    </p>
                    <ul className="mt-4 space-y-3">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-[14px] leading-relaxed text-[var(--color-fg)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 bg-[var(--color-accent)] shrink-0"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                      Typical fit
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                      {s.fit}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Engage</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
                Describe the decision. We will scope from there.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
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
