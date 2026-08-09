import {
  BarChart3,
  BookOpen,
  Bot,
  MessageSquare,
  Search,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Upload your documentation, FAQs, guides, and internal knowledge into one searchable knowledge base.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Find the information that actually matches a customer's question instead of relying only on keywords.",
  },
  {
    icon: Bot,
    title: "Grounded AI",
    description:
      "Generate helpful answers based on your organization's knowledge rather than generic AI responses.",
  },
  {
    icon: ShieldCheck,
    title: "Source Citations",
    description:
      "Show customers where an answer came from so they can verify the information themselves.",
  },
  {
    icon: MessageSquare,
    title: "Customer Chat",
    description:
      "Give customers a natural conversational interface for getting answers from your knowledge base.",
  },
  {
    icon: BarChart3,
    title: "Support Analytics",
    description:
      "Understand what customers are asking and identify gaps in your existing documentation.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 bg-muted/20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Everything your support team needs
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Turn your knowledge into better support
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            KnowledgeFlow connects your company’s knowledge with a refined AI support experience that feels trustworthy, fast, and on-brand.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}