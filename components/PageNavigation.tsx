'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

interface PageNavigationProps {
  title: string
  subtitle?: string
  theme?: 'light' | 'dark'
}

const PageNavigation = ({ title, subtitle, theme = 'light' }: PageNavigationProps) => {
  const isDark = theme === 'dark'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-40 backdrop-blur-sm border-b ${
        isDark 
          ? 'bg-black/80 border-white/10' 
          : 'bg-white/80 border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 transition-colors ${
                  isDark 
                    ? 'text-white/60 hover:text-white' 
                    : 'text-black/60 hover:text-black'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back</span>
              </motion.button>
            </Link>
            
            <div className={`h-6 w-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
            
            <div>
              <h1 className={`text-xl font-light ${isDark ? 'text-white' : 'text-black'}`}>{title}</h1>
              {subtitle && (
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>{subtitle}</p>
              )}
            </div>
          </div>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 text-white' 
                  : 'bg-black/5 hover:bg-black/10 text-black'
              }`}
            >
              <Home className="h-4 w-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PageNavigation
