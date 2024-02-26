import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession, updateSession } from './libs/auth';

export async function middleware(request: NextRequest) {
  const session = await getSession()
  
  if (!session && request.nextUrl.pathname !== '/auth') {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return await updateSession(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}