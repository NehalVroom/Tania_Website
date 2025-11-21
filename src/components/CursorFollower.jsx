import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Trailing circle */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />
    </>
  )
}

export default CursorFollower
