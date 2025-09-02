'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Cloud, 
  Brain, 
  TrendingUp, 
  Code, 
  Server, 
  Zap,
  Shield,
  BarChart3,
  Globe,
  Cpu
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
      icon: TrendingUp,
      title: "Analytical Mindset",
      description: "Applied risk management and analytical thinking from trading to technical solutions."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Building secure, compliant infrastructure with automated security."
    }
  ]

  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Cloud Engineering & AI Integration
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                My approach combines traditional cloud engineering with modern AI tools to create 
                efficient, scalable solutions. I use AI to automate repetitive tasks, accelerate 
                frontend development, and focus more time on core infrastructure and security.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Trading Experience & Analytical Thinking
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Since 2022, I've been actively trading financial markets, developing a deep understanding 
                of risk management, market analysis, and decision-making under pressure. This experience 
                translates directly to my technical work - I approach infrastructure with the same 
                analytical mindset and risk-aware perspective.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="aws">AWS Certified</Badge>
              <Badge variant="terraform">Terraform Expert</Badge>
              <Badge variant="python">Python Developer</Badge>
              <Badge variant="outline" className="border-border text-foreground">AI-Augmented</Badge>
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
