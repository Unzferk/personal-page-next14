'use client'
import { useState } from 'react'
import { CardCvInfo } from '@/lib/definitions'
import { CardDescription, CardTitle } from '../ui/card'
import { CarouselCV } from '../home/CarouselCv'
import Markdown from 'react-markdown'

export default function CvCard({ cv }: { cv: CardCvInfo }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleBody = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="overflow-hidden rounded-lg shadow">
      <div
        className="header-card cursor-pointer bg-secondary px-4 py-5 sm:px-6"
        onClick={toggleBody}
      >
        <CardTitle className="flex justify-between text-xl">
          {`${cv.title}`}
          {/* <div className="text-xl">{`${cv.title}`}</div> */}
          <div className="text-xl">{`${cv.year}`}</div>
        </CardTitle>
        <CardDescription className="text-primary">
          <Markdown>{cv.position}</Markdown>
        </CardDescription>
      </div>

      <div
        className={`body-card flex flex-col gap-2 px-4 py-5 transition-all duration-500 ease-in-out sm:p-6 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="flex flex-row flex-wrap justify-between gap-2">
          <div
            className={`flex flex-col gap-y-2 text-justify sm:w-[100%] lg:w-[30%]`}
          >
            <div className="flex w-full justify-center font-medium text-primary">
              ABOUT
            </div>
            <Markdown>{cv.about}</Markdown>
          </div>
          <div
            className={`flex flex-col gap-y-2 text-justify sm:w-[100%] lg:w-[30%]`}
          >
            <div className="flex w-full justify-center font-medium text-primary">
              FRONTEND
            </div>
            <Markdown>{cv.frontend}</Markdown>
          </div>
          <div
            className={`flex flex-col gap-y-2 text-justify sm:w-[100%] lg:w-[30%]`}
          >
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
