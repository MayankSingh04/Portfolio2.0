import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import CloudStatus from '@/components/CloudStatus'

export const metadata: Metadata = {
  title: 'Mayank Singh Dhami - Cloud Engineer & Computer Science Student',
  description: 'Cloud Engineer specializing in AWS, Terraform, and Python. Building scalable infrastructure and modern applications with AI-powered development.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background theme-transition">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Cloud Status Widget */}
      <CloudStatus />
    </main>
  )
}
