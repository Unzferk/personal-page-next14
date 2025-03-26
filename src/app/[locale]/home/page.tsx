import CvCard from '@/components/custom/CvCard'
import { LanguageToggle } from '@/components/LanguageToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { curriculum, curriculumES } from '@/data/curriculum'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
  params: { locale: string }
}

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const t = await getTranslations('Home')
  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <div className="flex h-full w-full flex-row justify-between px-6">
        <h1 className="text-2xl font-bold leading-7 text-primary">
          {t('title')}
        </h1>
        <div className="flex flex-row gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 divide-y p-2 sm:mt-4 lg:mt-8">
        {locale === 'en'
          ? curriculum.map((item) => <CvCard key={item.title} cv={item} />)
          : curriculumES.map((item) => <CvCard key={item.title} cv={item} />)}
      </div>
    </div>
  )
}
