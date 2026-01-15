import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Percent } from "lucide-react"

export function PricingPlans() {
  return (
    <section className="py-24 border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-neutral-900 mb-4">Tariffs</h2>
          <p className="font-sans text-lg text-neutral-600">Flexible tariff options to match your workflow</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <Card className="border-neutral-200 bg-white relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-green-600/15 text-green-700 text-xs font-mono font-semibold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/15">
                <Percent className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="font-sans text-2xl font-bold text-neutral-900">Commission per order</CardTitle>
              <p className="font-sans text-sm text-neutral-600 mt-2">
                You only pay after you receive an order — responding is free
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-neutral-900">Pay on success</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600/15 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">
                    Unlocks after verification or 3 paid responses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600/15 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">Available to all professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600/15 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">No upfront costs or hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600/15 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">Only pay when you get paid</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100">
                <CreditCard className="h-6 w-6 text-neutral-600" />
              </div>
              <CardTitle className="font-sans text-2xl font-bold text-neutral-900">Pay per response</CardTitle>
              <p className="font-sans text-sm text-neutral-600 mt-2">Pay a small fee to send an offer to a client</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-neutral-900">Small fee</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 mt-0.5">
                    <Check className="h-3 w-3 text-neutral-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">No hidden charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 mt-0.5">
                    <Check className="h-3 w-3 text-neutral-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">Not every response leads to a job</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 mt-0.5">
                    <Check className="h-3 w-3 text-neutral-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">
                    First order requires 5-10 responses average
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 mt-0.5">
                    <Check className="h-3 w-3 text-neutral-600" />
                  </div>
                  <span className="font-sans text-sm text-neutral-900">Great for getting started quickly</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-neutral-600">
            All pricing includes secure payment processing and platform support
          </p>
        </div>
      </div>
    </section>
  )
}
