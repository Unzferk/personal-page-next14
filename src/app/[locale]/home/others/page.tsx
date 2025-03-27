import CvCard from '@/components/custom/CvCard'
import { others, othersES } from '@/data/others'

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
