import CvCard from '@/components/custom/CvCard'
import { curriculum, curriculumES } from '@/data/curriculum'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fernando Unzueta - Main Projects',
  description:
    'Fernando Unzueta - The list of my main projects based on different tech stacks like React, NextJS, Java, NestJS, Javascript, Typescript and more',
  keywords: [
    'Fernando Unzueta',
    'Fernando Unzueta Developer',
    'Fernando Unzueta React',
    'Fernando Unzueta dev',
    'devunz',
    'FernandoUnzueta',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Fernando Unzueta - Main Projects Section',
    description: "Explore Fernando Unzueta's main projects section.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/en/home/projects`,
  },
}

type Props = {
  params: { locale: string }
}

export default function ProjectsPage({ params: { locale } }: Props) {
  return (
    <div className="flex flex-col gap-y-8 divide-y p-2 sm:mt-4 lg:mt-8">
      {locale === 'en'
        ? curriculum.map((item) => <CvCard key={item.title} cv={item} />)
        : curriculumES.map((item) => <CvCard key={item.title} cv={item} />)}
    </div>
  )
}
