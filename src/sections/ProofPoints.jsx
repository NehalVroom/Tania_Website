import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Award, BookOpen, Users, Zap } from 'lucide-react'

const ProofPoints = () => {
  const achievements = [
    {
      icon: Zap,
      metric: '30-40%',
      label: 'Organic Impression Growth',
      description: 'Achieved through SEO optimization and AI-powered content strategies',
    },
    {
      icon: BookOpen,
      metric: '1.56K+',
      label: 'Article Views',
      description: 'Generated through strategic content distribution and social amplification',
    },
    {
      icon: Users,
      metric: '50%',
      label: 'Faster Turnaround',
      description: 'Reduced content production time while maintaining quality standards',
    },
    {
      icon: Award,
      metric: '2.5+',
      label: 'Years Experience',
      description: 'Leading content operations across B2B, EdTech, and Blockchain sectors',
    },
  ]

  const certifications = [
    'Content Strategist - Coursera',
    'Meta Social Media Marketing Professional',
    'AI for Marketing - HubSpot Academy',
    'Fundamentals of Marketing - upGrad',
    'Diploma in Journalism - Alison',
    'British Council English Proficiency',
  ]

  const industries = [
    'B2B SaaS',
    'EdTech',
    'Blockchain',
    'Content Agencies',
    'Digital Marketing',
    'Social Media',
  ]

  return (
    <Section id="proof" className="bg-white">
      {/* Achievements Grid */}
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900"
        >
          Proven Track Record
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-accent transition-colors h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                >
                  {/* Icon */}
                  <motion.div
                    className="inline-flex bg-accent/10 p-4 rounded-xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-accent" size={32} />
                  </motion.div>

                  {/* Metric */}
                  <motion.h3
                    className="font-display text-5xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {achievement.metric}
                  </motion.h3>

                  {/* Label */}
                  <p className="font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Certifications & Industries */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Award className="text-accent" size={28} />
            </div>
            <h3 className="font-display text-3xl font-bold text-gray-900">
              Certifications
            </h3>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors group"
              >
                <span className="text-accent mt-1 group-hover:scale-125 transition-transform">
                  ✓
                </span>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Users className="text-accent" size={28} />
            </div>
            <h3 className="font-display text-3xl font-bold text-gray-900">
              Industries
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            Experienced working across diverse sectors, from technical blockchain content
            to B2B SaaS and educational platforms.
          </p>

          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="px-6 py-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-full font-medium shadow-lg cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-gray-50 rounded-3xl p-12"
      >
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Ready to elevate your content strategy?
        </h3>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how AI-powered content can drive real results for your brand
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </Section>
  )
}

export default ProofPoints
