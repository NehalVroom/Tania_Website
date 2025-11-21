import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Zap, TrendingUp, Award } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Zap,
      value: '2.5+',
      label: 'Years Experience',
      description: 'Leading content operations',
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Organic Growth',
      description: 'Average impression increase',
    },
    {
      icon: Award,
      value: '1.56K+',
      label: 'Article Views',
      description: 'Achieved through SEO',
    },
  ]

  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            I turn complex ideas into{' '}
            <span className="text-accent">content that performs</span>
          </h2>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Most content managers just push publish. I architect content ecosystems
              that drive real engagement and measurable growth.
            </p>

            <p>
              With a background in English Literature and a deep love for storytelling,
              I blend human creativity with AI efficiency to create content that resonates
              across digital, social, and conversational platforms.
            </p>

            <p>
              From managing editorial calendars to reviewing AI-generated copy and
              optimizing for SEO, I ensure every piece of content serves a purpose
              and drives results.
            </p>
          </div>

          {/* Education highlight */}
          <motion.div
            className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Education</p>
            <p className="text-gray-900 font-semibold">MA English Literature (Pursuing)</p>
            <p className="text-gray-600">Jamia Islamia University, DU</p>
            <p className="text-gray-600 text-sm mt-2">
              + Meta Social Media Marketing Certificate
            </p>
          </motion.div>
        </motion.div>

        {/* Right side - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.03, rotate: -1 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="bg-accent/10 p-3 rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-accent" size={28} />
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      className="font-display text-4xl font-bold text-gray-900 mb-1"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-900 font-semibold mb-1">{stat.label}</p>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}

export default About
