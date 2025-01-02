import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname

  if (!['/en', '/es'].some((lang) => currentPath.startsWith(lang))) {
    const preferredLanguage = 'en'
    return NextResponse.redirect(
      new URL(`/${preferredLanguage}${currentPath}`, request.url),
    )
  }
  return NextResponse.next()
}
