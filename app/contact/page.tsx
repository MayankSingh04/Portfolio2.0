import { Metadata } from 'next'
import Contact from '@/components/sections/Contact'
import SideNavigation from '@/components/SideNavigation'
import PageNavigation from '@/components/PageNavigation'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export const metadata: Metadata = {
  title: 'Contact - Mayank Singh Dhami',
  description: 'Get in touch with Mayank Singh Dhami for cloud engineering opportunities, collaborations, or to discuss your next project.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 sm:pb-24">
      {/* Theme Toggle */}
      <div className="fixed top-4 left-4 z-50 theme-toggle-mobile">
        <ThemeToggle />
      </div>
      
      <SideNavigation />
      <div className="ml-0 sm:ml-20">
        <PageNavigation 
          title="Contact" 
          subtitle="Let's build something amazing together"
          theme="dark"
        />
        <div className="pt-4 sm:pt-8">
          <Contact />
        </div>
      </div>
    </main>
  )
}
