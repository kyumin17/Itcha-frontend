import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};

const protectedRoutes: string[] = [];
const publicRoutes: string[] = ['/login', '/signup'];

export const middleware = async (req: NextRequest) => {
  const token =  await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const currentPath = req.nextUrl.pathname;
  console.log(token);

  if (!token && protectedRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL('/signup', req.nextUrl.origin));
  }

  if (token && publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL('/', req.nextUrl.origin));
  }
  
  return NextResponse.next();
};