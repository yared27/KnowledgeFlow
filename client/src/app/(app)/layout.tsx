import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/20">
      <AppSidebar />

      <div className="lg:pl-64">
        <AppHeader />

        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}