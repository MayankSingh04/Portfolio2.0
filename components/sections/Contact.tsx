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
    <section id="contact" className="relative py-16 bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6"
          >
            Looking for <span className="gradient-text">Opportunities</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl font-space text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I'm a Cloud Engineer seeking full-time opportunities in cloud infrastructure, DevOps, and AI integration. 
            Whether you have a role to offer or want to discuss technology - I'm excited to connect!
          </motion.p>
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
              <Card className="cloud-card h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-2xl bg-gradient-to-br ${method.color} w-14 h-14 flex items-center justify-center mb-4 relative z-10`}
                  >
                    <method.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground font-body mb-4 text-base">
                      {method.value}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
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

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-3">
              Connect on <span className="gradient-text">Social Media</span>
            </h3>
            <p className="text-base font-space text-muted-foreground max-w-2xl mx-auto">
              Follow me for cloud engineering insights, AI updates, and tech discussions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: social.delay, duration: 0.8, type: "spring" }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <Card className="cloud-card h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-full bg-gradient-to-br ${social.color} w-16 h-16 mx-auto mb-4 relative z-10 flex items-center justify-center`}
                    >
                      {social.name === "X (Twitter)" ? (
                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ) : (
                        <social.icon className="h-8 w-8 text-white" />
                      )}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                        {social.name}
                      </h4>
                      <p className="text-muted-foreground font-body text-sm mb-4">
                        {social.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <Globe className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        <span>Visit Profile</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm relative overflow-hidden">
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-6 left-8 text-primary/30"
            >
              <Star className="h-6 w-6" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-8 right-12 text-accent/30"
            >
              <Zap className="h-6 w-6" />
            </motion.div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-4">
                Get My <span className="gradient-text">Resume</span>
              </h3>
              <p className="text-base font-space text-muted-foreground mb-6 max-w-2xl mx-auto">
                Download my detailed resume to learn more about my cloud engineering experience, 
                technical skills, and project portfolio.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-6 py-3 text-base font-space font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                  onClick={handleResumeDownload}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume (PDF)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
