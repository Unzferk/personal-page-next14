import { type Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Their Side',
    default:
      'Their Side - Conversations with the most tragically misunderstood people of our time',
  },
  description:
    'Conversations with the most tragically misunderstood people of our time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <body className="flex min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['dark', 'light']}
        >
          <div className="w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
