'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Cloud, 
  Zap, 
  Brain,
  Sparkles,
  Terminal,
  ChevronRight,
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


  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Proficient in AWS services, Terraform automation, and scalable architecture design.",
      color: "from-slate-600 to-gray-700"
    },
    {
      icon: Brain,
      title: "AI-Augmented Development",
      description: "Leveraging AI tools to accelerate development workflows and focus on core infrastructure logic.",
      color: "from-gray-600 to-slate-700"
    },
    {
      icon: Sparkles,
      title: "Analytical Mindset",
      description: "Applied risk management and analytical thinking from trading to technical solutions.",
      color: "from-zinc-600 to-gray-700"
    },
    {
      icon: Zap,
      title: "Security First",
      description: "Building secure, compliant infrastructure with automated security.",
      color: "from-neutral-600 to-slate-700"
    }
  ]

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
            Building the <span className="text-white font-medium">Future</span> from code to Cloud.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-light px-4">
            A passionate Computer Science student and Cloud Engineer focused on building scalable infrastructure solutions that drive real business value.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-20">
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
                    <p className="text-gray-300 text-sm sm:text-base">Cloud Engineer & CS Student</p>
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
                    <span className="text-gray-300">6th Semester</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-8">
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  I'm a Computer Science student passionate about cloud infrastructure and AI-augmented development. 
                  My journey combines academic excellence with hands-on experience in building scalable AWS solutions using Terraform and Python.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  With a strong foundation in trading and risk management, I bring analytical thinking to technical solutions, 
                  focusing on security-first approaches and automated infrastructure deployment.
                </p>
              </CardContent>
            </Card>

          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">What I Do Best</h3>
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Card className="p-4 sm:p-6 bg-gray-900 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-l-4 group-hover:border-blue-500">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${highlight.color} shadow-lg flex-shrink-0`}>
                      <highlight.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{highlight.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Terminal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-slate-900 rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-300 text-sm font-mono ml-4">mayank@cloud-engineer:~</span>
          </div>
          
          <div className="font-mono text-sm space-y-2">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-blue-400">cat journey.txt</span>
            </div>
            <div className="text-slate-300 ml-4">
              <div>In my B.Tech CSE journey, I’ve: Built projects ranging from lexical analyzers to expense trackers and cloud-based apps.Explored AWS, DevOps, and backend engineering, strengthening my foundation in scalable solutions.Balanced academics with self-learning and real-world projects, sharpening problem-solving and adaptability.</div>
              <div>Discovered cloud computing in 2024</div>
              <div>Built first AWS project in 2024</div>
              <div>Currently mastering Terraform & AI tools</div>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-blue-400">./connect.sh</span>
            </div>
            <div className="text-green-400 ml-4">Ready to collaborate on real world problem solving projects!</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
