import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyles = 'px-8 py-4 rounded-full font-accent font-medium transition-all duration-700 relative overflow-hidden group'

  const variants = {
    primary: 'bg-accent text-warm-cream hover:bg-accent-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-cream',
    accent: 'bg-charcoal text-warm-cream hover:bg-accent',
  }

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-warm-beige/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
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
