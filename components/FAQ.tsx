"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I make money on Quickhands?",
    answer:
      "Choose a task posted on the platform, send your proposal to the client, and if selected, complete the task and get paid securely through our platform.",
  },
  {
    question: "Why do specialists pay to use the platform?",
    answer:
      "Fees help provide a steady flow of high-quality orders. They also support platform development, advertising, and dedicated specialist support to ensure you have the best experience.",
  },
  {
    question: "What if I pay for a response but the job isn't right for me?",
    answer:
      "Choose tasks carefully by reviewing the description, budget, and complexity. If a client doesn't open your message within 5 days, the response fee is automatically refunded to your account.",
  },
  {
    question: "How do payments work?",
    answer:
      "You pay a small fee for the opportunity to contact a client. The amount is charged instantly from your balance or linked card, giving you immediate access to respond to orders.",
  },
  {
    question: "Who pays me for the work?",
    answer:
      "Clients pay when they choose to work with you. Funds are released to you after the job is completed through our secure platform payment system.",
  },
  {
    question: "Will clients choose me if I don't have reviews yet?",
    answer:
      "Absolutely. Clients consider many factors, including a well-completed profile, work samples, clear communication, and fair pricing. Many professionals get their first job quickly by showcasing their expertise.",
  },
  {
    question: "What if the client disappears?",
    answer:
      "Sometimes clients change plans. If a client seems hesitant, communicate clearly and ask for confirmation or notice if plans change. You can also report inactive clients to our support team.",
  },
  {
    question: "Am I guaranteed to get the order?",
    answer:
      "Clients decide who to work with based on your profile, offer, communication, and pricing. While not guaranteed, creating a strong profile and sending thoughtful proposals significantly increases your chances.",
  },
  {
    question: "Are the clients real?",
    answer:
      "Yes — all orders come from real people. You can see phone verification status, registration date, and client reviews to help you make informed decisions.",
  },
  {
    question: "Why use the app instead of the website?",
    answer:
      "The app sends instant notifications for suitable orders, allowing faster responses that increase your chances of being chosen. Orders and chats are always at your fingertips for maximum convenience.",
  },
]

export function Faq() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="font-sans text-lg text-muted-foreground">
              Everything you need to know about working on Quickhands
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-card rounded-lg px-6 data-[state=open]:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="font-sans text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
