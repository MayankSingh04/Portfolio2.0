import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SideNavigation from '@/components/SideNavigation'
import CloudStatus from '@/components/CloudStatus'
import MusicPlayer from '@/components/MusicPlayer'

export const metadata: Metadata = {
  title: 'Mayank Singh Dhami - Cloud Engineer & Computer Science Student',
  description: 'Cloud Engineer specializing in AWS, Terraform, and Python. Building infrastructure and web applications.',
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background theme-transition pb-20 sm:pb-24">
      {/* Hero Section */}
      <Hero />

      {/* Cloud Status Widget */}
      <CloudStatus />

      {/* Music Player */}
      <MusicPlayer />

      {/* Enhanced Bottom Navigation */}
      <SideNavigation />
    </main>
  )
}
