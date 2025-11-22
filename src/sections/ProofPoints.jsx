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
    <Section id="proof" className="bg-warm-cream">
      {/* Achievements Grid */}
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-charcoal"
        >
          The Numbers Speak
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-warm-taupe/20 hover:border-accent/30 transition-all duration-700 h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 115, 94, 0.1)' }}
                >
                  {/* Icon */}
                  <motion.div
                    className="inline-flex bg-accent/10 p-4 rounded-xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Icon className="text-accent" size={32} strokeWidth={1.5} />
                  </motion.div>

                  {/* Metric */}
                  <motion.h3
                    className="font-display text-5xl font-bold text-charcoal mb-2"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.05, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.8 }}
                  >
                    {achievement.metric}
                  </motion.h3>

                  {/* Label */}
                  <p className="font-semibold text-charcoal mb-2 font-accent">
                    {achievement.label}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-charcoal/60 leading-relaxed">
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
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Award className="text-accent" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl font-bold text-charcoal">
              Credentials
            </h3>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="flex items-start gap-3 p-4 bg-warm-beige/30 rounded-2xl hover:bg-accent/5 transition-all duration-700 group"
              >
                <span className="text-accent mt-1 group-hover:scale-125 transition-transform">
                  ✓
                </span>
                <span className="text-charcoal/70 group-hover:text-charcoal transition-colors">
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
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Users className="text-accent" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl font-bold text-charcoal">
              Industries
            </h3>
          </div>

          <p className="text-charcoal/60 mb-6 leading-relaxed">
            Experienced across diverse sectors—from technical blockchain content
            to B2B SaaS and educational platforms.
          </p>

          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-gradient-to-br from-charcoal to-charcoal/90 text-warm-cream rounded-full font-medium shadow-lg cursor-default font-accent"
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
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 text-center bg-warm-beige/40 rounded-3xl p-12 border border-warm-taupe/20"
      >
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-charcoal">
          Let's create something great together
        </h3>
        <p className="text-charcoal/60 text-lg mb-8 max-w-2xl mx-auto font-accent">
          Whether you need strategic content, SEO optimization, or a complete overhaul—I'm here to help.
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-all duration-700 shadow-lg font-accent"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </Section>
  )
}

export default ProofPoints
