import {
  BookOpen,
  FileText,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Knowledge Bases",
    value: "0",
    description: "No knowledge bases yet",
    icon: BookOpen,
  },
  {
    title: "Documents",
    value: "0",
    description: "No documents uploaded",
    icon: FileText,
  },
  {
    title: "Conversations",
    value: "0",
    description: "No conversations yet",
    icon: MessageSquare,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your knowledge and see how your AI assistant is performing.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border bg-background p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <ArrowUpRight className="size-4 text-muted-foreground" />
              </div>

              <div className="mt-5">
                <p className="text-sm text-muted-foreground">
                  {stat.title}
                </p>

                <p className="mt-1 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Getting started */}
      <div className="rounded-xl border bg-background p-6 shadow-sm">
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold">
            Get started with KnowledgeFlow
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Create a knowledge base and upload your documents. KnowledgeFlow
            will use them to give your AI assistant context when answering
            questions.
          </p>

          <div className="mt-6">
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Create knowledge base
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            Recent activity
          </h2>

          <p className="text-sm text-muted-foreground">
            Your latest KnowledgeFlow activity will appear here.
          </p>
        </div>

        <div className="rounded-xl border bg-background">
          <div className="flex min-h-40 items-center justify-center px-6">
            <div className="text-center">
              <MessageSquare className="mx-auto size-8 text-muted-foreground/50" />

              <p className="mt-3 text-sm font-medium">
                No recent activity
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Your activity will appear here once you start using KnowledgeFlow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}