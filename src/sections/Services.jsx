import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { Pen, LineChart, Sparkles, Share2, Search, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Pen,
      title: 'Content Strategy',
      tagline: 'Stories with structure',
      description: 'From editorial calendars to brand voice development, I build content ecosystems that actually work.',
      skills: ['Editorial Planning', 'Copywriting', 'Content Audits', 'Brand Voice'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      tagline: 'Found, not hidden',
      description: 'Strategic keyword research and on-page optimization that gets your content seen by the right people.',
      skills: ['Keyword Research', 'On-page SEO', 'Performance Tracking', 'SERP Strategy'],
    },
    {
      icon: Sparkles,
      title: 'Smart Content',
      tagline: 'Efficiency meets quality',
      description: 'Using modern tools to scale content production while maintaining authenticity and brand consistency.',
      skills: ['Content Scaling', 'Tone Consistency', 'Workflow Optimization', 'Quality Control'],
    },
    {
      icon: Share2,
      title: 'Social Media',
      tagline: 'Platform-native genius',
      description: 'Strategic posting calendars and engagement tactics tailored to each platform\'s unique language.',
      skills: ['Content Calendars', 'Engagement Strategy', 'Platform Optimization', 'Trend Analysis'],
    },
    {
      icon: LineChart,
      title: 'Analytics & Insights',
      tagline: 'Measure what matters',
      description: 'Track performance, refine strategies, and prove ROI with data-driven insights and actionable reports.',
      skills: ['Performance Analysis', 'A/B Testing', 'Engagement Metrics', 'ROI Tracking'],
    },
    {
      icon: Users,
      title: 'Event Coverage',
      tagline: 'Real-time storytelling',
      description: 'On-ground coverage, live updates, and influencer coordination that amplifies your brand presence.',
      skills: ['Event Coverage', 'Live Updates', 'Influencer Coordination', 'Real-time Content'],
    },
  ]

  return (
    <Section id="services" className="bg-warm-cream">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-6xl font-bold mb-6 text-charcoal"
        >
          What I Bring to the Table
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-charcoal/60 max-w-3xl mx-auto font-accent"
        >
          Full-spectrum content services that blend strategy, creativity, and measurable results
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card tilt={true} className="h-full group cursor-pointer bg-white/80 backdrop-blur-sm">
                {/* Warm accent on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-warm-taupe/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700"
                />

                {/* Icon */}
                <motion.div
                  className="inline-flex p-3 rounded-xl mb-4 bg-accent/10 relative"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-accent" size={28} strokeWidth={1.5} />
                </motion.div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl font-bold mb-2 text-charcoal group-hover:text-accent transition-colors duration-700">
                  {service.title}
                </h3>
                <p className="text-sm font-accent italic text-accent/70 mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-charcoal/60 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="text-xs px-3 py-1.5 bg-warm-beige/50 text-charcoal/70 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-700"
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
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center mt-16"
      >
        <p className="text-charcoal/60 text-lg mb-6 font-accent">
          Not seeing what you need?
        </p>
        <motion.a
          href="#contact"
          className="inline-block text-accent font-semibold text-lg hover:text-accent-dark font-accent group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's craft a custom solution
          <motion.span
            className="inline-block ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </Section>
  )
}

export default Services
