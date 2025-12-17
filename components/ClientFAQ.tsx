"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I have to pay to use your platform?",
    answer:
      "No, our platform is completely free for clients. We connect you with the right specialists for your task, and you only pay the specialist after the job has been completed and you’re satisfied with the results.",
  },
  {
    question: "Is there any risk of losing my money?",
    answer:
      "No. To protect you from scams or dishonest behavior, all payments are made securely through our app.",
  },
  {
    question: "Why is paying through your app safe?",
    answer:
      "Paying through our app guarantees that the job is completed to a high standard. If the specialist’s work doesn’t meet your expectations, your money is protected because it’s held securely on our platform until you approve the completed task.",
  },
  {
    question: "Why should I use your platform instead of finding someone on my own?",
    answer:
      "Our platform helps you save time and money while ensuring high-quality services and peace of mind. You can choose from a wide range of verified specialists.",
  },
];


export function ClientFAQ() {
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
