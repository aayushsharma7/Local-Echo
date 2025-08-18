"use client";
import { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { Spinner, type SpinnerProps } from "@/components/ui/shadcn-io/spinner";
import AppHeader from "@/components/AppHeader";
import UnauthorizedAccess from "@/components/UnauthorizedAccess";
import MobileNav from "@/components/MobileNav";
import CreateIssueDialog from "@/components/CreateIssueDialog";
import MainMapPanel from "@/components/MainMapPanel";
import RecentIssues from "@/components/RecentIssues";
import QuickReport from "@/components/QuickReport";
// --- MAIN MAP PAGE ---

export default function MapPage() {
  // Moved all hook calls to the top of the component
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const [activeMobileTab, setActiveMobileTab] = useState<
    "feed" | "map" | "profile"
  >("map");
  const [isCreateIssueOpen, setCreateIssueOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // The useEffect hook is also a hook and must be called at the top level
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleTabChange = (tab: "feed" | "map" | "profile") => {
    setActiveMobileTab(tab);
    if (tab === "map") {
      router.push("/feed/map");
    } else if (tab === "profile") {
      router.push("/feed/reports");
    } else {
      router.push("/feed");
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner variant={"bars"} className="text-primary" size={64} />
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
        <div className="lg:grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <MainMapPanel />
          </div>
          <div className="lg:col-span-4 space-y-6 mt-6 md:mt-0">
            <RecentIssues />
            <QuickReport onReportClick={() => setCreateIssueOpen(true)} />
          </div>
        </div>
      </main>
      <MobileNav activeTab={activeMobileTab} onTabChange={handleTabChange} />
      <CreateIssueDialog
        open={isCreateIssueOpen}
        onOpenChange={setCreateIssueOpen}
      />
    </div>
  );
}
