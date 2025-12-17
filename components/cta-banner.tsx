'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-balance px-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Ready to optimize your security?
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Contact us today to discuss your security and barrier system requirements.
      </motion.p>
      <Link href="/contact">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}>
          <Button size="lg" variant="secondary" className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl shadow-2xl hover:scale-105 transition-all duration-300">
            Get Started
          </Button>
        </motion.div>
      </Link>
    </div>
  )
}

