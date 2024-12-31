import { CardCvInfo } from '@/lib/definitions'
import { CardDescription, CardTitle } from '../ui/card'
import { CarouselCV } from '../home/CarouselCv'
import Markdown from 'react-markdown'

export default function CvCard({ cv }: { cv: CardCvInfo }) {
  return (
    <div className="divide-y overflow-hidden rounded-lg border-primary shadow">
      <div className="bg-secondary px-4 py-5 sm:px-6">
        <CardTitle className="text-xl"> {`${cv.title} ${cv.year}`}</CardTitle>
        <CardDescription className="text-primary">
          {cv.position}
        </CardDescription>
      </div>
      <div className="flex flex-col gap-2 px-4 py-5 sm:p-6">
        <Markdown>{cv.accomplishments}</Markdown>
        <div className="bg-accent">
          <ul>
            <li className="font-medium">Tools - Technologies - Frameworks:</li>
            <li>{cv.tools}</li>
          </ul>
        </div>
        {cv.imgs && (
          <div className="flex w-full items-center justify-center">
            <CarouselCV images={cv.imgs} />
          </div>
        )}
      </div>
    </div>
  )
}
