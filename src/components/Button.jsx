import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group'

  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    accent: 'bg-accent text-white hover:bg-accent-dark',
  }

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}

export default Button
