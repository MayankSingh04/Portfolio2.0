'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Github, 
  ExternalLink,
  TrendingUp,
  Scale,
  ArrowRight,
  Cloud,
  Webhook,
  Brain,
  FileText,
  Zap,
  Box
} from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Real-Time Financial Trades Tracker",
      description: "A Docker-based pipeline that streams crypto trades from Binance and filters for large whale trades. Built with Python, deployed on AWS.",
      highlights: [
        "Built a Docker pipeline that streams real-time crypto trades from Binance WebSocket API",
        "Wrote a Python service that filters the stream to find significant whale trades",
        "Deployed everything on AWS using Terraform"
      ],
      technologies: ["Python", "AWS", "Terraform", "Docker", "WebSocket", "GitHub"],
      github: "https://github.com/MayankSingh04",
      category: "Data Engineering",
      icon: TrendingUp,
      gradient: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Paralegal AI",
      description: "A tool that reads contracts and flags risky clauses. Uses Google's Gemini API to analyze legal documents and highlight potential issues.",
      highlights: [
        "Built a system that reads contracts and flags high/medium-risk clauses with scores and recommendations",
        "Made a simple UI that shows risk summaries and suggested actions",
        "Added CSV export and one-click execution to make it easier to use",
        "Turned a complex legal problem into something actually usable"
      ],
      technologies: ["Python", "Streamlit", "Google Gemini API", "GitHub Actions"],
      github: "https://github.com/MayankSingh04",
      category: "AI/ML",
      icon: Scale,
      gradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30"
    }
  ]

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('docker')) return Box
    if (techLower.includes('aws') || techLower.includes('cloud')) return Cloud
    if (techLower.includes('websocket') || techLower.includes('api')) return Webhook
    if (techLower.includes('ai') || techLower.includes('gemini')) return Brain
    if (techLower.includes('streamlit') || techLower.includes('ui')) return FileText
    return Zap
  }

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <Badge 
              variant="outline" 
              className="border-white/20 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium"
            >
              Featured Work
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight"
          >
            Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.4 + index * 0.2, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card 
                  className={`
                    h-full border ${project.borderColor} 
                    bg-black/40 backdrop-blur-sm
                    hover:border-white/40 
                    transition-all duration-500 
                    overflow-hidden
                    group-hover:bg-black/60
                  `}
                >
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`
                          w-12 h-12 rounded-lg 
                          bg-gradient-to-br ${project.gradient}
                          border ${project.borderColor}
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300
                        `}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <Badge 
                          variant="outline" 
                          className="border-white/10 text-white/60 bg-white/5 text-xs"
                        >
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/60 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                          <p className="text-white/70 text-sm leading-relaxed flex-1">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => {
                          const TechIcon = getTechIcon(tech)
                          return (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 0.8 + index * 0.2 + techIdx * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="border-white/10 text-white/70 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-xs px-3 py-1"
                              >
                                <TechIcon className="h-3 w-3 mr-1.5" />
                                {tech}
                              </Badge>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="flex items-center gap-3 pt-4 border-t border-white/10"
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all group/btn"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Code
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-white/60 hover:text-white hover:bg-white/5 transition-all"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all group"
            onClick={() => window.open('https://github.com/MayankSingh04', '_blank')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
