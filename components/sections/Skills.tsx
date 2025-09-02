'use client'

import { motion } from 'framer-motion'
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
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Skills Categories - Simplified Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.8 }}
            >
              <Card className="cloud-card h-full glow-effect">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-space font-semibold flex items-center">
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
                        className="group flex flex-col items-center space-y-2 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300 hover:scale-105 border border-border/50"
                      >
                        <div className="w-10 h-10 flex items-center justify-center">
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
