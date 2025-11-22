import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:taniasay12345sangat@gmail.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'Behance' },
    { icon: FileText, href: '#', label: 'Blog' },
  ]

  return (
    <footer className="bg-charcoal text-warm-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl font-bold mb-2 text-warm-cream"
            >
              Tania
            </motion.h3>
            <p className="text-warm-cream/60 text-sm font-accent">
              © 2025 · Content with character, strategy with soul
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-warm-cream/60 hover:text-accent transition-all duration-700 bg-warm-cream/5 p-3 rounded-xl hover:bg-accent/10"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-10 pt-8 border-t border-warm-cream/10 text-center"
        >
          <p className="text-warm-cream/50 text-sm font-accent">
            Content & Engagement Manager • Strategic Storytelling • New Delhi, India
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
