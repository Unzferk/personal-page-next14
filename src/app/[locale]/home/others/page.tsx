import CvCard from '@/components/custom/CvCard'
import { others, othersES } from '@/data/others'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fernando Unzueta - Others',
  description:
    'Fernando Unzueta - The list of my secondary projects based on different tech stacks like React, NextJS, Java, NestJS, Javascript, Typescript and more',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Fernando Unzueta - Others Section',
    description: "Explore Fernando Unzueta's others section.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/en/home/others`,
  },
}

type Props = {
  params: { locale: string }
}

export default function OthersPage({ params: { locale } }: Props) {
  return (
    <div className="flex flex-col gap-y-8 divide-y p-2 sm:mt-4 lg:mt-8">
      {locale === 'en'
        ? others.map((item) => <CvCard key={item.title} cv={item} />)
        : othersES.map((item) => <CvCard key={item.title} cv={item} />)}
    </div>
  )
}
