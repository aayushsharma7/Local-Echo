// src/app/api/me/route.ts
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { syncUser, getUserByClerkId } from '@/actions/user.action';

export async function GET() {
  try {
    const cu = await currentUser();
    if (!cu) {
      return NextResponse.json({ error: 'unauthenticated' }, { status: 401 });
    }

    // Ensure a DB row exists for this Clerk user (no-op if it already does)
    await syncUser();

    const user = await getUserByClerkId(cu.id);
    if (!user) {
      return NextResponse.json({ error: 'not_found' }, { status: 404 });
    }

    // Return Prisma-like shape with _count intact
    return NextResponse.json({
      id: user.id,
      name: user.name ?? null,
      username: user.username,
      email: user.email ?? null,
      image: user.image ?? null,
      location: user.location ?? null,
      bio: user.bio ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      _count: {
        followers: user._count?.followers ?? 0,
        following: user._count?.following ?? 0,
        posts: user._count?.posts ?? 0,
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: 'internal_error', details: e?.message ?? 'Unknown error' },
      { status: 500 }
    );
  }
}
