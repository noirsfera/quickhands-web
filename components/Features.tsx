import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
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
    illustration: "/Review.svg",
  },
  {
    icon: BadgeCheck,
    title: "Verified professionals",
    description:
      "Your safety matters to us. Every specialist goes through identity, experience, and education verification before joining the platform.",
    illustration: "/Verified.svg",
  },
  {
    icon: Wallet,
    title: "Best prices",
    description:
      "Browse a wide range of professionals, compare pricing transparently, and choose the option that works best for you.",
    illustration: "/Pricing.svg",
  },
  {
    icon: ShieldCheck,
    title: "Safe payment method",
    description:
      "Pay securely through our platform. Funds are released to the specialist only after you approve the completed work.",
    illustration: "/Safe-amico.svg",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="group relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Subtle gradient overlay for premium feel */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardContent className="relative pt-6 flex flex-col h-full">
                  {/* Illustration */}
                  <div className="mb-6 flex w-full justify-center h-[220px] items-center">
                    <Image
                      src={feature.illustration}
                      alt={feature.title}
                      width={200}
                      height={200}
                      className="object-contain"
                      priority={index < 2}
                    />
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>

                  <h3 className="font-sans mb-2 text-xl font-semibold min-h-[56px]">
                    {feature.title}
                  </h3>

                  <p className="font-sans mt-auto text-sm leading-relaxed text-muted-foreground">
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
