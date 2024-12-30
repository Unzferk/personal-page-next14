'use client'

import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CardImgs } from '@/lib/definitions'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export function CarouselCV({ images }: { images: CardImgs[] }) {
  return (
    <Carousel className="w-full max-w-[50%]">
      <CarouselContent className="-ml-1">
        {images.map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card className="flex aspect-square items-center justify-center">
                <Zoom>
                  <img
                    src={_.img}
                    alt="img"
                    className="flex h-full w-full items-center justify-center object-cover"
                  ></img>
                </Zoom>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
