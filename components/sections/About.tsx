'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  User,
  MapPin,
  Calendar,
  GraduationCap
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-20">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Badge variant="outline" className="border-white/30 text-white bg-black px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              About Me
            </Badge>
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-light text-white mb-4 sm:mb-6">
            CS Student. <span className="text-white font-medium">Developer</span>. Always learning.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Currently in my 8th semester of BTech CSE. I build web applications, work with cloud infrastructure, write code in multiple languages, and occasionally trade. Open to all kinds of opportunities.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-1 gap-8 sm:gap-16 items-center mb-12 sm:mb-20">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Personal Card */}
            <Card className="bg-gray-900 border border-gray-700 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-black p-4 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/profile-picture.JPG" 
                      alt="Mayank Singh Dhami"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <User className="h-6 w-6 sm:h-8 sm:w-8 text-white hidden" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold">Mayank Singh Dhami</h3>
                    <p className="text-gray-300 text-sm sm:text-base">CS Student & Developer</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-300">Graphic Era University</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-300">Haldwani, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-300">8th Semester</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-8">
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  I'm a CS student in my 8th semester. I've worked on web applications, cloud infrastructure projects, and various coding challenges. 
                  I write code in Python, Java, and other languages. I like building things that actually work.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I also trade (forex, crypto, options) which has taught me a lot about risk management and thinking through systems. 
                  I'm open to all kinds of opportunities - internships, projects, or full-time roles in software development, cloud, or related fields.
                </p>
              </CardContent>
            </Card>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
