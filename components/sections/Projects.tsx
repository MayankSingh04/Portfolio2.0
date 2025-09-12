'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
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
  Brain,
  Coffee,
  Rocket,
  Target,
  Flame,
  Star,
  Heart
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
      sarcasticDescription: "Because manually checking if your AWS bill is trying to bankrupt you every month is so 2019. This little gem watches your cloud like a hawk and screams 'DANGER!' when you're about to accidentally spend your entire salary on a misconfigured RDS instance. It's like having a very judgmental friend who's always right about your financial decisions.",
      image: "/projects/cloud-auditor.jpg",
      github: "https://github.com/MayankSingh04/cloud-auditor",
      technologies: ["Terraform", "AWS Lambda", "DynamoDB", "API Gateway", "React", "Python"],
      category: "Cloud Security",
      status: "Live",
      icon: Shield,
      color: "from-gray-600 to-gray-800",
      emoji: "🛡️"
    },
    {
      title: "Scalable Real-Time Financial Data Platform",
      description: "A data ingestion pipeline on Amazon Kinesis streaming 1,000+ crypto trades/min from WebSocket APIs, processed by AWS Lambda. Stores structured time-series data in Amazon RDS for analytics with full Terraform IaC.",
      sarcasticDescription: "Stalking crypto whales has never been this sophisticated! This platform tracks massive trades happening across exchanges in real-time, because apparently, knowing when someone moves $50M worth of Bitcoin is crucial for... reasons. It's like having a front-row seat to the world's most expensive game of musical chairs, but with better data visualization and way more coffee consumption.",
      image: "/projects/financial-platform.jpg",
      github: "https://github.com/MayankSingh04/Scalable-Real-Time-Financial-Data-platform",
      technologies: ["AWS Kinesis", "Lambda", "RDS", "Terraform", "Python", "MySQL"],
      category: "Data Engineering",
      status: "In Development",
      icon: TrendingUp,
      color: "from-gray-700 to-gray-900",
      emoji: "📈"
    },
    {
      title: "Portfolio 2.0 - This Very Website",
      description: "A modern, responsive portfolio website built with Next.js, featuring dark theme, smooth animations, and a music player. Showcases my projects and skills with a clean, professional design.",
      sarcasticDescription: "Yes, I built a website to show off the fact that I can build websites. It's like a chef making a menu to show you they can cook. But here's the twist - I used AI for literally everything: writing copy, generating animations, optimizing code, and probably even choosing what color my buttons should be. It's either the future of web development or proof that I'm too lazy to think for myself. You decide!",
      image: "/projects/portfolio.jpg",
      github: "https://github.com/MayankSingh04/Portfolio2.0",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      status: "Live",
      icon: Rocket,
      color: "from-gray-500 to-gray-700",
      emoji: "🚀"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
      case 'In Development': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800'
      case 'Open Source': return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-900/20 dark:text-slate-400 dark:border-slate-800'
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
    }
  }

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Background with Floating Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-white/10 to-gray-700/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </motion.div>

      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <motion.svg 
          className="relative block w-full h-12" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-white/10"
          ></path>
        </motion.svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Better Typography */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Badge variant="outline" className="border-white/30 text-white bg-black/50 backdrop-blur-sm px-6 py-3 text-sm font-medium">
              <Star className="h-4 w-4 mr-2" />
              Featured Projects
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            My <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Digital</span> Creations
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Where I turn coffee into code and ideas into reality. Sometimes it works, sometimes it doesn't, but it's always an adventure! ☕️
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.3, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="h-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-black/50 backdrop-blur-xl">
                <div className="relative overflow-hidden">
                  {/* Enhanced Project Header with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.8, type: "spring" }}
                      className="text-center relative z-10"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <project.icon className="h-10 w-10 text-white" />
                      </div>
                      <p className="text-sm text-white/90 font-medium">{project.category}</p>
                      <div className="text-2xl mt-2">{project.emoji}</div>
                    </motion.div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0">
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full"
                      />
                      <motion.div
                        animate={{ 
                          y: [0, -15, 0],
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                        className="absolute top-8 right-6 w-1 h-1 bg-white/30 rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Status Badge with Animation */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.3 + 0.7, duration: 0.5 }}
                    >
                      <Badge className={`${getStatusColor(project.status)} backdrop-blur-sm border-white/20 shadow-lg`}>
                        {project.status}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.6 }}
                  >
                    <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Sarcastic Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 1, duration: 0.6 }}
                    className="relative"
                  >
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Coffee className="h-4 w-4 text-yellow-400" />
                        <span className="text-xs font-medium text-yellow-400">Sarcastic Mode: ON</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed italic">
                        {project.sarcasticDescription}
                      </p>
                    </div>
                  </motion.div>

                  {/* Technologies with Enhanced Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 1.2, duration: 0.6 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.3 + 1.2 + techIndex * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs border-white/20 text-white hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm bg-black/30"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Enhanced Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 1.4, duration: 0.6 }}
                    className="flex gap-3 pt-2"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn border-white/20 hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black hover:border-transparent transition-all duration-300 backdrop-blur-sm bg-black/30"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      View Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn hover:bg-white/10 hover:text-white transition-all duration-300 bg-black/30"
                    >
                      <Heart className="h-4 w-4 group-hover/btn:scale-110 group-hover/btn:text-white transition-all duration-300" />
                    </Button>
                  </motion.div>
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
