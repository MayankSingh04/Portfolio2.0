'use client'

import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme } = useTheme()
  
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/RESUME28AUG.pdf'
    link.download = 'Mayank_Singh_Dhami_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <div className="fixed top-4 left-4 z-50 theme-toggle-mobile">
        <ThemeToggle />
      </div>

      {/* Minimalist Background */}
      <div className={`absolute inset-0 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className={`absolute inset-0 opacity-5 bg-dot-pattern ${
          theme === 'dark' ? 'bg-dot-pattern' : 'bg-dot-pattern-light'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 hero-mobile">
        <div className="space-y-8 sm:space-y-12">
          {/* Main Content with Profile Picture */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
                <motion.div
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-300 p-1"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
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
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center hidden">
                      <span className="text-white text-6xl">👨‍💻</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center lg:text-left space-y-6"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`text-lg sm:text-2xl md:text-3xl font-light ${
                  theme === 'dark' ? 'text-white/80' : 'text-black/80'
                }`}
              >
                Engineer. Tinkerer. Trader.
              </motion.div>

              {/* Main Title */}
              <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                <div className="block">Software Engineer</div>
                <div className={`block ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>& Developer</div>
              </h1>

              {/* Subtitle */}
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-white/70' : 'text-black/70'
              }`}>
                Building scalable infrastructure solutions and modern applications that drive real business value.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              className={`group border-0 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold touch-manipulation ${
                theme === 'dark' 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-black text-white hover:bg-black/90'
              }`}
              onClick={() => window.open('https://github.com/MayankSingh04?tab=repositories', '_blank')}
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={`group px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold touch-manipulation bg-transparent ${
                theme === 'dark'
                  ? 'border-white/30 text-white hover:bg-white hover:text-black'
                  : 'border-black/30 text-black hover:bg-black hover:text-white'
              }`}
              onClick={handleResumeDownload}
            >
              <Download className={`mr-2 h-4 w-4 sm:h-5 sm:w-5 ${
                theme === 'dark' 
                  ? 'text-white group-hover:text-black' 
                  : 'text-black group-hover:text-white'
              }`} />
              <span className={`${
                theme === 'dark' 
                  ? 'text-white group-hover:text-black' 
                  : 'text-black group-hover:text-white'
              }`}>Download Resume</span>
            </Button>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex items-center space-x-4 sm:space-x-6">
              <motion.a
                href="https://github.com/MayankSingh04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 touch-manipulation ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-black'
                    : 'bg-black/10 border-black/20 text-black hover:bg-black hover:text-white'
                } border`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/mayanksinghdhami"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 touch-manipulation ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-black'
                    : 'bg-black/10 border-black/20 text-black hover:bg-black hover:text-white'
                } border`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              
              <motion.a
                href="mailto:mayanksinghdhami@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 touch-manipulation ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-black'
                    : 'bg-black/10 border-black/20 text-black hover:bg-black hover:text-white'
                } border`}
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/mayanksinghdhami"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 touch-manipulation ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-black'
                    : 'bg-black/10 border-black/20 text-black hover:bg-black hover:text-white'
                } border`}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero