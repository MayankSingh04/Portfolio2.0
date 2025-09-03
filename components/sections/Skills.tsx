'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Cloud, 
  Code, 
  Database, 
  Globe,
  GraduationCap,
  Trophy
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  // Simplified skills data with clear logos
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
        { name: "SQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "Bash", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Terraform", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" },
        { name: "Kubernetes", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
        { name: "Linux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
        { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
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

      {/* Floating Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y, scale }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`floating-skill-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
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
            Technical Skills
          </Badge>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-foreground mb-4">
            Core <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg font-space text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expertise in cloud infrastructure, AI-augmented development, and modern software engineering practices.
          </p>
        </motion.div>

        {/* GPA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="cloud-card max-w-md mx-auto glow-effect">
            <CardContent className="pt-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-space font-semibold text-foreground">Academic Performance</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="text-xl font-orbitron font-bold text-foreground">7.13/10</span>
                  </div>
                  <p className="text-xs text-muted-foreground">GPA • 6 Semesters</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>



        {/* Skills Categories - Enhanced with Glassmorphism */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-panel h-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-orbitron font-semibold flex items-center">
                    <category.icon className="h-4 w-4 mr-2 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, 
                          duration: 0.5 
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -3,
                          transition: { duration: 0.2 }
                        }}
                        className="group flex flex-col items-center space-y-2 p-3 rounded-xl bg-accent/50 hover:bg-accent/80 transition-all duration-300 border border-white/20 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="h-6 w-6 object-contain"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.classList.remove('hidden');
                            }}
                          />
                          <span className="text-xl hidden absolute">🚀</span>
                        </div>
                        <span className="text-xs font-medium text-center text-foreground">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
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

export default Skills
