'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Github, 
  ExternalLink, 
  Cloud, 
  Server, 
  Database, 
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
  Globe,
  Code,
  Eye,
  Brain
} from 'lucide-react'
import { useState, useEffect } from 'react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visibleProjects, setVisibleProjects] = useState(1)

  useEffect(() => {
    if (inView) {
      // Lazy load projects with a delay
      const timer = setTimeout(() => {
        setVisibleProjects(2)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const projects = [
    {
      title: "Cloud Auditor - AWS Security & Cost Watchdog",
      description: "An automated, serverless platform built on AWS that continuously scans cloud environments for security vulnerabilities and cost anomalies. Features serverless backend with Lambda, API Gateway, and DynamoDB, plus a modern React dashboard.",
      image: "/projects/cloud-auditor.jpg",
      github: "https://github.com/MayankSingh04/cloud-auditor",
      technologies: ["Terraform", "AWS Lambda", "DynamoDB", "API Gateway", "React", "Python"],
      category: "Cloud Security",
      status: "Live"
    },
    {
      title: "Scalable Real-Time Financial Data Platform",
      description: "A data ingestion pipeline on Amazon Kinesis streaming 1,000+ crypto trades/min from WebSocket APIs, processed by AWS Lambda. Stores structured time-series data in Amazon RDS for analytics with full Terraform IaC.",
      image: "/projects/financial-platform.jpg",
      github: "https://github.com/MayankSingh04/Scalable-Real-Time-Financial-Data-platform",
      technologies: ["AWS Kinesis", "Lambda", "RDS", "Terraform", "Python", "MySQL"],
      category: "Data Engineering",
      status: "In Development"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
      case 'In Development': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800'
      case 'Open Source': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800'
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 transform rotate-12 scale-150"></div>
      </div>

      {/* Animated Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-secondary/20"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-3 border-border text-foreground">
            Featured Projects
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Cloud <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my cloud engineering projects, from infrastructure automation to real-time data platforms.
          </p>
        </motion.div>

        {/* Projects Grid with Enhanced Glassmorphism */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="glass-panel h-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* Project Image Placeholder with Gradient */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Cloud className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} backdrop-blur-sm border-white/20`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies with Enhanced Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-white/20 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons with Enhanced Hover Effects */}
                  <div className="flex gap-3 pt-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn border-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      View Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
