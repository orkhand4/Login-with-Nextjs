import { createJWT } from '@/lib/auth';

export async function POST(request) {
  const { username, password } = await request.json();

  if (username === 'ehmed' && password === 'ehmed123') {
    const token = await createJWT({ username });
    
    const res = new Response(JSON.stringify({ message: 'Logged in:)' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600`
      }
    });
    return res;
  }
  
  return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
}
