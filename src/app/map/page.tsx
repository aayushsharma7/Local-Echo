"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OldMapPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/feed/map');
  }, [router]);
  return null;
}