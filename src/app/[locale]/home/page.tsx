type Props = {
  params: { locale: string }
  children: React.ReactNode
}

export default async function Home({ params: { locale }, children }: Props) {
  return <>{children}</>
}
