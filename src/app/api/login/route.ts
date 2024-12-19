import { NextResponse } from 'next/server';
import type { LoginRequest, LoginResponse } from '@/types/api';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const body: LoginRequest = await request.json();
    const { email, password } = body;

    // TODO: Replace with actual authentication logic
    if (email && password) {
      // Generate JWT token remove these and read token from the login response
      const token = sign({ email }, 'your-secret-key', { expiresIn: '7d' });

      const response: LoginResponse = {
        success: true,
        token,
      };

      return new NextResponse(JSON.stringify(response), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new NextResponse(
      JSON.stringify({ success: false, message: 'Invalid credentials' }),
      { status: 401 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Internal server error' }),
      { status: 500 }
    );
  }
}
