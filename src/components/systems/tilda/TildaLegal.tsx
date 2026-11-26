export interface LegalSection {
  id: string;
  title: string;
  body: string[];
}

interface TildaLegalProps {
  eyebrow: string;
  title: string;
  intro: string[];
  contactEmail?: string;
  sections: LegalSection[];
}

/**
 * Editorial legal document layout modeled after tilda.cc/privacy and tilda.cc/terms.
 */
export function TildaLegal({
  eyebrow,
  title,
  intro,
  contactEmail,
  sections,
}: TildaLegalProps) {
  return (
    <div className="flex-1 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
        </div>

        <div className="mt-12 space-y-5 text-base leading-relaxed text-foreground">
          {intro.map((para) => (
            <p key={para}>{para}</p>
          ))}
          {contactEmail && (
            <p className="text-sm text-muted">
              Legal &amp; privacy questions:{" "}
              <span className="font-mono text-accent-strong">{contactEmail}</span>
            </p>
          )}
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Contents
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-accent-strong hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-10 border-t border-border pt-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-3">
              <h2 className="font-display text-2xl font-light text-foreground">
                {section.title}
              </h2>
              {section.body.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
