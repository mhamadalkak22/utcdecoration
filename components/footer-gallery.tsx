'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getFooterImages } from '@/lib/services/media'

export function FooterGallery() {
  const images = getFooterImages()

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {images.map((src, i) => (
        <motion.figure
          key={src}
          className="group relative rounded-lg overflow-hidden border border-white/15 bg-white/5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.06 * i }}
        >
          <div className="relative w-full aspect-[4/3]">
            <Image src={src} alt="Footer visual" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        </motion.figure>
      ))}
    </div>
  )
}

