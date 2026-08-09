"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "Explore KnowledgeFlow for personal projects.",
    price: "$0",
    period: "forever",
    features: [
      "1 knowledge base",
      "50 documents",
      "100 questions per month",
      "Basic analytics",
    ],
    cta: "Get started",
    href: "/register",
    popular: false,
  },
  {
    name: "Starter",
    description: "For small teams building AI-powered support.",
    price: "$19",
    period: "per month",
    features: [
      "5 knowledge bases",
      "500 documents",
      "2,000 questions per month",
      "Source citations",
      "Support analytics",
    ],
    cta: "Start free trial",
    href: "/register",
    popular: true,
  },
  {
    name: "Pro",
    description: "For growing teams with larger support needs.",
    price: "$49",
    period: "per month",
    features: [
      "Unlimited knowledge bases",
      "2,500 documents",
      "10,000 questions per month",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Get started",
    href: "/register",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 bg-muted/20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Simple plans that grow with you
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Start small and upgrade when your support needs grow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/60 bg-background/80"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  Most popular
                </div>
              )}

              <h3 className="text-xl font-semibold tracking-tight">
                {plan.name}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>

                <span className="ml-2 text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              <Link
                href={plan.href}
                className={buttonVariants({
                  className: "mt-6 w-full",
                  variant: plan.popular ? "default" : "outline",
                })}
              >
                {plan.cta}
              </Link>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}