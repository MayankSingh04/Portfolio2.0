import { Metadata } from 'next'
import About from '@/components/sections/About'
import SideNavigation from '@/components/SideNavigation'
import PageNavigation from '@/components/PageNavigation'

export const metadata: Metadata = {
  title: 'About - Mayank Singh Dhami',
  description: 'Learn more about Mayank Singh Dhami, a Cloud Engineer and Computer Science student working with AWS, Terraform, and Python.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20 sm:pb-24">
      <SideNavigation />
      <div className="ml-0 sm:ml-20">
        <PageNavigation 
          title="About" 
          subtitle="From code to cloud" 
          theme="dark"
        />
        <div className="pt-4 sm:pt-8">
          <About />
        </div>
      </div>
    </main>
  )
}
