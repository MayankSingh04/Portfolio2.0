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
  Star,
  Heart,
  Coffee
} from 'lucide-react'
import { downloadResume } from '@/lib/utils'
import { useRef, useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [isHovered, setIsHovered] = useState<string | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mayanksinghdhami7@gmail.com",
      action: "Send Email",
      href: "mailto:mayanksinghdhami7@gmail.com",
      color: "from-slate-600 to-gray-700",
      delay: 0.1,
      description: "Let's discuss your project"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9012176321",
      action: "Call Now",
      href: "tel:+919012176321",
      color: "from-gray-600 to-slate-700",
      delay: 0.2,
      description: "Available for calls"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Haldwani, Uttarakhand, India",
      action: "View on Map",
      href: "https://maps.google.com/?q=Haldwani,Uttarakhand,India",
      color: "from-zinc-600 to-gray-700",
      delay: 0.3,
      description: "Open to remote work"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/MayankSingh04",
      description: "View my projects and contributions",
      color: "from-gray-800 to-gray-900",
      delay: 0.4,
      followers: "50+"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mayanksdhami/",
      description: "Connect professionally",
      color: "from-slate-600 to-gray-700",
      delay: 0.5,
      followers: "500+"
    },
    {
      icon: Globe,
      name: "X (Twitter)",
      href: "https://x.com/MayankDhami16",
      description: "Follow for updates",
      color: "from-black to-gray-800",
      delay: 0.6,
      followers: "100+"
    }
  ]

  const handleResumeDownload = () => {
    downloadResume()
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern"></div>
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
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Badge variant="outline" className="border-gray-400/20 text-gray-400 bg-gray-400/5 px-4 py-2 text-sm">
              <Heart className="h-4 w-4 mr-2" />
              Let's Connect
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">Collaborate?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm actively seeking opportunities to work with innovative teams on cloud infrastructure and AI-powered solutions.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          style={{ y }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
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
              onHoverStart={() => setIsHovered(method.title)}
              onHoverEnd={() => setIsHovered(null)}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full group hover:bg-white/20 transition-all duration-500 overflow-hidden cursor-pointer">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Enhanced Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Enhanced Icon with Better Styling */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} w-16 h-16 flex items-center justify-center mb-6 relative z-10 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  {/* Enhanced Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-400 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-slate-300 mb-2 text-sm">
                      {method.description}
                    </p>
                    <p className="text-white font-semibold mb-6 leading-relaxed">
                      {method.value}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-white/30 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 group/btn backdrop-blur-sm font-medium py-2"
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

        {/* Social Links with Enhanced Design */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/20 transition-all duration-500 overflow-hidden group">
                <CardContent className="p-6 relative">
                  {/* Background Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <social.icon className="h-16 w-16 text-gray-400" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${social.color}`}>
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-gray-400 transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-slate-400 text-sm">{social.followers} followers</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                      {social.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-white/20 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 group/btn backdrop-blur-sm"
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

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Coffee className="h-8 w-8 text-gray-400" />
              <h3 className="text-3xl font-bold text-white">
                Let's Build Something Amazing
              </h3>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
              I'm passionate about cloud infrastructure and always excited to work on challenging projects. 
              Whether you need help with AWS, Terraform, or want to discuss AI-augmented development, I'm here to help.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Remote</div>
                <div className="text-sm text-slate-400">Work Ready</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Full-time</div>
                <div className="text-sm text-slate-400">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Open</div>
                <div className="text-sm text-slate-400">to Relocate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-500 hover:to-slate-600 text-white border-0 px-8 py-3 text-lg font-semibold group"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 hover:border-white px-8 py-3 text-lg font-semibold"
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
