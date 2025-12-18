import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Percent } from "lucide-react"

export function PricingPlans() {
  return (
    <section className="py-24 border-t border-border/40 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl font-bold tracking-tight mb-4">Tariffs</h2>
          <p className="font-sans text-lg text-muted-foreground">Flexible tariff options to match your workflow</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Commission per order */}
          <Card className="border-border bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-mono font-semibold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Percent className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-sans text-2xl font-bold">Commission per order</CardTitle>
              <p className="font-sans text-sm text-muted-foreground mt-2">
                You only pay after you receive an order — responding is free
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-foreground">Pay on success</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-sans text-sm text-foreground">
                    Unlocks after verification or 3 paid responses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-sans text-sm text-foreground">Available to all professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-sans text-sm text-foreground">No upfront costs or hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-sans text-sm text-foreground">Only pay when you get paid</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pay per response */}
          <Card className="border-border bg-card">
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <CreditCard className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="font-sans text-2xl font-bold">Pay per response</CardTitle>
              <p className="font-sans text-sm text-muted-foreground mt-2">
                Pay a small fee to send an offer to a client
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-foreground">Small fee</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted mt-0.5">
                    <Check className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="font-sans text-sm text-foreground">No hidden charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted mt-0.5">
                    <Check className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="font-sans text-sm text-foreground">Not every response leads to a job</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted mt-0.5">
                    <Check className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="font-sans text-sm text-foreground">First order requires 5-10 responses average</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted mt-0.5">
                    <Check className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="font-sans text-sm text-foreground">Great for getting started quickly</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            All pricing includes secure payment processing and platform support
          </p>
        </div>
      </div>
    </section>
  )
}
