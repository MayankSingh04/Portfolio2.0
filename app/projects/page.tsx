import { Metadata } from 'next'
import Projects from '@/components/sections/Projects'
import SideNavigation from '@/components/SideNavigation'
import PageNavigation from '@/components/PageNavigation'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export const metadata: Metadata = {
  title: 'Projects - Mayank Singh Dhami',
  description: 'Discover the innovative projects and case studies by Mayank Singh Dhami, showcasing expertise in cloud infrastructure, data processing, and modern web applications.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20 sm:pb-24">
      {/* Theme Toggle */}
      <div className="fixed top-4 left-4 z-50 theme-toggle-mobile">
        <ThemeToggle />
      </div>
      
      <SideNavigation />
      <div className="ml-0 sm:ml-20">
        <PageNavigation 
          title="Projects" 
          subtitle="Innovative solutions and case studies" 
          theme="dark"
        />
        <div className="pt-4 sm:pt-8">
          <Projects />
        </div>
      </div>
    </main>
  )
}
