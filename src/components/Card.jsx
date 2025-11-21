import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, tilt = false }) => {
  return (
    <motion.div
      className={`bg-white border border-gray-200 rounded-2xl p-8 ${className}`}
      whileHover={hover ? {
        y: -8,
        rotate: tilt ? -2 : 0,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default Card
