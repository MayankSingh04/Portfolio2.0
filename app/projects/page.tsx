import { Metadata } from 'next'
import Projects from '@/components/sections/Projects'
import SideNavigation from '@/components/SideNavigation'
import PageNavigation from '@/components/PageNavigation'

export const metadata: Metadata = {
  title: 'Projects - Mayank Singh Dhami',
  description: 'Projects by Mayank Singh Dhami - cloud infrastructure, data pipelines, and web applications built with AWS, Terraform, and Python.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20 sm:pb-24">
      <SideNavigation />
      <div className="ml-0 sm:ml-20">
        <PageNavigation 
          title="Projects" 
          subtitle="Things I've built" 
          theme="dark"
        />
        <div className="pt-4 sm:pt-8">
          <Projects />
        </div>
      </div>
    </main>
  )
}
