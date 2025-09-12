import { Metadata } from 'next'
import Projects from '@/components/sections/Projects'
import SideNavigation from '@/components/SideNavigation'
import PageNavigation from '@/components/PageNavigation'

export const metadata: Metadata = {
  title: 'Projects - Mayank Singh Dhami',
  description: 'Discover the innovative projects and case studies by Mayank Singh Dhami, showcasing expertise in cloud infrastructure, data processing, and modern web applications.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SideNavigation />
      <div className="ml-20">
        <PageNavigation 
          title="Projects" 
          subtitle="Innovative solutions and case studies" 
          theme="dark"
        />
        <div className="pt-8">
          <Projects />
        </div>
      </div>
    </main>
  )
}
