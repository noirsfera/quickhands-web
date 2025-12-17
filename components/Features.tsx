import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  ShieldCheck,
  Wallet,
  BadgeCheck,
} from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Real reviews",
    description:
      "Reviews can only be left after the job is completed, so every review reflects a genuine, real-world experience.",
  },
  {
    icon: BadgeCheck,
    title: "Verified professionals",
    description:
      "Your safety matters to us. Every specialist goes through identity, experience, and education verification before joining the platform.",
  },
  {
    icon: Wallet,
    title: "Best prices",
    description:
      "Browse a wide range of professionals, compare pricing transparently, and choose the option that works best for you.",
  },
  {
    icon: ShieldCheck,
    title: "Safe payment method",
    description:
      "Pay securely through our platform. Funds are released to the specialist only after you approve the completed work.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="h-full border-border bg-card"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="font-sans mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
