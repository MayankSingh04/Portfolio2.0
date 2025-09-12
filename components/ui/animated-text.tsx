'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

export const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  stagger = 0.1 
}: AnimatedTextProps) => {
  const words = typeof children === 'string' ? children.split(' ') : [children]

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

export const AnimatedLetter = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  stagger = 0.05 
}: AnimatedTextProps) => {
  const letters = typeof children === 'string' ? children.split('') : [children]

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}




