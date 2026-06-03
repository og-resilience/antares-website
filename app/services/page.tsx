import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical estimating, ROM support, independent estimate review, scope reconciliation, preconstruction advisory, and infrastructure risk review for contractors, GCs, owners, and developers.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description:
      "Focused electrical estimating and preconstruction advisory services for early cost clarity and scope discipline.",
    url: `${SITE.url}/services`,
    images: [
      {
        url: "/images/services/preconstruction-intelligence.png",
        width: 2752,
        height: 1536,
        alt: "Concept visual representing electrical preconstruction intelligence",
      },
    ],
  },
};

const services = [
  {
    n: "01",
    title: "Pre-design electrical estimating and ROM support",
    summary:
      "Budgetary electrical cost opinions when the project needs a defensible early number before the documents are ready for hard bid pricing.",
    image: "/images/services/preconstruction-intelligence.png",
    imageAlt:
      "Concept visual representing early electrical estimating and infrastructure planning",
    imageNote: "Concept / strategy visual",
    deliverables: [
      "ROM-level electrical cost framing based on available narratives, drawings, and assumptions",
      "Major system and service-entrance cost drivers identified early",
      "Clear exclusions, assumptions, and confidence limits",
      "Short decision memo suitable for owner, GC, or contractor review",
    ],
    fit: "Owners, developers, GCs, and electrical contractors who need an early electrical number before the design is complete.",
  },
  {
    n: "02",
    title: "Independent estimate and peer review",
    summary:
      "Third-party review of electrical estimating packages before procurement, bid submission, contract award, or capital approval.",
    image: "/images/services/independent-estimate-peer-review.png",
    imageAlt:
      "Concept visual representing independent electrical estimate peer review",
    imageNote: "Concept / strategy visual",
    deliverables: [
      "Line-item review of labor, material, equipment, and subcontractor assumptions",
      "Quantity and takeoff sampling against drawings and specifications",
      "Risk-weighted commentary on missing scope, allowances, and soft assumptions",
      "Concise written findings sized for an executive or preconstruction read",
    ],
    fit: "Electrical contractors validating a bid, GCs reviewing trade coverage, or owners and developers seeking a second opinion.",
  },
  {
    n: "03",
    title: "Scope reconciliation and risk review",
    summary:
      "Structured review of where drawings, specifications, estimates, inclusions, exclusions, and trade responsibilities fail to agree.",
    image: "/images/services/oh-conduit.jpeg",
    imageAlt:
      "Field-installed overhead electrical conduit showing real-world routing and coordination complexity",
    imageNote: "Field credibility visual",
    deliverables: [
      "Gap matrix flagging conflicts, silences, and ambiguous responsibility boundaries",
      "Division 26, 27, and 28 scope commentary across trades and utility interfaces",
      "Review of inclusions, exclusions, allowances, alternates, and basis-of-design notes",
      "Recommended clarifications before pricing, award, or change exposure hardens",
    ],
    fit: "Bid, pre-award, and early construction teams facing scope drift, unclear responsibility, or claim exposure.",
  },
  {
    n: "04",
    title: "Electrical preconstruction advisory",
    summary:
      "Early-stage electrical judgment for projects where constructability, coordination, procurement, and budget certainty matter from day one.",
    image: "/images/services/control-cab.jpeg",
    imageAlt:
      "Electrical control cabinet field photo representing practical preconstruction and coordination judgment",
    imageNote: "Field credibility visual",
    deliverables: [
      "Constructability commentary on drawings, narratives, and design progression",
      "Long-lead equipment and procurement risk callouts",
      "Trade-coordination and system-boundary mapping",
      "Working sessions with owner, GC, electrical contractor, or design teams",
    ],
    fit: "Teams in concept, schematic design, design development, or GMP preparation who need field-informed electrical input.",
  },
  {
    n: "05",
    title: "Critical power and infrastructure feasibility",
    summary:
      "Electrical-first feasibility review for power-dense projects, major service entrances, backup power, and infrastructure-heavy decisions.",
    image: "/images/services/inside-transformer-480v.jpeg",
    imageAlt:
      "Inside view of electrical transformer equipment representing field-scale power infrastructure review",
    imageNote: "Field credibility visual",
    deliverables: [
      "Service capacity and utility coordination feasibility commentary",
      "Backup, redundancy, UPS, generator, ATS, and paralleling approach review",
      "Single-line, equipment, and basis-of-design sanity checks",
      "Cost-band framing for high-density or infrastructure-heavy electrical scenarios",
    ],
    fit: "Owners, developers, GCs, and electrical contractors evaluating site power, critical systems, or infrastructure-heavy scope.",
  },
];

const engagementTypes = [
  {
    title: "Rapid ROM or budget opinion",
    body: "A short, assumption-bound cost view when the project needs direction before full design or bid documents exist.",
  },
  {
    title: "Focused peer review",
    body: "A review of a specific estimate, bid package, scope issue, or procurement decision with written findings.",
  },
  {
    title: "Scope reconciliation pass",
    body: "A matrix-style review of mismatched drawings, specifications, inclusions, exclusions, and responsibility boundaries.",
  },
  {
    title: "Advisory working session",
    body: "A restrained engagement for teams that need direct electrical preconstruction judgment around a defined decision.",
  },
];

const faqItems = [
  {
    q: "Who does Antares Resilience serve?",
    a: "Antares serves electrical contractors, general contractors, owners, and developers that need clearer electrical estimating, scope, or preconstruction judgment before making a project decision.",
  },
  {
    q: "Does Antares provide full design engineering?",
    a: "No. Antares provides electrical estimating, estimate review, scope reconciliation, and preconstruction advisory. It does not replace the engineer of record, licensed design services, or contractor means and methods.",
  },
  {
    q: "When is the right time to involve Antares?",
    a: "The best time is before budget assumptions, bid strategy, procurement paths, or scope boundaries become hard commitments. Early review is usually less expensive than late correction.",
  },
  {
    q: "What information is useful to start?",
    a: "Useful inputs include drawings, specifications, narratives, estimates, takeoff records, addenda, scope letters, exclusions, alternates, and the specific decision the team needs to make.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-[var(--color-border)]">
        <Container className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-[var(--color-fg)] max-w-3xl">
            Focused electrical estimating and preconstruction advisory.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
            Antares supports electrical contractors, general contractors, owners, and developers when an electrical estimate, scope boundary, or infrastructure assumption needs an independent read before the decision hardens.
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
                  <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      width={1200}
                      height={800}
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                    {s.imageNote}
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

      {/* Engagement types */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Engagement types</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
                Sized to the decision, not a retainer template.
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {engagementTypes.map((item) => (
                <div key={item.title}>
                  <p className="text-[var(--color-fg)] font-medium">{item.title}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
                Clear boundaries for the work.
              </h2>
            </div>
            <div className="lg:col-span-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {faqItems.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="text-[var(--color-fg)] font-medium">{item.q}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Engage</Eyebrow>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-fg)]">
                Describe the project and the decision point.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Discuss a Project
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-fg)] px-5 py-3 text-sm font-medium hover:border-[var(--color-fg)] transition-colors"
              >
                About the practice
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
