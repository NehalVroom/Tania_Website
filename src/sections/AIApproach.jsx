import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Bot, Sparkles, Zap, TrendingUp, Brain, Rocket } from 'lucide-react'

const AIApproach = () => {
  const aiTools = [
    { name: 'ChatGPT', color: 'bg-emerald-500' },
    { name: 'Jasper AI', color: 'bg-purple-500' },
    { name: 'Grok', color: 'bg-blue-500' },
    { name: 'Notion AI', color: 'bg-pink-500' },
    { name: 'Gemini', color: 'bg-orange-500' },
    { name: 'HubSpot AI', color: 'bg-cyan-500' },
    { name: 'SurferSEO', color: 'bg-indigo-500' },
    { name: 'Frase', color: 'bg-red-500' },
  ]

  const workflow = [
    {
      icon: Brain,
      title: 'Strategic Thinking',
      description: 'Define the narrative, audience, and goals with creative insight',
    },
    {
      icon: Sparkles,
      title: 'Smart Ideation',
      description: 'Generate data-driven topic clusters and content angles efficiently',
    },
    {
      icon: Zap,
      title: 'Efficient Execution',
      description: '50% faster turnaround while maintaining quality and brand voice',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '30-40% increase in organic impressions across campaigns',
    },
  ]

  return (
    <Section id="ai-approach" className="bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
        >
          <Zap size={20} />
          <span className="font-semibold text-sm uppercase tracking-wider">My Approach</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          Strategy Meets{' '}
          <span className="text-accent relative">
            Execution
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Combining modern tools with strategic thinking to create content that drives real results.
        </motion.p>
      </div>

      {/* AI Tools Grid */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-center text-gray-500 uppercase tracking-wider text-sm mb-8">
          Tools I Use
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              className={`${tool.color} text-white px-6 py-3 rounded-full font-medium shadow-lg`}
            >
              {tool.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Workflow */}
      <div>
        <h3 className="text-center font-display text-3xl font-bold mb-12 text-gray-900">
          How I Work
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connection line (except last item) */}
                {index < workflow.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  />
                )}

                <motion.div
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-accent transition-all h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)' }}
                >
                  {/* Step number */}
                  <div className="text-accent/30 font-display text-6xl font-bold mb-4">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="inline-flex bg-accent/10 p-3 rounded-xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-accent" size={28} />
                  </motion.div>

                  {/* Content */}
                  <h4 className="font-semibold text-xl mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Results highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-br from-accent to-accent-dark text-white p-12 rounded-3xl text-center"
      >
        <Rocket className="inline-block mb-4" size={48} />
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
          The Result? Content That Actually Performs
        </h3>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          By combining modern tools with strategic thinking, I deliver high-quality content
          efficiently while driving measurable growth and engagement.
        </p>
      </motion.div>
    </Section>
  )
}

export default AIApproach
