"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Home, Building, Palette, Wrench, CheckCircle } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Living Space",
      category: "Interior Design",
      description: "Complete home transformation with elegant finishes, custom aluminum work, and modern glass features.",
      icon: Home,
      image: "/IMG_0201.JPEG",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Luxury Villa Renovation",
      category: "Residential",
      description: "High-end residential project featuring premium steel railings and sophisticated glass installations.",
      icon: Building,
      image: "/IMG_0202.JPEG",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Contemporary Office",
      category: "Commercial",
      description: "Modern commercial space with custom aluminum facades and innovative interior decoration solutions.",
      icon: Palette,
      image: "/IMG_0203.JPEG",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Elegant Home Decor",
      category: "Interior Design",
      description: "Stunning home decoration project combining glass elements with modern aluminum finishing touches.",
      icon: Wrench,
      image: "/IMG_0205.JPEG",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Premium Finishing",
      category: "Luxury Design",
      description: "Exceptional craftsmanship in aluminum works, mirror installations, and complete interior transformation.",
      icon: Sparkles,
      image: "/project5.JPEG",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
              <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{
                  x: Math.random() * 1200,
                  y: Math.random() * 800,
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * 800],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-16 h-16 mx-auto text-yellow-300" />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">
                  Our Projects
                </span>
              </h1>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Transforming spaces with creativity, precision, and excellence
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Projects Grid with Beautiful Animations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover our portfolio of stunning transformations across residential, commercial, and luxury spaces
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden group cursor-pointer border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Image Container with Gradient Overlay */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <motion.div
                        className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.category}
                      </motion.div>

                      {/* Icon in Circle - Bottom Right */}
                      <motion.div
                        className={`absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-xl`}
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <project.icon className="h-7 w-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Decorative Bottom Border */}
                      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.color} rounded-full transition-all duration-500`} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section with Animations */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Our Achievements
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Numbers that speak to our commitment and excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Projects Completed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="relative inline-block mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-xl">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      500+
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-gray-800 text-lg font-semibold mb-1">Projects</h3>
                <p className="text-gray-600 text-sm">Successfully Completed</p>
              </motion.div>

              {/* Years of Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="relative inline-block mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-xl">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      5+
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-gray-800 text-lg font-semibold mb-1">Years</h3>
                <p className="text-gray-600 text-sm">Of Experience</p>
              </motion.div>

              {/* Happy Clients */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <motion.div
                  className="relative inline-block mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-xl">
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      250+
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-gray-800 text-lg font-semibold mb-1">Clients</h3>
                <p className="text-gray-600 text-sm">Satisfied & Happy</p>
              </motion.div>

              {/* Quality Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <motion.div
                  className="relative inline-block mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-xl">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-600" />
                    </motion.div>
                  </div>
                </motion.div>
                <h3 className="text-gray-800 text-lg font-semibold mb-1">100%</h3>
                <p className="text-gray-600 text-sm">Quality Guaranteed</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay"
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay"
              animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Let's transform your space into something extraordinary. Get in touch with us today!
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-purple-600 font-bold px-10 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Contact Us Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
