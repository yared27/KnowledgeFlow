"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.92))] px-6 py-16 text-center text-white shadow-2xl sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Ready to launch
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Your documentation already has the answers.
        </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
          Give your customers a faster way to find them with an
          AI-powered support experience built on your own knowledge.
        </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Get started
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="#features"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
              })}
            >
              Explore features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}