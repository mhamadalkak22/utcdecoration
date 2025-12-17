'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Wrench, HardHat, Home, Blocks } from 'lucide-react'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5 } }),
}

export function ServicesGrid() {
  const items = [
    { icon: Wrench, title: 'Aluminum Services', desc: 'Fabrication, installation, and finishing of aluminum works.', bgPattern: 'diagonal' },
    { icon: HardHat, title: 'Steel Services', desc: 'Structural steel fabrication and precise on-site installations.', bgPattern: 'dots' },
    { icon: Home, title: 'Decoration Services', desc: 'Interior and exterior decorative solutions tailored to your space.', bgPattern: 'grid' },
    { icon: Blocks, title: 'Glass Services', desc: 'Glass partitions, facades, and custom glazing projects.', bgPattern: 'waves' },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {items.map((it, i) => {
          const IconComponent = it.icon
          return (
            <motion.div key={it.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={itemVariants} custom={i}>
              <Card className="group overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-square flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-purple-700 transition-all duration-500">
                    {/* Large Icon */}
                    <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <IconComponent className="w-16 h-16 sm:w-20 sm:h-20 text-gray-800 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Service badge */}
                    <div className="absolute top-3 right-3 bg-black text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide group-hover:bg-white group-hover:text-purple-600 transition-all duration-500">
                      {it.title.replace(' Services', '')}
                    </div>
                    
                    {/* Text content */}
                    <div className="text-center">
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-black group-hover:text-white transition-colors duration-500">{it.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">{it.desc}</p>
                    </div>
                    
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      {it.bgPattern === 'diagonal' && (
                        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 10px)' }} />
                      )}
                      {it.bgPattern === 'dots' && (
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
                      )}
                      {it.bgPattern === 'grid' && (
                        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      )}
                      {it.bgPattern === 'waves' && (
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 20 Q 10 10, 20 20 T 40 20" stroke="currentColor" fill="none" strokeWidth="2"/></pattern></defs><rect width="100%" height="100%" fill="url(#waves)"/></svg>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
