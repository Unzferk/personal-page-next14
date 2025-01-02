import { ThemeProvider } from '@/components/ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout(props: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(props.params.locale as any)) {
    notFound()
  }

  setRequestLocale(props.params.locale)

  const messages = await getMessages()
  return (
    <html lang={props.params.locale} className="h-full antialiased">
      <body className="flex min-h-full antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            themes={['dark', 'light']}
          >
            <div className="w-full">{props.children}</div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
