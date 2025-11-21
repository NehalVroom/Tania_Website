import { motion } from 'framer-motion'
import Section from '../components/Section'
import { ExternalLink, TrendingUp } from 'lucide-react'

const Work = () => {
  const projects = [
    {
      title: 'Blockchain Content Strategy',
      company: 'Pure Software',
      type: 'Content Analyst',
      description: 'Developed compelling narratives and visual storytelling to simplify complex blockchain concepts.',
      results: [
        '30-40% increase in organic impressions',
        '50% faster content turnaround',
        'Improved readability & semantic depth',
      ],
      tools: ['ChatGPT', 'Notion AI', 'SurferSEO', 'Frase', 'Jasper AI'],
      size: 'large', // For bento grid
      link: '#',
    },
    {
      title: 'B2B LinkedIn Content',
      company: 'Growth Asian',
      type: 'Content & Engagement Manager',
      description: 'Built strategic posting calendars and repurposed long-form content for LinkedIn optimization.',
      results: [
        'Increased engagement metrics',
        'On-ground event coverage',
        'Platform-native formats',
      ],
      tools: ['LinkedIn Analytics', 'Content Calendar', 'B2B Strategy'],
      size: 'medium',
      link: '#',
    },
    {
      title: 'EdTech SEO Content',
      company: 'upGrad',
      type: 'SEO Associate',
      description: 'Generated articles achieving 1.56K+ views through SEO optimization and social distribution.',
      results: [
        '1.56K+ article views',
        'Long-form content & landing pages',
        'Cross-functional collaboration',
      ],
      tools: ['ChatGPT', 'Jasper AI', 'HubSpot AI', 'Gemini', 'Grok', 'Canva AI'],
      size: 'medium',
      link: '#',
    },
    {
      title: 'Content Portfolio',
      company: 'Personal Projects',
      type: 'Showcase',
      description: 'Collection of social media campaigns, UGC content, and creative writing samples.',
      results: [
        'Behance portfolio',
        'Blog articles',
        'Social media campaigns',
      ],
      tools: ['Canva', 'Creative Writing'],
      size: 'small',
      link: '#',
    },
  ]

  return (
    <Section id="work" className="bg-gray-50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Real projects, measurable results, and proven impact
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const gridClass = {
            large: 'md:col-span-2 lg:row-span-2',
            medium: 'md:col-span-1',
            small: 'md:col-span-1',
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${gridClass[project.size]}`}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 border border-gray-200 h-full flex flex-col group cursor-pointer hover:border-accent transition-colors"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">
                        {project.company} · {project.type}
                      </p>
                    </div>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-accent" size={20} />
                    <h4 className="font-semibold text-gray-900">Key Results</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="text-accent mr-2">▸</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Portfolio Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-6">Want to see more?</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: 'Full Portfolio', link: '#' },
            { name: 'Behance', link: '#' },
            { name: 'Blog', link: '#' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

export default Work
