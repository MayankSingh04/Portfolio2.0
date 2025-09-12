'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Cloud, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity,
  X,
  Minimize2,
  Maximize2
} from 'lucide-react'

const CloudStatus = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      name: "Portfolio Website",
      status: "operational",
      uptime: "99.9%",
      responseTime: "45ms",
      icon: Globe,
      description: "Main portfolio site",
      lastIncident: "None"
    },
    {
      name: "Cloud Auditor",
      status: "operational",
      uptime: "99.8%",
      responseTime: "120ms",
      icon: Shield,
      description: "Security monitoring",
      lastIncident: "None"
    },
    {
      name: "Financial Platform",
      status: "development",
      uptime: "99.5%",
      responseTime: "85ms",
      icon: Activity,
      description: "Data processing",
      lastIncident: "Development mode"
    },
    {
      name: "Database Cluster",
      status: "operational",
      uptime: "99.9%",
      responseTime: "25ms",
      icon: Database,
      description: "Primary database",
      lastIncident: "None"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
      case 'development': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-green-800'
      case 'degraded': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800'
      case 'outage': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle
      case 'development': return Clock
      case 'degraded': return AlertCircle
      case 'outage': return AlertCircle
      default: return Clock
    }
  }

  const overallStatus = services.every(s => s.status === 'operational') ? 'operational' : 'degraded'

  return (
    <div id="cloud-status" className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {/* Minimized View - Always Visible */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="h-12 px-4 bg-black/90 backdrop-blur-md border border-white/20 shadow-xl hover:bg-black hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Cloud className="h-5 w-5 mr-2 text-white" />
              <span className="text-sm font-medium text-white">Cloud Status</span>
              <Badge className={`ml-2 ${overallStatus === 'operational' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                {overallStatus === 'operational' ? '✓' : '⚠'}
              </Badge>
            </Button>
          </motion.div>
        )}

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 right-0"
            >
              <Card className="cloud-card w-80 shadow-2xl border-white/20 glow-effect bg-black/95 backdrop-blur-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-space font-semibold flex items-center text-white">
                      <Cloud className="h-5 w-5 mr-2 text-white" />
                      Cloud Status
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpanded(false)}
                        className="h-6 w-6 p-0 hover:bg-white/10 transition-colors text-white"
                      >
                        <Minimize2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className={`${overallStatus === 'operational' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'} text-xs`}>
                      {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Issues Detected'}
                    </Badge>
                    <p className="text-xs text-white/70">
                      {currentTime.toLocaleTimeString()}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {services.map((service, index) => {
                    const StatusIcon = getStatusIcon(service.status)
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors border border-white/20"
                      >
                        <div className="flex items-center space-x-3">
                          <service.icon className="h-4 w-4 text-white" />
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-white">{service.name}</span>
                              <StatusIcon className={`h-3 w-3 ${
                                service.status === 'operational' ? 'text-green-400' : 
                                service.status === 'development' ? 'text-yellow-400' : 'text-red-400'
                              }`} />
                            </div>
                            <p className="text-xs text-white/70">{service.description}</p>
                            <p className="text-xs text-white/70">Last: {service.lastIncident}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-white">{service.uptime}</div>
                          <div className="text-xs text-white/70">{service.responseTime}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                  
                  <div className="pt-3 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-2 rounded-lg bg-white/10">
                        <div className="text-lg font-bold text-white">99.8%</div>
                        <div className="text-xs text-white/70">Uptime</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-white/10">
                        <div className="text-lg font-bold text-white">69ms</div>
                        <div className="text-xs text-white/70">Response</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </div>
  )
}

export default CloudStatus
