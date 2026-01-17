'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Let's connect</h2>
                <p className="text-slate-300 text-sm md:text-base">
                  CS student in 8th semester, open to all opportunities. Looking for internships, projects, or full-time roles in software development, cloud, web development, or any interesting technical work.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <Button 
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => window.open('mailto:mayanksinghdhami7@gmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                  onClick={() => window.open('tel:+919012176321', '_blank')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                  onClick={() => window.open('https://www.linkedin.com/in/mayanksdhami/', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                  onClick={() => window.open('https://github.com/MayankSingh04', '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
