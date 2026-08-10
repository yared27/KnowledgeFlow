import { LoginForm } from "@/features/auth/components/login-form";
import { Bot, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left visual panel */}
        <div className="relative hidden overflow-hidden border-r bg-primary p-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          {/* Background decoration */}
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
              Turn your knowledge into intelligent support.
            </h2>

            <p className="mt-4 max-w-md leading-7 text-primary-foreground/70">
              Connect your documentation, build your knowledge base,
              and give customers accurate answers with AI.
            </p>

            {/* Small feature cards */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <FileText className="size-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">
                    Your knowledge base
                  </p>

                  <p className="text-xs text-primary-foreground/60">
                    Documents become searchable AI knowledge.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <Sparkles className="size-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">
                    Grounded AI answers
                  </p>

                  <p className="text-xs text-primary-foreground/60">
                    Answers are based on your own content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <p className="relative text-sm text-primary-foreground/50">
            AI-powered customer support.
          </p>
        </div>

        {/* Login section */}
        <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile brand */}
            <div className="mb-10 text-center lg:hidden">
              <p className="text-xl font-semibold tracking-tight">
                KnowledgeFlow
              </p>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}