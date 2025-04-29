import CertificationCard from '@/components/custom/CertificationCard'
import { CertificationInfo } from '@/lib/definitions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fernando Unzueta - Certifications',
  description:
    'Fernando Unzueta - The list of my certifications which aproves and verify my knowledge on the different tech stacks',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Fernando Unzueta - Certifications Section',
    description: "Explore Fernando Unzueta's Certifications section.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/en/home/certifications`,
  },
}

const certifiactions: CertificationInfo[] = [
  {
    title: 'AWS Cloud Practitioner',
    image: '/images/aws-cp.png',
    link: 'https://www.credly.com/badges/045c827b-59fd-47f4-978f-80c46f8b9ac2/public_url',
  },
]

export default function CertificationsPage() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 gap-y-8 divide-y p-2 px-4 sm:mt-4 lg:mt-8">
      {certifiactions.map((certification, index) => (
        <CertificationCard key={index} certification={certification} />
      ))}
    </div>
  )
}
