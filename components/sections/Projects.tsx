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

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="cloud-card h-full group hover:shadow-lg transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className="relative h-36 bg-gradient-to-br from-accent to-accent/50 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Cloud className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground font-body font-medium text-sm">{project.title}</p>
                    </div>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getStatusColor(project.status)} text-xs`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-border">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-border/50 text-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn border-border hover:bg-accent"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:text-primary" />
                      View Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn"
                    >
                      <Eye className="h-4 w-4 group-hover/btn:text-primary" />
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
