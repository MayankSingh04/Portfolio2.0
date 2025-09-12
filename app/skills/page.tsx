import { Metadata } from 'next'
import Skills from '@/components/sections/Skills'
import SideNavigation from '@/components/SideNavigation'
import PageNavigation from '@/components/PageNavigation'

export const metadata: Metadata = {
  title: 'Skills - Mayank Singh Dhami',
  description: 'Explore the technical skills and certifications of Mayank Singh Dhami, including AWS, Terraform, Python, and modern web technologies.',
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20 sm:pb-24">
      <SideNavigation />
      <div className="ml-0 sm:ml-20">
        <PageNavigation 
          title="Skills" 
          subtitle="Technical expertise and certifications" 
          theme="dark"
        />
        <div className="pt-4 sm:pt-8">
          <Skills />
        </div>
      </div>
    </main>
  )
}
