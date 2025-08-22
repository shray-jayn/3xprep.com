import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-hover font-semibold tracking-wide",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-card font-medium",
        outline: "border-2 border-border bg-background hover:bg-muted hover:text-accent-foreground font-medium",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground font-medium",
        ghost: "hover:bg-muted hover:text-accent-foreground font-medium",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/80 shadow-card hover:shadow-hover hover:-translate-y-1 font-semibold tracking-wide",
        premium: "bg-gradient-to-r from-primary to-navy-deep text-primary-foreground hover:from-primary/90 hover:to-navy-deep/90 shadow-elegant hover:shadow-hover hover:-translate-y-1 font-semibold"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }