import CertificationCard from '@/components/custom/CertificationCard'
import { CertificationInfo } from '@/lib/definitions'

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
