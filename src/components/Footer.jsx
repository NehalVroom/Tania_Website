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
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Tania. Built with React + AI tools
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Content & Engagement Manager | AI-Powered Strategy | New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
