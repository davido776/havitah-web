import pool from '@/lib/db';
import { sendEarlyAccessWelcome } from '@/lib/email';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: { email?: string } | null = null;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const email = (payload?.email || '').trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return Response.json(
      { message: 'Please enter a valid email address.' },
      { status: 422 }
    );
  }

  try {
    const [existing] = await pool.query<{
      id: number;
      email: string;
    }[]>(
      'SELECT id, email FROM early_access WHERE email = ? LIMIT 1',
      [email]
    );

    if (existing.length > 0) {
      return Response.json(
        {
          message: "Welcome back! You're already part of our exclusive community.",
          already_registered: true,
        },
        { status: 200 }
      );
    }

    await pool.query(
      'INSERT INTO early_access (email, created_at, updated_at) VALUES (?, NOW(), NOW())',
      [email]
    );

    try {
      await sendEarlyAccessWelcome(email);
    } catch (error) {
      console.error('Failed to send welcome email:', error);
    }

    return Response.json(
      {
        message: 'Welcome to the movement! Check your email for exclusive updates.',
        already_registered: false,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Early access registration failed:', error);

    return Response.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
