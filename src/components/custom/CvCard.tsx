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
        <div className="flex flex-row flex-wrap justify-between gap-2">
          <div
            className={`flex flex-col gap-y-2 text-justify sm:w-[100%] lg:w-[30%]`}
          >
            <div className="flex w-full justify-center font-medium text-primary">
              ABOUT
            </div>
            <Markdown>{cv.about}</Markdown>
          </div>
          <div className={`text-justify sm:w-[100%] lg:w-[30%]`}>
            <div className="flex w-full justify-center font-medium text-primary">
              FRONTEND
            </div>
            <Markdown>{cv.frontend}</Markdown>
          </div>
          <div className={`text-justify sm:w-[100%] lg:w-[30%]`}>
            <div className="flex w-full justify-center font-medium text-primary">
              BACKEND
            </div>
            <Markdown>{cv.backend}</Markdown>
          </div>
        </div>
        {cv.imgs && (
          <div className="flex w-full items-center justify-center">
            <CarouselCV images={cv.imgs} />
          </div>
        )}
        <div className="bg-accent">
          <ul>
            <li className="font-medium">Tools - Technologies - Frameworks:</li>
            <li>{cv.tools}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
