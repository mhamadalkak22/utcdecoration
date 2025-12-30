'use client'

import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// Hero slider with unique text per image
export function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)

  // Each slide has its own image and text
  const slides = [
    {
      img: '/hero1.jpeg',
      text: 'Designing everything related to parking areas, including canopies.'
    },
    {
      img: '/hero2.jpeg',
      text: 'Supplying everything related to glass'
    },
    {
      img: '/hero3.jpeg',
      text: 'Preference for all types of mirrors'
    },
    {
      img: '/hero4.jpeg',
      text: 'Steel and iron railings, all designs, all colors'
    },
  ]

  React.useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(id)
  }, [api])

  // Track selected index for custom dots and text
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(slides.length)

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    onSelect()
    return () => {
      api?.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="absolute inset-0 z-0">
      <Carousel className="h-full w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full">
          {slides.map((slide, idx) => (
            <CarouselItem key={slide.img} className="h-full">
              <div className="relative h-full w-full">
                {/* Black and White Image with grayscale filter */}
                <Image
                  src={slide.img}
                  alt={slide.text}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  quality={95}
                  className="object-cover object-center grayscale"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Text overlay that changes with each slide */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-4xl mx-auto"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-2xl leading-tight px-4">
                  {slides[current].text}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${
                current === i ? 'bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.3)]' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}
