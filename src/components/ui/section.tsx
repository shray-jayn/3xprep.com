import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  variant?: "default" | "subtle" | "gradient" | "dark";
  className?: string;
  id?: string;
}

const sectionVariants = {
  default: "bg-background",
  subtle: "bg-neutral-100/30",
  gradient: "bg-gradient-to-br from-background via-neutral-100/50 to-background",
  dark: "bg-gradient-to-br from-primary via-navy-deep to-primary"
};

export const Section = ({ 
  children, 
  variant = "default", 
  className = "",
  id 
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20",
        sectionVariants[variant],
        className
      )}
    >
      <div className="container max-w-screen-xl">
        {children}
      </div>
    </section>
  );
};