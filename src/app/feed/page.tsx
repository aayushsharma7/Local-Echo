"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Spinner, type SpinnerProps } from "@/components/ui/shadcn-io/spinner";
import AppHeader from "@/components/AppHeader";
import UnauthorizedAccess from "@/components/UnauthorizedAccess";
import IssueFeed from "@/components/IssueFeed";
import MapPanel from "@/components/MapPanel";
import StatsPanel from "@/components/StatsPanel";
import CreateIssueDialog from "@/components/CreateIssueDialog";
import MobileNav from "@/components/MobileNav";

// --- MAIN PAGE COMPONENT ---

export default function FeedPage() {
  const [isCreateIssueOpen, setCreateIssueOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<
    "feed" | "map" | "profile"
  >("feed");
  const router = useRouter();

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
  const { theme, setTheme } = useTheme(); // <-- Use the useTheme hook

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { isLoaded, isSignedIn, user } = useUser(); // Get user state from Clerk

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
    <div className="flex min-h-screen w-full flex-col bg-background1">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-6 lg:pb-6 pb-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3">
            <StatsPanel />
          </div>
          <div className="lg:col-span-6">
            <IssueFeed />
          </div>
          <div className="lg:col-span-3">
            <MapPanel />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {activeMobileTab === "feed" && <IssueFeed />}
        </div>
      </main>

      <CreateIssueDialog
        open={isCreateIssueOpen}
        onOpenChange={setCreateIssueOpen}
      />

      {/* Floating Create Issue Button */}
      <Button
        size="icon"
        className="rounded-full w-16 h-16 fixed bottom-20 right-4 lg:bottom-8 lg:right-8 shadow-2xl z-40 transition-transform hover:scale-110 active:scale-100"
        onClick={() => setCreateIssueOpen(true)}
        aria-label="Create new issue"
      >
        <Plus className="w-8 h-8" />
      </Button>

      {/* Mobile Navigation */}
      <MobileNav activeTab={activeMobileTab} onTabChange={handleTabChange} />
    </div>
  );
}
