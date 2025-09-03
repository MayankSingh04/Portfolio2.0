'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Calendar,
  Clock,
  Globe,
  Download,
  ArrowRight,
  Sparkles,
  Zap,
  Star
} from 'lucide-react'
import { downloadResume } from '@/lib/utils'
import { useRef } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mayanksinghdhami7@gmail.com",
      action: "Send Email",
      href: "mailto:mayanksinghdhami7@gmail.com",
      color: "from-blue-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9012176321",
      action: "Call Now",
      href: "tel:+919012176321",
      color: "from-green-500 to-blue-600",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Haldwani, Uttarakhand, India",
      action: "View on Map",
      href: "https://maps.google.com/?q=Haldwani,Uttarakhand,India",
      color: "from-orange-500 to-red-600",
      delay: 0.3
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/MayankSingh04",
      description: "View my projects and contributions",
      color: "from-gray-800 to-gray-900",
      delay: 0.4
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mayanksdhami/",
      description: "Connect professionally",
      color: "from-blue-600 to-blue-700",
      delay: 0.5
    },
    {
      icon: Globe,
      name: "X (Twitter)",
      href: "https://x.com/MayankDhami16",
      description: "Follow for updates",
      color: "from-black to-gray-800",
      delay: 0.6
    }
  ]

  const handleResumeDownload = () => {
    downloadResume()
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-transparent to-primary/20 transform -rotate-12 scale-150"></div>
      </div>

      {/* Animated Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-current text-background"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Let's Connect
            </Badge>
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          style={{ y, opacity }}
          className="grid lg:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: method.delay, duration: 0.8, type: "spring" }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-panel h-full group hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden cursor-pointer">
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Enhanced Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Enhanced Icon with Better Styling */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} w-16 h-16 flex items-center justify-center mb-5 relative z-10 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  {/* Enhanced Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-foreground font-body mb-5 text-base font-semibold group-hover:text-primary/90 transition-colors duration-300 leading-relaxed">
                      {method.value}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-white/30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn backdrop-blur-sm font-medium py-2"
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      <span>{method.action}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links with Enhanced Glassmorphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="glass-panel h-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-6 relative">
                  {/* Background Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <social.icon className="h-16 w-16 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-orbitron font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {social.name}
                    </h4>
                    <p className="text-muted-foreground font-body text-sm mb-4">
                      {social.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn backdrop-blur-sm"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <Globe className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>Visit Profile</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Resume Download Section with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-panel rounded-2xl p-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-foreground font-body mb-6 leading-relaxed">
              I'm actively seeking opportunities to work with innovative teams on cloud infrastructure and AI-powered solutions. 
              Let's discuss how we can build something amazing together.
            </p>
            
            {/* Enhanced Contact Info Display */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <motion.div 
                className="flex flex-col items-center space-y-2 group cursor-pointer hover:scale-105 transition-all duration-300"
                whileHover={{ y: -2 }}
                onClick={() => window.open('mailto:mayanksinghdhami7@gmail.com', '_blank')}
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">Email</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center space-y-2 group cursor-pointer hover:scale-105 transition-all duration-300"
                whileHover={{ y: -2 }}
                onClick={() => window.open('tel:+919012176321', '_blank')}
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">Phone</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center space-y-2 group cursor-pointer hover:scale-105 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary text-lg group-hover:scale-110 transition-transform duration-300">📍</span>
                </div>
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">Location</span>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-effect group"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-sm"
                onClick={() => window.open('mailto:mayanksinghdhami7@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
