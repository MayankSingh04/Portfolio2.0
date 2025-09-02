'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Cloud, 
  Code, 
  Server, 
  Zap, 
  ArrowRight, 
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Brain,
  Sparkles
} from 'lucide-react'
import { downloadResume } from '@/lib/utils'

const Hero = () => {
  const floatingIcons = [
    { icon: Cloud, delay: 0, position: 'top-16 left-16' },
    { icon: Brain, delay: 0.5, position: 'top-24 right-16' },
    { icon: Code, delay: 1, position: 'bottom-24 left-24' },
    { icon: Server, delay: 1.5, position: 'bottom-16 right-24' },
    { icon: Sparkles, delay: 2, position: 'top-1/2 left-1/4' },
  ]

  const handleResumeDownload = () => {
    downloadResume()
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.05, y: 0 }}
            transition={{ delay: item.delay, duration: 1 }}
            className={`absolute ${item.position} text-muted-foreground`}
          >
            <item.icon className="h-12 w-12 floating" />
          </motion.div>
        ))}
      </div>

      {/* Professional Background */}
      <div className="absolute inset-0 professional-gradient" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="outline" className="text-sm px-4 py-2 border-border text-foreground glow-effect">
              <Cloud className="h-4 w-4 mr-2" />
              Cloud Engineer • AI-Powered Development
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-orbitron font-bold tracking-tight"
          >
            <span className="name-gradient">Mayank Singh</span>
            <br />
            <span className="name-gradient">Dhami</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl font-space text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Cloud Engineer specializing in <span className="font-semibold text-foreground">AWS infrastructure</span> and 
            <span className="font-semibold text-foreground"> AI-augmented development</span>. Building scalable, 
            secure solutions that drive business value through automation and intelligent systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="default" size="lg" className="group bg-primary hover:bg-primary/90 glow-effect">
              <span>View Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-border hover:bg-accent"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-body text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>9012176321</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>mayanksinghdhami7@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍 Haldwani, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-accent glow-effect"
              onClick={() => window.open('https://github.com/MayankSingh04', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-accent glow-effect"
              onClick={() => window.open('https://www.linkedin.com/in/mayanksdhami/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-accent glow-effect"
              onClick={() => window.open('https://x.com/MayankDhami16', '_blank')}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-border rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
