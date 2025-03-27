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

export type CertificationInfo = {
  title: string
  image: string
  link: string
}

export type CardImgs = {
  img: string
}
