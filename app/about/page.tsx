"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white overflow-hidden">
        {/* Hero Section with Colorful Animations */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28 lg:pt-32 pb-16">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #7c3aed 100%)",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </motion.div>
          </div>

          {/* Colorful Animated Floating Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full blur-2xl opacity-40"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-40"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-3xl opacity-30"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-32 w-36 h-36 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full blur-3xl opacity-40"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-2xl opacity-30"
            animate={{
              y: [0, -25, 0],
              x: [0, 25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-600 rounded-full blur-xl opacity-35"
            animate={{
              y: [0, 35, 0],
              x: [0, -25, 0],
              scale: [1, 1.5, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Small Colorful Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${
                  [
                    "#f59e0b",
                    "#ec4899",
                    "#8b5cf6",
                    "#06b6d4",
                    "#10b981",
                    "#f43f5e",
                  ][i % 6]
                }, ${
                  [
                    "#fbbf24",
                    "#f472b6",
                    "#a78bfa",
                    "#22d3ee",
                    "#34d399",
                    "#fb7185",
                  ][i % 6]
                })`,
                top: `${15 + i * 10}%`,
                left: `${10 + i * 12}%`,
                opacity: 0.6,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-sm sm:text-base md:text-lg font-semibold tracking-wider mb-3 sm:mb-4 uppercase bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Welcome to
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl"
                style={{
                  textShadow:
                    "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(59, 130, 246, 0.5), 0 0 90px rgba(168, 85, 247, 0.5)",
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                UTC Decoration
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.95 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Transforming spaces with excellence in aluminum, glass, steel,
                and complete home decoration solutions
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                UTC's mission is to conduct a thorough study of its clients'
                needs through a careful and professional assessment to provide
                the best services related to all aspects of home decor.
              </p>
            </motion.div>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotate: 2 }}
                className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                  animate={{
                    rotate: [3, -3, 3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                </motion.div>
                <h3 className="relative text-2xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  We ensure the highest standards in every project with
                  certified quality materials and expert craftsmanship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02, rotate: -2 }}
                className="relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-purple-100 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
                  animate={{
                    rotate: [-3, 3, -3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                </motion.div>
                <h3 className="relative text-2xl font-bold text-gray-900 mb-4">
                  Timely Delivery
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  We respect your time and deliver all projects on schedule
                  without compromising on quality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02, rotate: 2 }}
                className="relative bg-gradient-to-br from-cyan-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-cyan-100 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6"
                  animate={{
                    rotate: [3, -3, 3],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </motion.svg>
                </motion.div>
                <h3 className="relative text-2xl font-bold text-gray-900 mb-4">
                  Expert Team
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  Our skilled professionals bring years of experience and
                  dedication to every project.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">Why Choose</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UTC Decoration
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Excellence in every detail, quality in every project
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-white rounded-3xl p-6 m-1 hover:m-0 transition-all">
                  <motion.div
                    className="text-5xl font-bold text-blue-600 mb-2"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    5+
                  </motion.div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Years
                  </div>
                  <div className="text-gray-600">
                    of experience serving clients with dedication
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <div className="relative bg-white rounded-3xl p-6 m-1 hover:m-0 transition-all">
                  <motion.div
                    className="text-5xl font-bold text-purple-600 mb-2"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.3,
                    }}
                  >
                    500+
                  </motion.div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Projects
                  </div>
                  <div className="text-gray-600">
                    completed with excellence and precision
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <div className="relative bg-white rounded-3xl p-6 m-1 hover:m-0 transition-all">
                  <motion.div
                    className="text-5xl font-bold text-orange-600 mb-2"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.6,
                    }}
                  >
                    250+
                  </motion.div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Clients
                  </div>
                  <div className="text-gray-600">
                    happy and satisfied with our service
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
                <div className="relative bg-white rounded-3xl p-6 m-1 hover:m-0 transition-all">
                  <motion.div
                    className="text-5xl font-bold text-green-600 mb-2"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.9,
                    }}
                  >
                    100%
                  </motion.div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Quality
                  </div>
                  <div className="text-gray-600">
                    guaranteed in every project we deliver
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Contact us today for a free consultation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all"
              >
                Contact Us
              </a>
              <a
                href="tel:+96594701850"
                className="bg-transparent border-2 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Call: +965 94701850
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
