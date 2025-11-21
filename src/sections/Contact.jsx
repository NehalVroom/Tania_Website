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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', budget: '', message: '' })
    }, 1500)
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
    <Section id="contact" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Let's Create Something{' '}
            <span className="text-accent">Amazing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have a project in mind? Looking for a content strategist?
            Let's discuss how I can help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                  Project Budget
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
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
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-4 rounded-lg font-medium hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
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
            </form>
          </motion.div>

          {/* Right side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">
                Contact Information
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
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-accent transition-colors group"
                      whileHover={{ x: 8 }}
                    >
                      <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{info.label}</p>
                        <p className="text-gray-900 font-medium">{info.value}</p>
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
              <h3 className="font-display text-2xl font-bold mb-6 text-gray-900">
                Connect With Me
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
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-gray-900 text-white p-4 rounded-xl ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
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
              className="bg-gradient-to-br from-accent to-accent-dark text-white p-8 rounded-2xl"
            >
              <h4 className="font-display text-2xl font-bold mb-4">
                Working Hours
              </h4>
              <p className="text-white/90 mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM IST
              </p>
              <p className="text-white/90 text-sm">
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
