'use client'

import { motion } from 'framer-motion'
import { Wrench, Hammer, Ruler, Sparkles, Square, Box, Layers } from 'lucide-react'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Light gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" />

      {/* Glass/Mirror panels moving - representing Glass Services */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`glass-${i}`}
          className="absolute"
          style={{
            top: `${15 + i * 22}%`,
          }}
          initial={{ x: '-150px', opacity: 0 }}
          animate={{ 
            x: ['-150px', 'calc(100vw + 150px)'],
            opacity: [0, 0.4, 0.4, 0],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 22 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5,
          }}
        >
          {/* Glass panel effect with shine */}
          <div className="relative w-24 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border-2 border-cyan-300/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
            <div className="absolute top-2 left-2 w-4 h-4 bg-white/60 rounded-full blur-sm" />
          </div>
        </motion.div>
      ))}

      {/* Steel/Aluminum beams - representing Steel & Aluminum Services */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`steel-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 18}%`,
          }}
          initial={{ x: 'calc(100vw + 100px)' }}
          animate={{ 
            x: ['calc(100vw + 100px)', '-100px'],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4,
          }}
        >
          {/* Steel beam representation */}
          <div className="relative">
            <div className="w-32 h-3 bg-gradient-to-r from-gray-400/30 via-gray-300/40 to-gray-400/30 rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
            <div className="absolute top-0 left-1/4 w-1 h-3 bg-gray-500/40" />
            <div className="absolute top-0 right-1/4 w-1 h-3 bg-gray-500/40" />
          </div>
        </motion.div>
      ))}

      {/* Decorative ornaments - representing Decoration Services */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`decoration-${i}`}
          className="absolute"
          style={{
            left: `${5 + i * 15}%`,
          }}
          initial={{ y: '-100px', opacity: 0 }}
          animate={{ 
            y: ['-100px', 'calc(100vh + 100px)'],
            opacity: [0, 0.5, 0.5, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        >
          {/* Decorative pattern */}
          <Sparkles className="w-10 h-10 text-purple-400/40" strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Mirror reflections - diagonal moving */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`mirror-${i}`}
          className="absolute"
          style={{
            top: `${25 + i * 25}%`,
          }}
          initial={{ x: '-200px' }}
          animate={{ 
            x: ['-200px', 'calc(100vw + 200px)'],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 8,
          }}
        >
          {/* Mirror with reflection effect */}
          <div className="relative w-20 h-28 bg-gradient-to-br from-blue-200/30 to-purple-200/30 border-2 border-blue-300/40 transform skew-y-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
            <div className="absolute top-1/4 right-2 w-8 h-8 bg-white/40 rounded-full blur-md" />
          </div>
        </motion.div>
      ))}

      {/* Construction tools floating - representing our work */}
      {[...Array(6)].map((_, i) => {
        const tools = [Wrench, Hammer, Ruler, Box, Layers, Square]
        const Tool = tools[i % tools.length]
        return (
          <motion.div
            key={`tool-${i}`}
            className="absolute"
            style={{
              top: `${12 + i * 16}%`,
            }}
            initial={{ x: '-80px', opacity: 0 }}
            animate={{ 
              x: ['-80px', 'calc(100vw + 80px)'],
              opacity: [0, 0.35, 0.35, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          >
            <Tool className="w-12 h-12 text-blue-500/30" strokeWidth={1.5} />
          </motion.div>
        )
      })}

      {/* Iron railings pattern - representing Steel & Iron Railings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`railing-${i}`}
          className="absolute"
          style={{
            top: `${28 + i * 20}%`,
          }}
          initial={{ x: 'calc(100vw + 150px)' }}
          animate={{ 
            x: ['calc(100vw + 150px)', '-150px'],
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5,
          }}
        >
          {/* Railing design */}
          <div className="flex items-end gap-3">
            <div className="w-2 h-16 bg-gradient-to-b from-gray-400/40 to-gray-500/40 rounded-sm" />
            <div className="w-2 h-20 bg-gradient-to-b from-gray-400/40 to-gray-500/40 rounded-sm" />
            <div className="w-2 h-16 bg-gradient-to-b from-gray-400/40 to-gray-500/40 rounded-sm" />
            <div className="w-2 h-24 bg-gradient-to-b from-gray-400/40 to-gray-500/40 rounded-sm" />
            <div className="w-2 h-16 bg-gradient-to-b from-gray-400/40 to-gray-500/40 rounded-sm" />
          </div>
        </motion.div>
      ))}

      {/* Aluminum window frames moving */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`frame-${i}`}
          className="absolute"
          style={{
            top: `${10 + i * 23}%`,
          }}
          initial={{ x: '-120px' }}
          animate={{ 
            x: ['-120px', 'calc(100vw + 120px)'],
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{
            duration: 24 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 6,
          }}
        >
          {/* Aluminum window frame */}
          <div className="relative w-20 h-24 border-4 border-gray-400/40 bg-gradient-to-br from-gray-200/20 to-gray-300/20">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400/40" />
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-400/40" />
          </div>
        </motion.div>
      ))}

      {/* Parking canopy structures falling - representing Parking Services */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`canopy-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 17}%`,
          }}
          initial={{ y: '-120px', opacity: 0 }}
          animate={{ 
            y: ['-120px', 'calc(100vh + 120px)'],
            opacity: [0, 0.35, 0.35, 0],
          }}
          transition={{
            duration: 22 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4,
          }}
        >
          {/* Canopy structure */}
          <div className="relative">
            <div className="w-16 h-2 bg-gradient-to-r from-blue-400/30 to-blue-500/30 rounded-full" />
            <div className="absolute -top-4 left-2 w-1 h-4 bg-gray-400/30" />
            <div className="absolute -top-4 right-2 w-1 h-4 bg-gray-400/30" />
            <div className="mt-1 w-16 h-10 bg-gradient-to-b from-blue-300/20 to-transparent border-x-2 border-blue-400/30" />
          </div>
        </motion.div>
      ))}

      {/* Bolts and screws (construction hardware) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`bolt-${i}`}
          className="absolute"
          initial={{ 
            x: '-30px',
            y: `${(i * 10) % 100}%`
          }}
          animate={{ 
            x: ['-30px', 'calc(100vw + 30px)'],
            rotate: [0, 720],
          }}
          transition={{
            duration: 16 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        >
          {/* Bolt/screw representation */}
          <div className="relative">
            <div className="w-3 h-3 rounded-full border-2 border-gray-500/30 bg-gray-400/20">
              <div className="absolute inset-1 flex items-center justify-center">
                <div className="w-1.5 h-0.5 bg-gray-500/40" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Blueprint-style grid panels moving */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`blueprint-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 30}%`,
          }}
          animate={{ 
            x: ['-200px', 'calc(100vw + 200px)'],
            opacity: [0, 0.15, 0.15, 0]
          }}
          transition={{
            duration: 28 + i * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 10,
          }}
        >
          {/* Blueprint panel */}
          <div 
            className="w-40 h-32 bg-blue-500/5 border border-blue-400/20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          >
            <div className="m-2 border-2 border-blue-400/30 h-12 w-12" />
            <div className="m-2 border-2 border-blue-400/30 h-4 w-24" />
          </div>
        </motion.div>
      ))}

      {/* Animated construction grid moving upward */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{ 
          backgroundPosition: ['0px 0px', '0px -100px']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #0066ff 1px, transparent 1px),
            linear-gradient(to bottom, #0066ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Moving wave pattern */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(59, 130, 246, 0.5) 50px,
              rgba(59, 130, 246, 0.5) 52px,
              transparent 52px,
              transparent 100px
            )
          `,
        }}
      />

      {/* Building/parking structure silhouettes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`building-${i}`}
          className="absolute"
          style={{
            top: `${30 + i * 18}%`,
          }}
          animate={{
            x: ['-150px', 'calc(100vw + 150px)'],
            opacity: [0, 0.25, 0.25, 0],
          }}
          transition={{
            duration: 30 + i * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 7,
          }}
        >
          {/* Simple building structure */}
          <div className="flex items-end gap-1">
            <div className="w-8 h-16 bg-gradient-to-t from-blue-400/20 to-blue-300/10 border border-blue-400/20" />
            <div className="w-10 h-20 bg-gradient-to-t from-purple-400/20 to-purple-300/10 border border-purple-400/20" />
            <div className="w-6 h-12 bg-gradient-to-t from-cyan-400/20 to-cyan-300/10 border border-cyan-400/20" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

