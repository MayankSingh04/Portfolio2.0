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
  title: 'Mayank Singh Dhami - Cloud Engineer & Computer Science Student',
  description: 'Cloud Engineer specializing in AWS, Terraform, and Python. Building scalable infrastructure and modern applications with AI-powered development.',
  keywords: ['Cloud Engineer', 'AWS', 'Terraform', 'Python', 'DevOps', 'Infrastructure', 'Computer Science'],
  authors: [{ name: 'Mayank Singh Dhami' }],
  creator: 'Mayank Singh Dhami',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayanksinghdhami.dev',
    title: 'Mayank Singh Dhami - Cloud Engineer',
    description: 'Cloud Engineer specializing in AWS, Terraform, and Python. Building scalable infrastructure and modern applications.',
    siteName: 'Mayank Singh Dhami Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Singh Dhami - Cloud Engineer',
    description: 'Cloud Engineer specializing in AWS, Terraform, and Python.',
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
