import { Card, CardContent } from "@/components/ui/card"
import { Clipboard, Users, CheckCircle, CreditCard ,Star, } from "lucide-react";


const steps = [
  {
    icon: Clipboard,
    title: "Tell us what you need",
    description:
      "Share the details of your task through a short questionnaire, and we’ll match you with the right experts.",
  },
  {
    icon: Users,
    title: "Hear from qualified professionals",
    description:
      "Skilled specialists review your request and reach out with personalised offers.",
  },
  {
    icon: CheckCircle,
    title: "Choose with confidence",
    description:
      "Compare profiles, reviews, and pricing, then select the professional that feels right for you.",
  },
  {
    icon: Star,
    title: "Get it done and review",
    description:
      "Approve the completed work, release payment, and leave a review to help others choose confidently.",
  },
];


export function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-sans text-4xl font-bold tracking-tight">How It Works</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                <Card className="h-full border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      <span className="font-mono">{index + 1}</span>
                    </div>
                    <h3 className="font-sans mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
