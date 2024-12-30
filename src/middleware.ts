'use server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    let response: NextResponse = NextResponse.next();

    return response;
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
};
