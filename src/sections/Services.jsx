import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { FileText, BarChart3, Bot, Share2, Search, Calendar } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Content Strategy & Creation',
      description: 'End-to-end content planning, editorial calendars, and high-performing copy across all formats.',
      skills: ['Editorial Calendars', 'Copywriting', 'Content Audits', 'Brand Voice'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Data-driven optimization using Google Analytics, Search Console, and SEO tools to boost organic reach.',
      skills: ['Keyword Research', 'On-page SEO', 'Performance Tracking', 'SERP Optimization'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Bot,
      title: 'AI Content Development',
      description: 'Leverage ChatGPT, Jasper, Grok, and more to scale content while maintaining quality and tone.',
      skills: ['AI Prompt Engineering', 'Content Scaling', 'Tone Consistency', 'Workflow Automation'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic posting calendars, engagement strategies, and platform-native content for maximum visibility.',
      skills: ['Content Calendars', 'Engagement Strategy', 'Platform Optimization', 'Trend Analysis'],
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Content Analytics & Reporting',
      description: 'Monitor performance, analyze metrics, and refine strategies based on data-driven insights.',
      skills: ['Performance Analysis', 'A/B Testing', 'Engagement Metrics', 'ROI Tracking'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Calendar,
      title: 'Campaign & Event Coverage',
      description: 'Coordinate on-ground events, live updates, and influencer activations to boost brand credibility.',
      skills: ['Event Coverage', 'Live Social Updates', 'Influencer Coordination', 'Real-time Content'],
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          What I Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Full-spectrum content services powered by AI and driven by results
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card tilt={true} className="h-full group cursor-pointer">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl mb-4 bg-gradient-to-br ${service.color} relative`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 text-lg mb-6">
          Looking for something specific?
        </p>
        <motion.a
          href="#contact"
          className="inline-block text-accent font-semibold text-lg hover:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's discuss your project →
        </motion.a>
      </motion.div>
    </Section>
  )
}

export default Services
