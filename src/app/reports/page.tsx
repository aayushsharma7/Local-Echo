"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OldReportsPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/feed/reports');
  }, [router]);
  return null;
}
