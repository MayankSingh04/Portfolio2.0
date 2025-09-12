'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  MessageSquare
} from 'lucide-react'

const SideNavigation = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('introduction')

  const navigationItems = [
    { id: 'introduction', label: 'Intro', icon: Home, path: '/' },
    { id: 'about', label: 'About', icon: User, path: '/about' },
    { id: 'skills', label: 'Skills', icon: Code, path: '/skills' },
    { id: 'projects', label: 'Projects', icon: Briefcase, path: '/projects' },
    { id: 'contact', label: 'Contact', icon: MessageSquare, path: '/contact' }
  ]

  useEffect(() => {
    // Set active section based on current pathname
    if (pathname === '/') {
      setActiveSection('introduction')
    } else {
      const section = pathname.substring(1) // Remove the leading slash
      setActiveSection(section)
    }
  }, [pathname])

  const navigateToPage = (sectionId: string) => {
    const item = navigationItems.find(nav => nav.id === sectionId)
    if (item) {
      router.push(item.path)
    }
  }



  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4">
      {/* Enhanced Mac-style dock */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-8 sm:py-5 mb-4 sm:mb-6 shadow-2xl max-w-fit"
      >
        <div className="flex items-center space-x-3 sm:space-x-6">
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
              className={`relative p-2 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 touch-manipulation ${
                activeSection === item.id
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:bg-white/10 hover:shadow-md'
              }`}
              title={item.label}
            >
              <item.icon className="h-4 w-4 sm:h-6 sm:w-6" />
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