import { motion } from 'framer-motion'
import { Suspense } from 'react'
import Section from '../components/Section'
import About3D from '../components/About3D'
import { Coffee, Heart, Sparkles } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Coffee,
      value: '2.5+',
      label: 'Years Creating',
      description: 'Stories that drive results',
    },
    {
      icon: Heart,
      value: '40%',
      label: 'Growth Average',
      description: 'Organic reach increase',
    },
    {
      icon: Sparkles,
      value: '1.56K+',
      label: 'Engaged Readers',
      description: 'Through strategic SEO',
    },
  ]

  return (
    <Section id="about" className="bg-warm-beige/30">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Left side - Visual placeholder with warm geometric pattern */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 via-warm-cream/50 to-warm-taupe/20 rounded-3xl overflow-hidden relative">
            {/* 3D Background */}
            <Suspense fallback={null}>
              <About3D />
            </Suspense>

            {/* Subtle Indian-inspired pattern overlay */}
            <div
              className="absolute inset-0 opacity-5 z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4735E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="font-display text-6xl md:text-7xl text-charcoal/10 mb-4"
                >
                  "
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="font-accent text-lg text-charcoal/70 italic drop-shadow-sm"
                >
                  Content with character,
                  <br />
                  strategy with soul
                </motion.p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Right side - Story */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The story behind
            <br />
            <span className="text-accent">the storyteller</span>
          </motion.h2>

          <motion.div
            className="space-y-5 text-charcoal/70 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p>
              I don't just write content—I craft narratives that connect.
              With a foundation in English Literature and a passion for strategic storytelling,
              I bring both creativity and data-driven precision to every project.
            </p>

            <p>
              My approach? Think of me as a translator between your brand's vision and
              your audience's needs. Whether it's blockchain complexity or B2B LinkedIn
              strategy, I make the complex feel conversational.
            </p>

            <p>
              From managing editorial calendars to optimizing for SEO, I ensure every
              piece of content serves a purpose. Because good content doesn't just
              perform—it resonates.
            </p>
          </motion.div>

          {/* Stats - More elegant presentation */}
          <motion.div
            className="mt-10 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="text-accent mx-auto mb-3" size={24} strokeWidth={1.5} />
                  <h3 className="font-display text-3xl font-bold text-charcoal mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-accent font-medium text-charcoal/80 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-charcoal/50">{stat.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Education - Minimal card */}
          <motion.div
            className="mt-10 p-6 bg-warm-cream rounded-2xl border border-warm-taupe/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(212, 115, 94, 0.3)' }}
          >
            <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-3 font-accent">
              Education & Credentials
            </p>
            <p className="text-charcoal font-semibold font-accent mb-1">
              MA English Literature (Pursuing)
            </p>
            <p className="text-charcoal/60 text-sm">Jamia Islamia University, DU</p>
            <p className="text-charcoal/60 text-sm mt-3">
              + Meta Social Media Marketing Certificate
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default About
