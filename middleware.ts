import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const isLogged = req.cookies.get('admin_auth')?.value === '1';
    if (!isLogged && !pathname.startsWith('/admin/login')) {
      const url = req.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*', '/api/admin/:path*'] };
