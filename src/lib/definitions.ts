export type CardCvInfo = {
  title: string
  year?: string
  position: string
  about: string
  frontend?: string
  backend?: string
  tools: string
  imgs?: CardImgs[]
}

export type CardImgs = {
  img: string
}
