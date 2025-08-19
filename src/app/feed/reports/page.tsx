"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { Spinner, type SpinnerProps } from '@/components/ui/shadcn-io/spinner';
import AppHeader from '@/components/AppHeader';
import UnauthorizedAccess from '@/components/UnauthorizedAccess';
import MobileNav from '@/components/MobileNav';
import StatsPanel from '@/components/StatsPanel';
import MyReportsStats from '@/components/MyReportsStats';
import MyReports from '@/components/MyReports';
import UserProfileCard from '@/components/UserProfileCard';
import StatsPanelMy from '@/components/StatsPanelMy';


export default function ReportsPage() {
  // Moved all hook calls to the top of the component
  const [activeMobileTab, setActiveMobileTab] = useState<'feed' | 'map' | 'profile'>('profile');
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const pathname = usePathname();

  // The useEffect hook is also a hook and must be called at the top level
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  

  const handleTabChange = (tab: 'feed' | 'map' | 'profile') => {
    setActiveMobileTab(tab);
    if (tab === 'map') {
      router.push('/feed/map');
    } else if (tab === 'profile') {
      router.push('/feed/reports');
    } else {
      router.push('/feed');
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner variant={'bars'} className='text-primary' size={64} />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-background1">
        <AppHeader />
        <main className="flex-1 container mx-auto">
          <UnauthorizedAccess />
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-6 lg:pb-6 pb-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            <MyReportsStats />
            <UserProfileCard />
          </div>
          <div className="lg:col-span-6">
            <MyReports />
          </div>
          <div className="lg:col-span-3">
            <StatsPanelMy />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <MyReportsStats />
          <div className='my-4' />
          <UserProfileCard />

          <div className='my-4' />
          <MyReports />

          {/* <div className='my-4' />
          <TrendingTagsPanel /> */}
        </div>
      </main>
      <MobileNav activeTab={activeMobileTab} onTabChange={handleTabChange} />
    </div>
  );
}