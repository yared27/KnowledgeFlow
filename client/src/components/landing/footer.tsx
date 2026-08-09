import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "API", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background">
                <Sparkles className="size-4" />
              </span>
              KnowledgeFlow
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Turn your company’s knowledge into a refined AI-powered customer support experience.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://github.com"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border bg-background text-xs font-semibold tracking-wide text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                GH
              </Link>

              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border bg-background text-xs font-semibold tracking-wide text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                in
              </Link>

              <Link
                href="mailto:hello@knowledgeflow.ai"
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Mail className="size-4" />
              </Link>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />

          <FooterColumn title="Resources" links={resourceLinks} />

          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="flex flex-col gap-4 border-t border-border/60 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} KnowledgeFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Status
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}