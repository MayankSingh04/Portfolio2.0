'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentTrack = {
    title: "The Night We Met",
    artist: "Lord Huron"
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = document.getElementById('background-music') as HTMLAudioElement
    if (!audio || duration === 0) return

    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    const newTime = percentage * duration
    
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  useEffect(() => {
    // Show player after a delay
    const timer = setTimeout(() => {
      setShowPlayer(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Update progress bar in real-time
  useEffect(() => {
    const audio = document.getElementById('background-music') as HTMLAudioElement
    if (!audio) return

    const updateProgress = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
    }

    const handleTimeUpdate = () => {
      updateProgress()
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [isPlaying])

  const toggleMusic = async () => {
    if (isLoading) return
    
    const newPlayingState = !isPlaying
    setIsPlaying(newPlayingState)

    let audio = document.getElementById('background-music') as HTMLAudioElement
    if (!audio) {
      setIsLoading(true)
      audio = document.createElement('audio')
      audio.id = 'background-music'
      audio.src = '/music/The Night We Met.mp3'
      audio.loop = true
      audio.volume = 0.4
      audio.preload = 'auto'
      document.body.appendChild(audio)

      // Add event listeners
      audio.addEventListener('loadstart', () => {
        console.log('Music loading...')
      })

      audio.addEventListener('canplay', () => {
        console.log('Music ready to play')
        setIsLoading(false)
      })

      audio.addEventListener('error', (e) => {
        console.error('Music error:', e)
        setIsPlaying(false)
        setIsLoading(false)
      })

      audio.addEventListener('ended', () => {
        console.log('Music ended')
        setIsPlaying(false)
      })
    }

    try {
      if (newPlayingState) {
        // Ensure audio is loaded before playing
        if (audio.readyState >= 2) {
          await audio.play()
          console.log('Music started playing')
        } else {
          // Wait for audio to load
          audio.addEventListener('canplay', async () => {
            try {
              await audio.play()
              console.log('Music started playing after load')
            } catch (err) {
              console.error('Play error after load:', err)
              setIsPlaying(false)
            }
          }, { once: true })
        }
      } else {
        audio.pause()
        console.log('Music paused')
      }
    } catch (error) {
      console.error('Music play error:', error)
      setIsPlaying(false)
    }
  }

  if (!showPlayer) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed z-40"
      style={{ 
        top: '1rem',
        right: '1rem',
        zIndex: 40
      }}
    >
      {/* Desktop/Tablet Version */}
      <div className="backdrop-blur-xl border border-white/20 rounded-2xl p-2 sm:p-3 shadow-2xl w-[200px] sm:w-[260px] md:w-[280px] sm:min-w-[260px] sm:max-w-[320px] sm:p-4 hidden md:block bg-white/10">
        {/* Track Info */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <div className="text-center">
            <h4 className="text-xs sm:text-sm font-semibold truncate text-white">
              {currentTrack.title}
            </h4>
            <p className="text-xs truncate text-gray-300">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
          <button className="p-1 sm:p-1.5 md:p-2 rounded-full transition-colors touch-manipulation hover:bg-white/10">
            <SkipBack className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </button>
          
          <motion.button
            onClick={toggleMusic}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            disabled={isLoading}
            className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors touch-manipulation bg-white hover:bg-gray-100 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 rounded-full animate-spin border-black/30 border-t-black" />
            ) : isPlaying ? (
              <Pause className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
            ) : (
              <Play className="h-3 w-3 sm:h-4 sm:w-4 ml-0.5 text-black" />
            )}
          </motion.button>
          
          <button className="p-1 sm:p-1.5 md:p-2 rounded-full transition-colors touch-manipulation hover:bg-white/10">
            <SkipForward className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 sm:mt-3 md:mt-4">
          <div 
            className="w-full rounded-full h-1 cursor-pointer hover:h-2 transition-all duration-200 touch-manipulation bg-white/20"
            onClick={handleProgressClick}
          >
            <div
              className="h-full rounded-full transition-all duration-100 bg-white"
              style={{ 
                width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' 
              }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1 text-gray-300">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Mobile Version - Simple */}
      <div className="backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl w-[140px] md:hidden bg-white/10">
        {/* Song Name */}
        <div className="text-center mb-3">
          <h4 className="text-xs font-semibold truncate text-white">
            {currentTrack.title}
          </h4>
        </div>

        {/* Play Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={toggleMusic}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            disabled={isLoading}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors touch-manipulation bg-white hover:bg-gray-100 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 rounded-full animate-spin border-black/30 border-t-black" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4 text-black" />
            ) : (
              <Play className="h-4 w-4 ml-0.5 text-black" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer