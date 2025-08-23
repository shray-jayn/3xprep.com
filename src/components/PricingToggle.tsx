import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PricingToggleProps {
  value: "monthly" | "annual"
  onChange: (value: "monthly" | "annual") => void
}

export function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="inline-flex items-center bg-neutral-100 rounded-xl p-1">
        <Button
          variant={value === "monthly" ? "default" : "ghost"}
          size="sm"
          onClick={() => onChange("monthly")}
          className={`px-6 py-2 rounded-lg transition-all duration-200 ${
            value === "monthly" 
              ? "bg-white shadow-sm" 
              : "text-neutral-600 hover:text-neutral-800"
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
              ? "bg-white shadow-sm" 
              : "text-neutral-600 hover:text-neutral-800"
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