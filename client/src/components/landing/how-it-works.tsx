import { FileText, MessageCircle, Search, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Upload your knowledge",
    description:
      "Add PDFs, documentation, FAQs, and other resources that contain the information your customers need.",
  },
  {
    number: "02",
    icon: Search,
    title: "Build your knowledge base",
    description:
      "KnowledgeFlow processes your content and makes the relevant information searchable for your AI assistant.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Customers ask questions",
    description:
      "Customers interact with your AI support assistant using a simple conversational interface.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Get grounded answers",
    description:
      "The system retrieves relevant information and generates an answer based on your actual knowledge base, with sources.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            From your documents to AI-powered support
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Connect your existing knowledge and let KnowledgeFlow turn it into a useful support experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <span className="text-sm font-medium text-muted-foreground">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                  {step.description}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-border to-transparent" />

                <p className="mt-4 text-sm text-muted-foreground">
                  Step {index + 1} of 4
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}