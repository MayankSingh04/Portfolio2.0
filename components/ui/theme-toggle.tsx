"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full glow-effect theme-transition"
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="theme-switch-animation"
            >
              <Sun className="h-5 w-5 text-yellow-400" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="theme-switch-animation"
            >
              <Moon className="h-5 w-5 text-slate-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}
