import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import Button from '../components/Button'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullName = 'Tania'

  const descriptors = [
    'Content Strategist',
    'AI Content Expert',
    'SEO Specialist',
    'Engagement Manager',
  ]

  const [currentDescriptor, setCurrentDescriptor] = useState(0)

  // Typewriter effect for name
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  // Rotate descriptors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptor((prev) => (prev + 1) % descriptors.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Floating shapes
  const shapes = [
    { size: 80, left: '10%', top: '20%', delay: 0 },
    { size: 60, left: '85%', top: '15%', delay: 0.5 },
    { size: 100, left: '75%', top: '70%', delay: 1 },
    { size: 70, left: '15%', top: '80%', delay: 1.5 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white px-6">
      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute bg-accent/10 rounded-full blur-xl animate-morph"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Sparkle icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="text-accent" size={40} />
          </motion.div>
        </motion.div>

        {/* Name with typewriter effect */}
        <motion.h1
          className="font-display text-7xl md:text-9xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-20 md:h-32 bg-accent ml-2 align-middle"
          />
        </motion.h1>

        {/* Rotating tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
            <span className="text-gray-900">Content & Engagement Manager</span>
            <br />
            <motion.span
              key={currentDescriptor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold inline-block"
            >
              {descriptors[currentDescriptor]}
            </motion.span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance"
        >
          I speak fluent AI and turn complex ideas into content that actually performs.
          2+ years of driving organic reach through SEO, analytics, and AI-powered strategy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" href="#work">
            See My Work
          </Button>
          <Button variant="outline" href="#contact">
            Let's Talk
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-gray-400"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
