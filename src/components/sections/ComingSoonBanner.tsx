import React from "react";
import { Section } from "@/components/ui/section";
import { BookOpen } from "lucide-react";

export function ComingSoonBanner() {
  if (import.meta.env.DEV) {
    // console.log("[ComingSoonBanner] render");
  }

  return (
    <Section>
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 bg-muted/50 px-6 py-4 rounded-xl">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            <strong>Coming Soon:</strong> We'll integrate native diagnostic tests directly into our platform for a seamless experience.
          </p>
        </div>
      </div>
    </Section>
  );
}
