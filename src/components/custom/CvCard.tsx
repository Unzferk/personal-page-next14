import { CardCvInfo } from '@/lib/definitions'
import { CardDescription, CardTitle } from '../ui/card'

export default function CvCard({ cv }: { cv: CardCvInfo }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <CardTitle> {`${cv.title} ${cv.year}`}</CardTitle>
        <CardDescription>{cv.position}</CardDescription>
      </div>
      <div className="flex flex-col gap-2 px-4 py-5 sm:p-6">
        <div>{cv.accomplishments}</div>
        <div>
          <ul>
            <li className="font-medium">Tools - Technologies - Frameworks:</li>
            <li>{cv.tools}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
