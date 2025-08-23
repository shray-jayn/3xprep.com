import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PricingToggleProps {
  value: "monthly" | "annual"
  onChange: (value: "monthly" | "annual") => void
}

export function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="inline-flex items-center bg-muted rounded-xl p-1 border shadow-sm">
        <Button
          variant={value === "monthly" ? "default" : "ghost"}
          size="sm"
          onClick={() => onChange("monthly")}
          className={`px-6 py-2 rounded-lg transition-all duration-200 ${
            value === "monthly" 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Monthly
        </Button>
        <Button
          variant={value === "annual" ? "default" : "ghost"}
          size="sm"
          onClick={() => onChange("annual")}
          className={`px-6 py-2 rounded-lg transition-all duration-200 ${
            value === "annual" 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Annual
          <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md">
            Save 20%
          </span>
        </Button>
      </div>
    </div>
  )
}