'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, ArrowRight, Download, Mail, Phone, MapPin, Github, Linkedin, Twitter, Music } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Introduction = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentTrack = {
    title: "The night we met",
    artist: "Lord Huron",
    duration: "3:29",
    isPlaying: isPlaying
  }

  useEffect(() => {
    const audio = document.getElementById('background-music') as HTMLAudioElement
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime)
      const updateDuration = () => setDuration(audio.duration)
      
      audio.addEventListener('timeupdate', updateTime)
      audio.addEventListener('loadedmetadata', updateDuration)
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime)
        audio.removeEventListener('loadedmetadata', updateDuration)
      }
    }
  }, [])

  const togglePlay = () => {
    const newPlayingState = !currentTrack.isPlaying
    setIsPlaying(newPlayingState)
    
    const audio = document.getElementById('background-music') as HTMLAudioElement
    if (audio) {
      if (newPlayingState) {
        audio.play().catch(console.error)
      } else {
        audio.pause()
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/MayankSDhami_BTECH.pdf'
    link.download = 'Mayank_Singh_Dhami_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="introduction" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Audio Element */}
      <audio 
        id="background-music" 
        loop 
        preload="metadata"
        className="hidden"
      >
        <source src="/music/The Night We Met.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex items-center py-20">
          <div className="w-full">
            
            {/* Main Content - Perfect Side by Side Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
              
              {/* Left Side - Round Profile Picture */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <div className="w-80 h-80 relative group">
                  <Image
                    src="/profile-picture.jpg"
                    alt="Mayank Singh Dhami"
                    fill
                    className="object-cover rounded-full border-4 border-white/20 group-hover:border-white/40 transition-all duration-700 group-hover:scale-105 shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </motion.div>

              {/* Right Side - Engineer Tinkerer Trader */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 max-w-2xl"
              >
                <div className="space-y-8">
                  {/* Main Heading */}
                  <div className="space-y-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-6xl lg:text-8xl font-extralight text-white leading-[0.8] tracking-tight"
                    >
                      <motion.div 
                        className="block"
                        whileHover={{ scale: 1.05, x: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        Engineer.
                      </motion.div>
                      <motion.div 
                        className="block text-white/80"
                        whileHover={{ scale: 1.05, x: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        Tinkerer.
                      </motion.div>
                      <motion.div 
                        className="block text-white/60"
                        whileHover={{ scale: 1.05, x: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        Trader.
                      </motion.div>
                    </motion.h2>
                  </div>

                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h1 className="text-3xl lg:text-4xl font-light text-white/90 leading-tight tracking-tight">
                      Mayank Singh Dhami
                    </h1>
                    <div className="w-24 h-px bg-gradient-to-r from-white/60 to-transparent mt-4"></div>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-4"
                  >
                    <p className="text-xl text-white/80 leading-relaxed">
                      CS student in my 8th semester. I build web applications, work with cloud infrastructure, and write code in Python, Java, and other languages.
                    </p>
                    <p className="text-lg text-white/60 leading-relaxed">
                      Also do some trading on the side, which helps me think about risk and systems differently. Open to all kinds of opportunities.
                    </p>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">mayanksinghdhami7@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">+919012176321</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Haldwani, India</span>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex space-x-4"
                  >
                    <a 
                      href="https://github.com/mayanksinghdhami" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/mayanksinghdhami" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="https://twitter.com/mayanksinghdhami" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button 
                      size="lg" 
                      className="group bg-white text-black hover:bg-white/90 border-0 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      onClick={() => window.location.href = '/projects'}
                    >
                      <span>View My Work</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="group border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      onClick={handleResumeDownload}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      <span>Download Resume</span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Music Player - Fixed and Functional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 max-w-md mx-auto"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300"
                        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                      >
                        <Music className="h-5 w-5 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Currently playing</div>
                        <div className="text-white font-medium text-lg">{currentTrack.title}</div>
                        <div className="text-sm text-white/60">{currentTrack.artist}</div>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={togglePlay}
                        size="sm"
                        className="p-4 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-white to-white/80 h-2 rounded-full relative"
                        style={{ width: `${progressPercentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <motion.div
                          className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full -mt-0.5 shadow-lg"
                          animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                          transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                        />
                      </motion.div>
                    </div>
                    <div className="flex justify-between text-sm text-white/60">
                      <span className="font-mono">{formatTime(currentTime)}</span>
                      <span className="font-mono">{currentTrack.duration}</span>
                    </div>
                  </div>

                  {/* Visualizer */}
                  {isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 flex items-end justify-center space-x-1 h-8"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-white/60 rounded-full"
                          animate={{
                            height: [4, 20, 4],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction