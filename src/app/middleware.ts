import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/api/v1/auth/login') {
        return NextResponse.next();
    }

    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
        return new NextResponse(
            JSON.stringify({ message: 'Unauthorized' }),
            {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    try {
        // Basic token structure validation with jwt-decode
        const token = authHeader.split(' ')[1];
        const decoded = jwtDecode(token);

        // Check if token is expired
        const exp = decoded.exp;
        if (exp && Date.now() >= exp * 1000) {
            throw new Error('Token expired');
        }

        return NextResponse.next();
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Invalid token' }),
            {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}

export const config = {
    matcher: '/api/:path*',
};
