import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Redirect www and alternate domains to canonical valricoagent.com
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const { pathname, search } = request.nextUrl;

  // Redirect www.valricoagent.com → valricoagent.com
  if (host.startsWith('www.')) {
    return NextResponse.redirect(
      new URL(`https://valricoagent.com${pathname}${search}`),
      301
    );
  }

  return NextResponse.next();
}

// Only run on real page requests, skip static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logos|images|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)',
  ],
};
