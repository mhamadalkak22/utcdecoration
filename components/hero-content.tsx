'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
      <motion.p
        className="text-xs sm:text-sm md:text-base uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 opacity-90 font-semibold"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        OPTIMIZE SECURITY SYSTEMS
      </motion.p>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-balance leading-tight px-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        Creating a better
        <br />
        <span className="text-white drop-shadow-lg">Tech solutions</span>
      </motion.h1>
      <Link href="/contact">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Meet With US
          </Button>
        </motion.div>
      </Link>
    </div>
  )
}

