import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Building, ParkingCircle, Zap } from "lucide-react"
import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesGrid } from "@/components/services-grid"
import WhoWeAre from "@/components/who-we-are"
import { BrandsSlider } from "@/components/brands-slider"

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section with responsive background slider */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-24 lg:pt-28" data-aos="fade-in">
          <HeroSlider />
        </section>

        {/* Who We Are Section — cloned to match screenshot */}
        <WhoWeAre />

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 uppercase tracking-widest drop-shadow-sm">
                OUR SERVICES
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance px-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                We offer you all services
              </h2>
            </div>

            <ServicesGrid />
          </div>
        </section>

        {/* We Represent Section - Scrolling Brands */}
        <BrandsSlider />
      </main>

      <Footer />
    </>
  )
}
