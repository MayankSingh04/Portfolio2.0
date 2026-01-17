import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SideNavigation from '@/components/SideNavigation'
import CloudStatus from '@/components/CloudStatus'
import MusicPlayer from '@/components/MusicPlayer'

export const metadata: Metadata = {
  title: 'Mayank Singh Dhami - Computer Science Student & Developer',
  description: 'CS student in 8th semester. Building web applications, working with cloud infrastructure, and open to all opportunities.',
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
