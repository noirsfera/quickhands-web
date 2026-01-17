import type { ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn("grid w-full auto-rows-[24rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: any
  description: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-2xl",
      "bg-card border border-border/50",
      "[box-shadow:0_1px_1px_rgba(0,0,0,.02),0_4px_8px_rgba(0,0,0,.04),0_16px_32px_rgba(0,0,0,.04)]",
      "transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="absolute inset-0 flex items-start justify-center pt-6">{background}</div>

    <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-2 bg-gradient-to-t from-card via-card/95 to-transparent p-6 pt-16 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-10 w-10 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-90" />
      <h3 className="text-lg font-semibold tracking-tight text-foreground">{name}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-primary hover:text-primary">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[.02]" />
  </div>
)

export { BentoCard, BentoGrid }
