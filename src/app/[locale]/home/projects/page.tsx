import CvCard from '@/components/custom/CvCard'
import { curriculum, curriculumES } from '@/data/curriculum'

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
