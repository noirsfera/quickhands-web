import { Card, CardContent } from "@/components/ui/card"
import { Clipboard, Search, MessageSquare, CreditCard ,Star, } from "lucide-react";


const steps = [
  {
    icon: Clipboard,
    title: "Clients post tasks",
    description:
      "Clients describe their task in detail and suggest a budget that fits their needs.",
  },
  {
    icon: Search,
    title: "Choose the orders that suit you",
    description:
      "Browse available tasks and select the ones that match your skills, availability, and preferences.",
  },
  {
    icon: MessageSquare,
    title: "Send your offer",
    description:
      "Respond to tasks, discuss requirements, and agree on pricing privately with the client.",
  },
  {
    icon: CreditCard,
    title: "Complete the work and get paid",
    description:
      "Deliver the work, mark the task as complete, and receive your payment securely within the app.",
  },
  {
    icon: Star,
    title: "Build your reputation",
    description:
      "Earn verified reviews, strengthen your profile, and attract more clients over time.",
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
