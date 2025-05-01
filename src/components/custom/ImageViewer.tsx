'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Link } from '@/i18n/routing'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export function ImageViewer({
  image,
  className,
}: {
  image: string
  className: string
}) {
  return (
    <Card
      className={`flex aspect-square flex-col items-center justify-center bg-secondary ${className}`}
    >
      <CardContent>
        <Zoom>
          <img
            src={image}
            alt="img"
            className="flex h-full w-full items-center justify-center object-cover"
          ></img>
        </Zoom>
      </CardContent>
    </Card>
  )
}
