'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Cloud, 
  Code, 
  Server, 
  Zap, 
  Brain,
  Sparkles
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const features = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Expert in AWS services, Terraform automation, and scalable architecture design."
    },
    {
      icon: Brain,
      title: "AI-Augmented Development",
      description: "Leveraging AI tools to accelerate development workflows and focus on core infrastructure logic."
    },
    {
      icon: Sparkles,
      title: "Analytical Mindset",
      description: "Applied risk management and analytical thinking from trading to technical solutions."
    },
    {
      icon: Zap,
      title: "Security First",
      description: "Building secure, compliant infrastructure with automated security."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
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

      {/* Scroll-Responsive Background Waves */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`about-wave-${i}`}
            className="absolute inset-0"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={`M 0,${300 + i * 150} Q ${300 + i * 100},${200 + i * 100} ${600},${300 + i * 150} T ${1200},${300 + i * 150} L 1200,800 L 0,800 Z`}
                fill={`url(#aboutGradient${i})`}
                opacity={0.1 + i * 0.05}
              />
              <defs>
                <linearGradient id={`aboutGradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={`hsl(${200 + i * 40}, 70%, 60%)`} />
                  <stop offset="100%" stopColor={`hsl(${260 + i * 40}, 70%, 60%)`} />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-3 border-border text-foreground">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Cloud Engineer with <span className="gradient-text">AI-Powered Workflows</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate learner and aspiring Cloud Engineer focused on building scalable cloud infrastructure on AWS using Terraform and Python. I have hands-on experience using AI tools to accelerate development and concentrate on core infrastructure logic.
              
          </p>
        </motion.div>

        {/* About Content with Glassmorphism */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                Cloud Engineer & AI Enthusiast
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                I'm a Computer Science student at <span className="font-semibold text-foreground">Graphic Era University</span>, 
                specializing in cloud infrastructure and AI-augmented development. My passion lies in building scalable, 
                secure solutions that leverage the power of modern cloud technologies.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Currently in my <span className="font-semibold text-foreground">6th semester</span>, I've developed a strong foundation 
                in AWS, Terraform, and Python. I believe in the transformative potential of AI to enhance development workflows 
                and create more intelligent, efficient systems.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="cloud-card h-full">
                    <CardHeader className="pb-2">
                      <feature.icon className="h-6 w-6 text-primary mb-2" />
                      <CardTitle className="text-base font-heading text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs font-body text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
