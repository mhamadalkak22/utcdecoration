import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ShoppingCart, Factory, Home } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "National Assembly Security",
      category: "Government",
      description: "Complete security barrier system including gate barriers, luxor bollards, and guidance systems.",
      icon: Building2,
      image: "/government-building-security-gate-system-national-.jpg",
    },
    {
      title: "Shopping Mall Parking",
      category: "Commercial",
      description: "Advanced parking management solution with automated barriers and payment integration.",
      icon: ShoppingCart,
      image: "/shopping-mall-parking-barrier-automated-system.jpg",
    },
    {
      title: "Industrial Complex",
      category: "Industrial",
      description: "High-security road blockers and bollards for industrial facility perimeter protection.",
      icon: Factory,
      image: "/industrial-facility-security-bollards-road-blocker.jpg",
    },
    {
      title: "Residential Community",
      category: "Residential",
      description: "Integrated access control and barrier systems for gated community management.",
      icon: Home,
      image: "/residential-gated-community-security-barrier-gate.jpg",
    },
    {
      title: "Corporate Office",
      category: "Corporate",
      description: "EV charging stations with integrated parking management and access control.",
      icon: Building2,
      image: "/corporate-office-ev-charging-station-parking-manag.jpg",
    },
    {
      title: "Airport Terminal",
      category: "Transportation",
      description: "Heavy-duty road blockers and security barriers for critical infrastructure protection.",
      icon: Building2,
      image: "/airport-terminal-security-road-blockers-barriers.jpg",
    },
  ]

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
              src="/completed-security-projects-portfolio-showcase.jpg"
              alt="Our Projects"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
              Our Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
              Excellence delivered across diverse sectors
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
                Featured Projects
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
                Explore our portfolio of successful security barrier implementations across various industries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <project.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-balance">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                  500+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="relative inline-flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md leading-none">
                    5
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-base sm:text-xl md:text-2xl font-semibold text-blue-700 leading-tight">Years</p>
                    <p className="text-sm sm:text-lg md:text-xl text-slate-600 leading-tight">of experience</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                  250+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 sm:mb-3">
                  50+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
