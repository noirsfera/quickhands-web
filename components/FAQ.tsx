"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { Button } from "./ui/button"
import { OnboardingModal } from "./OnboardingModal"

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
]

export function FaqSection() {
  return (
    <section className="py-24 border-t border-neutral-700 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-8">
            <h2 className="font-sans text-4xl font-bold tracking-tight mb-4 text-balance text-white">
              Frequently Asked Questions
            </h2>

            <p className="font-sans text-lg text-neutral-300 leading-relaxed mb-8 text-pretty">
              Everything you need to know about working on Quickhands. Can't find what you're looking for? Contact our
              support team.
            </p>

            <div className="relative w-full max-w-md mt-12 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-green-600/10 to-transparent rounded-3xl blur-3xl opacity-60" />
              <div className="relative bg-gradient-to-br from-neutral-800/80 to-neutral-800/60 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                <Image
                  src="/illustrations/undraw_questions.svg"
                  alt="Frequently asked questions"
                  width={400}
                  height={320}
                  className="relative drop-shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-neutral-700 bg-neutral-800/50 rounded-lg px-6 data-[state=open]:bg-neutral-800/80 data-[state=open]:border-green-600/40 transition-all shadow-md hover:shadow-lg hover:border-green-600/30"
                >
                  <AccordionTrigger className="font-sans text-left text-base font-semibold text-white hover:text-green-500 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-neutral-300 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <OnboardingModal>
            <Button
              size="lg"
              className="h-14 px-8 font-sans font-medium bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              Sign Up
            </Button>
          </OnboardingModal>
        </div>
      </div>
    </section>
  )
}
