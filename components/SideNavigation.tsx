'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  MessageSquare
} from 'lucide-react'

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('introduction')

  const navigationItems = [
    { id: 'introduction', label: 'Intro', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ]

  useEffect(() => {
    // Set active section based on current page
    const currentPath = window.location.pathname
    if (currentPath === '/') {
      setActiveSection('introduction')
    } else {
      const section = currentPath.substring(1) // Remove the leading slash
      setActiveSection(section)
    }
  }, [])

  const navigateToPage = (sectionId: string) => {
    if (sectionId === 'introduction') {
      window.location.href = '/'
    } else {
      window.location.href = `/${sectionId}`
    }
  }



  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      {/* Enhanced Mac-style dock */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl px-8 py-5 mb-6 shadow-2xl"
      >
        <div className="flex items-center space-x-6">
          {/* Navigation Items */}
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              onClick={() => navigateToPage(item.id)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-2xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:bg-white/10 hover:shadow-md'
              }`}
              title={item.label}
            >
              <item.icon className="h-6 w-6" />
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          
        </div>
      </motion.div>
    </div>
  )
}

export default SideNavigation