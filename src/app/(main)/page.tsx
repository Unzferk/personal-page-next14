import CvCard from '@/components/custom/CvCard'
import { ThemeToggle } from '@/components/ThemeToggle'
import { curriculum } from '@/data/curriculum'

export default async function Home() {
  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <div className="flex h-full w-full flex-row justify-between px-6">
        <h1 className="text-2xl font-bold leading-7">Summary</h1>
        <ThemeToggle />
      </div>
      <div className="flex flex-col gap-y-8 divide-y divide-slate-100 p-2 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
        {curriculum.map((item) => (
          <CvCard cv={item} />
        ))}
      </div>
    </div>
  )
}
