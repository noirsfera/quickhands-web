import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { HowItWorks } from "@/components/HowItWorks"
import Marketplace from "@/components/MarketPlace"
import { Footer } from "@/components/Footer"
import { Features } from "@/components/Features"
import { ClientFAQ } from "@/components/ClientFAQ"


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Marketplace />
      <ClientFAQ />
      <Footer />
    </>
  )
}
