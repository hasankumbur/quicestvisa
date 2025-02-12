import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PricingSection from '@/components/sections/PricingSection'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/sections/Footer'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection id="services" />
      <TestimonialsSection />
      <PricingSection />
      <CallToAction />
      <Footer />
    </main>
  )
} 