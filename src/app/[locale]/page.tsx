import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Fernando Unzueta - Portfolio',
  description: 'Redirecting to the main projects page.',
  keywords: [
    'Fernando Unzueta',
    'Fernando Unzueta Developer',
    'Fernando Unzueta React',
    'Fernando Unzueta dev',
    'devunz',
    'FernandoUnzueta',
  ],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Fernando Unzueta - Portfolio',
    description: 'Explore the main projects section.',
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/en/home/projects`,
    siteName: 'Fernando Unzueta',
  },
  alternates: {
    canonical:
      `${process.env.NEXT_PUBLIC_PAGE_URL}/en/home/projects` ||
      '/en/home/project',
  },
}
const LocalePage = () => {
  redirect('/home/projects')
}

export default LocalePage
