import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/primitives";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss an electrical estimating, estimate review, scope reconciliation, or preconstruction advisory project with Antares Resilience in Snohomish, Washington.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description:
      "Discuss an electrical estimating or preconstruction advisory project with Antares Resilience.",
    url: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <Container className="pt-20 pb-12 sm:pt-24 sm:pb-16">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-[var(--color-fg)] max-w-3xl">
            Describe the electrical decision in front of you.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
            A short paragraph is usually enough. Include the project context, the timeline, the available documents, and the specific estimate, scope, or infrastructure question you need clarified.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5 lg:pl-8">
              <div className="border border-[var(--color-border)] p-6 sm:p-8 space-y-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Direct
                  </p>
                  <a
                    href={`mailto:${SITE.contactEmail}`}
                    className="mt-3 block text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {SITE.contactEmail}
                  </a>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-fg-muted)]">
                    The form is preferred because it captures the project type and decision context. Direct email remains available if needed.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Based in
                  </p>
                  <p className="mt-2 text-[14px] text-[var(--color-fg-muted)]">
                    {SITE.location}
                  </p>
                  <p className="text-[14px] text-[var(--color-fg-muted)]">
                    Serving the {SITE.region} and beyond
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Engagement fit
                  </p>
                  <ul className="mt-3 space-y-2 text-[13px] text-[var(--color-fg-muted)]">
                    <li>Pre-design electrical estimating and ROM support</li>
                    <li>Independent estimate and peer review</li>
                    <li>Scope reconciliation and risk review</li>
                    <li>Electrical preconstruction advisory</li>
                    <li>Critical power and infrastructure feasibility</li>
                    <li>Electrical contractors, GCs, owners, and developers</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
