import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../components/Section'
import { Mail, MapPin, Send, Linkedin, FileText, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Encode form data for Netlify
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      })

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', budget: '', message: '' })
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'taniasay12345sangat@gmail.com',
      link: 'mailto:taniasay12345sangat@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: '#',
      color: 'hover:bg-blue-600',
    },
    {
      icon: FileText,
      label: 'Behance',
      link: '#',
      color: 'hover:bg-purple-600',
    },
    {
      icon: ExternalLink,
      label: 'Blog',
      link: '#',
      color: 'hover:bg-gray-600',
    },
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Not sure yet',
  ]

  return (
    <Section id="contact" className="bg-warm-beige/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-6xl font-bold mb-6 text-charcoal"
          >
            Let's Talk{' '}
            <span className="text-accent">Strategy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-charcoal/60 max-w-3xl mx-auto font-accent"
          >
            Have a project in mind? Looking for a content partner?
            Let's discuss how we can work together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-warm-taupe/20"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-charcoal font-medium mb-2 font-accent">
                  Your Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.005 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-warm-taupe/30 rounded-2xl focus:border-accent focus:outline-none transition-all duration-700 bg-warm-cream/50"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-charcoal font-medium mb-2 font-accent">
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.005 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-warm-taupe/30 rounded-2xl focus:border-accent focus:outline-none transition-all duration-700 bg-warm-cream/50"
                  placeholder="john@example.com"
                />
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label htmlFor="budget" className="block text-charcoal font-medium mb-2 font-accent">
                  Project Budget
                </label>
                <motion.select
                  whileFocus={{ scale: 1.005 }}
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-warm-taupe/30 rounded-2xl focus:border-accent focus:outline-none transition-all duration-700 bg-warm-cream/50"
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>
                      {range}
                    </option>
                  ))}
                </motion.select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-charcoal font-medium mb-2 font-accent">
                  Your Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.005 }}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-warm-taupe/30 rounded-2xl focus:border-accent focus:outline-none transition-all duration-700 resize-none bg-warm-cream/50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-4 rounded-full font-medium hover:bg-accent-dark transition-all duration-700 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg font-accent"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center"
                >
                  Oops! Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 text-charcoal">
                Reach Out
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const content = (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.8 }}
                      className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-warm-taupe/20 hover:border-accent/40 transition-all duration-700 group"
                      whileHover={{ x: 8 }}
                    >
                      <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent/20 transition-colors duration-700">
                        <Icon className="text-accent" size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-charcoal/50 text-sm mb-1 font-accent">{info.label}</p>
                        <p className="text-charcoal font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  )

                  return info.link ? (
                    <a key={index} href={info.link}>
                      {content}
                    </a>
                  ) : (
                    content
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 text-charcoal">
                Let's Connect
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-charcoal text-warm-cream p-4 rounded-xl hover:bg-accent transition-all duration-700 shadow-lg"
                      aria-label={social.label}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-br from-accent to-accent-dark text-white p-8 rounded-3xl shadow-lg"
            >
              <h4 className="font-display text-2xl font-bold mb-4">
                Working Hours
              </h4>
              <p className="text-white/90 mb-2 font-accent">
                Monday - Friday: 9:00 AM - 6:00 PM IST
              </p>
              <p className="text-white/80 text-sm font-accent">
                I typically respond within 24 hours during business days
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
