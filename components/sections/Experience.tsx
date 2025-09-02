'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  TrendingUp, 
  Cloud, 
  Code, 
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  Globe
} from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = {
    institution: "Graphic Era University",
    location: "Haldwani, India",
    degree: "Bachelor of Technology in Computer Science",
    graduation: "2026",
    gpa: "3.8/4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming", 
      "Operating Systems",
      "Computer Networks",
      "Distributed Systems",
      "Database Management Systems"
    ]
  }

  const tradingExperience = {
    period: "Jan 2022 – Present",
    title: "Trading Experience (Forex, Crypto, and Options)",
    description: "Hands-on analysis of market trends, risk management, and trade execution. Practical understanding of equities, commodities, derivatives, and digital assets.",
    achievements: [
      "Applied technical and fundamental analysis for informed decisions",
      "Developed risk management strategies for portfolio protection",
      "Domain knowledge relevant to fintech systems and algorithmic trading",
      "Experience with real-time data analysis and market sentiment"
    ]
  }

  const timeline = [
    {
      year: "2022",
      title: "Started Trading Journey",
      description: "Began active trading in forex, crypto, and options markets",
      icon: TrendingUp,
      category: "Trading"
    },
    {
      year: "2024",
      title: "First Cloud Project",
      description: "Deployed first production application on AWS using Terraform",
      icon: Cloud,
      category: "Cloud"
    },
    {
      year: "2025",
      title: "Portfolio Launch",
      description: "Launched this portfolio website with full infrastructure automation",
      icon: Globe,
      category: "Development"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="cloud" className="mb-4">
            Experience & Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From academic foundations to practical trading experience, building a unique perspective on technology and markets.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Professional Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cloud-200 to-cloud-400" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="cloud-card">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <item.icon className="h-5 w-5 text-cloud-600" />
                          <Badge variant="cloud" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <div className="text-xs text-cloud-600 font-medium mt-2">{item.year}</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-cloud-600 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education and Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="cloud-card h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8 text-cloud-600" />
                  <div>
                    <CardTitle className="text-xl">Education</CardTitle>
                    <p className="text-sm text-gray-600">Academic Foundation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{education.institution}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{education.degree}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Graduation: {education.graduation}</span>
                    </div>
                    <Badge variant="cloud" className="text-xs">
                      GPA: {education.gpa}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Relevant Coursework</h5>
                  <div className="grid grid-cols-1 gap-1">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <BookOpen className="h-3 w-3 text-cloud-500" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Trading Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="cloud-card h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-cloud-600" />
                  <div>
                    <CardTitle className="text-xl">Trading Experience</CardTitle>
                    <p className="text-sm text-gray-600">Financial Markets Expertise</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{tradingExperience.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{tradingExperience.period}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{tradingExperience.description}</p>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Key Achievements</h5>
                  <div className="space-y-2">
                    {tradingExperience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cloud-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cloud-50 to-blue-50 rounded-2xl p-8 border border-cloud-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm open to full-time opportunities in Cloud Engineering, DevOps, and related roles. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="cloud" className="text-sm px-4 py-2">
                Available for Full-time Roles
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                Open to Remote Work
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
