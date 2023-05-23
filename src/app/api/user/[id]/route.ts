import prisma from '@/lib/prima';
import { verifyJwtAccessToken } from '@/lib/jwt';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const accessToken = request.headers.get('Authorization');
  if (!accessToken || !verifyJwtAccessToken(accessToken)) {
    return new Response(JSON.stringify({ error: 'No access token' }), {
      status: 401,
    });
  }
  const userPosts = await prisma.post.findMany({
    where: {
      authorId: +params.id,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(userPosts), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
