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
      className="fixed top-6 right-6 z-40"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl min-w-[280px] max-w-[320px] sm:min-w-[320px]">
        {/* Track Info */}
        <div className="mb-4">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-white truncate">
              {currentTrack.title}
            </h4>
            <p className="text-xs text-gray-300 truncate">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <SkipBack className="h-4 w-4 text-white" />
          </button>
          
          <motion.button
            onClick={toggleMusic}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            disabled={isLoading}
            className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4 text-black" />
            ) : (
              <Play className="h-4 w-4 text-black ml-0.5" />
            )}
          </motion.button>
          
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <SkipForward className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div 
            className="w-full bg-white/20 rounded-full h-1 cursor-pointer hover:h-2 transition-all duration-200"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-white rounded-full transition-all duration-100"
              style={{ 
                width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' 
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-300 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer