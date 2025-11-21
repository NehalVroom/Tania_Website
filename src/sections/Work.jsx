import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Section from '../components/Section'
import { ExternalLink, TrendingUp } from 'lucide-react'

const Work = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

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

      {/* Vertical Scrolling Cards */}
      <div ref={containerRef} className="relative">
        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            // Create parallax effect - each card moves at different speed
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [100 * (index + 1), -100 * (index + 1)]
            )

            return (
              <motion.div
                key={index}
                style={{ y }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={index % 2 === 0 ? "ml-0 md:ml-12" : "mr-0 md:mr-12"}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 border border-gray-200 group cursor-pointer hover:border-accent transition-colors"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
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

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

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
                </motion.div>
              </motion.div>
            )
          })}
        </div>
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
