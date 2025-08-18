'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Spinner, SpinnerProps } from './ui/shadcn-io/spinner';
import { Separator } from "@/components/ui/separator"
import { MapPinIcon } from 'lucide-react';

type UserDTO = {
  id: string;
  name: string | null;
  username: string;
  email: string | null;
  image: string | null;
  location: string | null;
  bio: string | null;
  createdAt: string; // ISO from JSON
  updatedAt: string; // ISO from JSON
  _count: {
    followers: number;
    following: number;
    posts: number;
  };
};

export default function UserProfileCard() {
    
  const [data, setData] = useState<UserDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/me', { cache: 'no-store' });
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || `Request failed: ${res.status}`);
        }
        const j: UserDTO = await res.json();
        if (mounted) setData(j);
      } catch (e: any) {
        if (mounted) setError(e.message ?? 'Failed to load profile');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <Card className="md:ml-10 bg-card/60 backdrop-blur-sm border-border/50">
        <CardContent className="py-8 text-center text-sm text-muted-foreground">
        <div className='flex flex-col items-center justify-center'>
            <Spinner variant={"bars"} className="text-primary" size={64} />
            <p>Loading your profile…</p>
        </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="md:ml-10 bg-card/60 backdrop-blur-sm border-border/50">
        <CardContent className="py-8 text-center text-sm text-muted-foreground">
          {error || 'Profile not found.'}
        </CardContent>
      </Card>
    );
  }

  const initials = (data.name ?? data.username ?? 'U').slice(0, 2).toUpperCase();

  return (
    <div>
      <Card className="md:ml-10 bg-card/60 backdrop-blur-sm border-border/50">
        <CardContent className="flex flex-col items-center text-center py-4">
          <Avatar className="w-24 h-24 mb-4 border-4 border-primary/50">
            <AvatarImage src={data.image ?? ''} alt={data.name ?? data.username} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold font-headline">{data.name}</h2>
          <p className="text-sm text-muted-foreground">{data.username}</p>
          
            <div className='mt-2 flex flex-row items-center justify-center '>
                <MapPinIcon className='w-4 h-4 mr-2' />
                <p className="text-sm text-muted-foreground">{data.location ?? '—-'}</p>

            </div>
            <Separator className="my-4" />
          
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            {data.bio ?? 'No bio yet.'}
          </p>
          <div className="flex gap-6 my-4">
            <div className="text-center">
              <p className="font-bold text-lg">{data._count.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{data._count.following}</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
            {/* <div className="text-center">
              <p className="font-bold text-lg">{data.posts}</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div> */}
          </div>
          <Button variant="outline" size="sm" className="mt-2">Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
}
