'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverRotate?: number
  hoverY?: number
  hoverX?: number
}

export const HoverCard = ({ 
  children, 
  className = '',
  hoverScale = 1.05,
  hoverRotate = 0,
  hoverY = -5,
  hoverX = 0
}: HoverCardProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale,
        rotate: hoverRotate,
        y: hoverY,
        x: hoverX,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export const MagneticCard = ({ 
  children, 
  className = '',
  strength = 0.3
}: HoverCardProps & { strength?: number }) => {
  return (
    <motion.div
      className={className}
      whileHover="hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      variants={{
        hover: {
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      }}
    >
      {children}
    </motion.div>
  )
}




