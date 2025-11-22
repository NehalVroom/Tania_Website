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
    <Section id="work" className="bg-warm-beige/20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-6xl font-bold mb-6 text-charcoal"
        >
          Work That Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-charcoal/60 max-w-3xl mx-auto font-accent"
        >
          Real projects, measurable results, proven impact
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
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={index % 2 === 0 ? "ml-0 md:ml-12" : "mr-0 md:mr-12"}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-warm-taupe/20 group cursor-pointer hover:border-accent/40 transition-all duration-700"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(212, 115, 94, 0.1)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2 group-hover:text-accent transition-colors duration-700">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/60 font-accent">
                        {project.company} · {project.type}
                      </p>
                    </div>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-charcoal/30 hover:text-accent transition-colors duration-700"
                    >
                      <ExternalLink size={24} strokeWidth={1.5} />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="text-accent" size={20} strokeWidth={1.5} />
                      <h4 className="font-semibold text-charcoal font-accent">Key Results</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-charcoal/60 text-sm flex items-start">
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
                        className="text-xs px-3 py-1.5 bg-warm-beige/50 text-charcoal/70 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-700"
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
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-charcoal/60 mb-6 font-accent text-lg">Want to see more?</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: 'Full Portfolio', link: '#' },
            { name: 'Behance', link: '#' },
            { name: 'Blog', link: '#' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="px-6 py-3 border-2 border-charcoal/20 text-charcoal rounded-full font-medium hover:bg-accent hover:text-white hover:border-accent transition-all duration-700 font-accent"
              whileHover={{ scale: 1.05, y: -2 }}
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
