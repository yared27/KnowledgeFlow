import {
  Bot,
  FileText,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { RegisterForm } from "@/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left visual panel */}
        <div className="relative hidden overflow-hidden border-r bg-primary p-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-white/10 blur-3xl" />

          {/* Brand */}
          <div className="relative">
            <p className="text-xl font-semibold tracking-tight">
              <Link href="/">KnowledgeFlow</Link>
            </p>
          </div>

          {/* Content */}
          <div className="relative max-w-lg">
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <Bot className="size-6" />
            </div>

            <h2 className="text-3xl font-semibold tracking-tight xl:text-4xl">
              Build a smarter support experience.
            </h2>

            <p className="mt-4 max-w-md leading-7 text-primary-foreground/70">
              Bring your documentation together and make it
              accessible through an AI-powered knowledge base.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <FileText className="size-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">
                    Centralize your knowledge
                  </p>

                  <p className="text-xs text-primary-foreground/60">
                    Keep your support documentation in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <Sparkles className="size-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">
                    Give better answers
                  </p>

                  <p className="text-xs text-primary-foreground/60">
                    Let AI answer questions using your own knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative text-sm text-primary-foreground/50">
            AI-powered customer support.
          </p>
        </div>

        {/* Register */}
        <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile brand */}
            <div className="mb-10 text-center lg:hidden">
              <p className="text-xl font-semibold tracking-tight">
                KnowledgeFlow
              </p>
            </div>

            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}