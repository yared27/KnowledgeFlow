"use client";

import { LogOut, Menu, User } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
      >
        <Menu className="size-5" />
      </Button>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
        >
          <User className="size-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
        >
          <LogOut className="size-5" />
        </Button>
      </div>
    </header>
  );
}