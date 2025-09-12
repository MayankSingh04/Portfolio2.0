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
  Award,
  Download,
  Zap,
  Shield
} from 'lucide-react'
import { downloadJPMCCertification } from '@/lib/utils'
import React, { useState } from 'react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState(0)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 50])

  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-slate-600 to-gray-700",
      skills: [
        { name: "AWS", level: 90, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Terraform", level: 85, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" },
        { name: "Docker", level: 80, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        { name: "Kubernetes", level: 75, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Git", level: 90, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-gray-600 to-slate-700",
      skills: [
        { name: "Python", level: 85, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "Java", level: 80, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "C++", level: 75, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
        { name: "SQL", level: 85, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "Bash", level: 70, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" },
      ]
    },
    {
      title: "Frontend",
      icon: Globe,
      color: "from-zinc-600 to-gray-700",
      skills: [
        { name: "React", level: 80, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "HTML5", level: 90, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS3", level: 85, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "Tailwind", level: 85, logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Next.js", level: 75, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
      ]
    },
    {
      title: "Tools & Databases",
      icon: Database,
      color: "from-neutral-600 to-slate-700",
      skills: [
        { name: "MySQL", level: 85, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", level: 80, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
        { name: "Linux", level: 80, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
        { name: "VS Code", level: 90, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
        { name: "GitHub", level: 90, logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
      ]
    }
  ]


  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Badge variant="outline" className="border-white/30 text-white bg-black px-4 py-2 text-sm">
              <Zap className="h-4 w-4 mr-2" />
              Technical Skills
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Core <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expertise in cloud infrastructure, AI-augmented development, and modern software engineering practices.
          </p>
        </motion.div>


        {/* Enhanced Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-gray-800 p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-gray-800/20"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Professional Certifications</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-gray-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-full bg-gray-500/20 border border-gray-500/30"
                  >
                    <Award className="h-6 w-6 text-gray-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">JPMC Job Simulation</h4>
                    <p className="text-gray-300">JP Morgan Chase & Co. • Financial Technology</p>
                  </div>
                </div>
                <motion.button
                  onClick={downloadJPMCCertification}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-500 hover:to-slate-600 text-white transition-all duration-200 shadow-lg"
                  title="Download Certification"
                >
                  <Download className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Skills Categories Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-gray-900 border border-gray-700 rounded-full p-2 shadow-2xl">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 relative overflow-hidden ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-gray-600 to-slate-700 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <motion.div
                  animate={activeCategory === index ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="h-4 w-4" />
                </motion.div>
                <span>{category.title}</span>
                {activeCategory === index && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Clean Logo-Only Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-xl border border-gray-700 group-hover:border-gray-500 transition-all duration-200 shadow-md group-hover:shadow-lg">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="h-12 w-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-200"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <span className="text-2xl hidden">🚀</span>
                </div>
                
                <h4 className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
