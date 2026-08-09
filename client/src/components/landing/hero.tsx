"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_25%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/75 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="size-4 text-primary" />
            AI support, built on your documentation
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Turn your knowledge base into a
            <span className="text-primary"> polished support assistant.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Upload your docs, FAQs, and internal knowledge. KnowledgeFlow transforms them into a branded AI experience that answers customer questions with confidence and clear citations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Get started free
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="#how-it-works"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              See how it works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-2 shadow-sm">
              <CheckCircle2 className="size-4 text-emerald-600" />
              No credit card required
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-2 shadow-sm">
              <ShieldCheck className="size-4 text-blue-600" />
              Source citations included
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-2 shadow-sm">
              <Zap className="size-4 text-amber-500" />
              Live in minutes
            </div>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-3xl border bg-background/75 p-4 shadow-sm backdrop-blur-sm">
            <Stat value="24/7" label="Customer support" />
            <Stat value="98%" label="Answer confidence" />
            <Stat value="1" label="Unified knowledge hub" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="rounded-[2rem] border bg-background/80 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border bg-card p-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">KnowledgeFlow Assistant</p>
                  <p className="text-lg font-semibold">Customer question</p>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                  Online
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="ml-auto max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground shadow-sm">
                  How do I connect my documentation and make sure answers stay accurate?
                </div>

                <div className="max-w-[90%] rounded-2xl border bg-muted/60 px-4 py-4 text-sm leading-7 text-foreground shadow-sm">
                  KnowledgeFlow ingests your docs, indexes them with semantic search, and generates grounded answers with citations from your own content.
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Grounded responses",
                    "Source citations",
                    "Fast onboarding",
                    "Brandable UI",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-2xl border bg-background px-3 py-2 text-sm">
                      <CheckCircle2 className="size-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}