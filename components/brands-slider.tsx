'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function BrandsSlider() {
  const logos = [
    '/werepresent.png',
    '/werepresent1.png',
    '/werepresent2.png',
    '/werepresent3.png',
    '/werepresent4.png',
    '/werepresent5.png',
    '/werepresent7.png',
    '/wrerepresent8.png',
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          WE REPRESENT
        </motion.h2>

        {/* Scrolling logos container */}
        <div className="relative">
          <div className="flex animate-scroll-left gap-12 sm:gap-16 md:gap-20">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 md:h-24 w-auto"
              >
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={200}
                  height={80}
                  className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 md:h-24 w-auto"
              >
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={200}
                  height={80}
                  className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}




