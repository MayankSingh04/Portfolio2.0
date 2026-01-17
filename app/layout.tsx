import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono, Orbitron, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mayank Singh Dhami - Computer Science Student & Developer',
  description: 'CS student in 8th semester. Building web applications, working with cloud infrastructure, and open to all opportunities.',
  keywords: ['Cloud Engineer', 'AWS', 'Terraform', 'Python', 'DevOps', 'Infrastructure', 'Computer Science'],
  authors: [{ name: 'Mayank Singh Dhami' }],
  creator: 'Mayank Singh Dhami',
  metadataBase: new URL('https://mayanksinghdhami.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayanksinghdhami.dev',
    title: 'Mayank Singh Dhami - CS Student & Developer',
    description: 'CS student in 8th semester. Building web applications, working with cloud infrastructure, and open to all opportunities.',
    siteName: 'Mayank Singh Dhami Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Singh Dhami - Cloud Engineer',
    description: 'CS student in 8th semester. Building web applications and open to all opportunities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} ${orbitron.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {/* Skip to Content Button for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
