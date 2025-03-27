'use client'
import { useState } from 'react'
import { CertificationInfo } from '@/lib/definitions'
import { CardFooter, CardTitle } from '../ui/card'
import { ImageViewer } from './ImageViewer'
import { Link } from '@/i18n/routing'
import { Button } from '../ui/button'

import { useTranslations } from 'next-intl'

export default function CertificationCard({
  certification,
}: {
  certification: CertificationInfo
}) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleBody = () => {
    setIsOpen((prev) => !prev)
  }
  const t = useTranslations('VerifyButton')

  return (
    <div className="overflow-hidden rounded-lg shadow">
      <div
        className="header-card cursor-pointer bg-secondary px-4 py-5 sm:px-6"
        onClick={toggleBody}
      >
        <CardTitle className="text-xl"> {`${certification.title}`}</CardTitle>
      </div>

      <div
        className={`body-card flex flex-col gap-2 px-4 py-5 transition-all duration-500 ease-in-out sm:p-6 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        {certification.image && (
          <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <ImageViewer image={certification.image} />
            <CardFooter className="text-center text-primary">
              <Button variant="outline">
                <Link title="Verify!" href={certification.link} target="_blank">
                  {t('title')}
                </Link>
              </Button>
            </CardFooter>
          </div>
        )}
      </div>
    </div>
  )
}
