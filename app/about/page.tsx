import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-96 flex items-center justify-center overflow-hidden pt-16 sm:pt-24 lg:pt-28">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
            }}
          >
            <img
              src="/professional-security-team-modern-building.jpg"
              alt="About Us"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
              Leaders in security barrier solutions
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-balance">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg px-4">
                We are a leading provider of security barrier systems and access control solutions. Our comprehensive
                services include securing entries, creating security barriers, and implementing advanced control systems
                for parking, entry, and perimeter security.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Delivering cutting-edge security solutions that protect what matters most.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Our Team</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Experienced professionals dedicated to excellence in security systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Quality First</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Certified company with commitment to highest quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Innovation</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Continuously evolving with the latest security technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance">
                  Our Values
                </h2>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1">Excellence</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We strive for excellence in every project, ensuring the highest quality standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1">Reliability</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Our systems are built to last, providing dependable security solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1">Customer Focus</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We adapt our delivery to match your specific requirements and workflow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1">Innovation</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Continuously advancing with cutting-edge security technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="/modern-security-control-room-monitoring-systems.jpg"
                  alt="Our Values"
                  className="rounded-lg sm:rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
