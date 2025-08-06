

"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, Edit, Trash2, User, Bell, LogOut, Settings, FileText, Rss, MapPin, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocalEchoLogo } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

// --- INLINED COMPONENTS ---

// Header Component
const navLinks = [
  { href: "/feed", label: "Feed", icon: Rss },
  { href: "/feed/map", label: "Map", icon: MapPin },
  { href: "/feed/reports", label: "My Reports", icon: FileText },
];

function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex-1 flex items-center justify-start">
          <Link href="/feed" className="flex items-center space-x-2">
            <LocalEchoLogo className="h-7 w-7 text-primary text-glow" />
            <span className="font-bold font-headline text-2xl inline-block tracking-tighter">
              LocalEcho
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center space-x-1">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.label} className="text-muted-foreground hover:text-foreground">
              <Link
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10 border-2 border-transparent hover:border-primary transition-colors">
                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            john.doe@example.com
                        </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                        <DropdownMenuItem><User className="mr-2 h-4 w-4"/> Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings className="mr-2 h-4 w-4"/> Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><LogOut className="mr-2 h-4 w-4"/> Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

// My Reports Components
const userIssues = [
  {
    id: 1,
    title: "Large pothole on Main St",
    description: "Huge pothole at the intersection of Oak & Maple. Needs immediate attention.",
    image: "/placeho.png",
    imageHint: "pothole road",
    tags: ["pothole", "danger"],
    status: "In Progress",
    statusVariant: "secondary",
    time: "2h ago",
    upvotes: 128,
    comments: 12,
  },
  {
    id: 2,
    title: "Broken Streetlight",
    description: "The streetlight on the corner of 5th and Pine has been out for a week.",
    image: null,
    imageHint: "",
    tags: ["streetlight", "safety"],
    status: "Resolved",
    statusVariant: "default",
    time: "3d ago",
    upvotes: 45,
    comments: 5,
  },
  {
    id: 3,
    title: "Overflowing Park Bins",
    description: "Trash cans at Central Park near playground are full.",
    image: "/placeho.png",
    imageHint: "trash park",
    tags: ["trash", "park"],
    status: "Submitted",
    statusVariant: "outline",
    time: "1d ago",
    upvotes: 22,
    comments: 3,
  },
];

function MyReports() {
  return (
    <div className="w-full space-y-4">
      {userIssues.map((issue) => (
        <Card key={issue.id} className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="grid grid-cols-1">
              <div className="p-4">
                  <div className="flex items-start justify-between">
                      <div>
                          <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-headline font-semibold text-lg">{issue.title}</h3>
                              <Badge variant={issue.statusVariant as any}>{issue.status}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                          Reported {issue.time}
                          </p>
                      </div>
                  </div>
                  <p className="text-sm my-3">{issue.description}</p>
                  
                  {issue.image && (
                      <div className="rounded-lg overflow-hidden border mb-3">
                          <Image
                              src={issue.image}
                              alt={`Issue reported for ${issue.title}`}
                              width={600}
                              height={400}
                              className="w-full h-auto object-cover"
                              data-ai-hint={issue.imageHint}
                          />
                      </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-3">
                      {issue.tags.map(tag => <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>)}
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-sm">
                              <ThumbsUp className="w-4 h-4" /> <span>{issue.upvotes}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm">
                              <MessageCircle className="w-4 h-4" /> <span>{issue.comments}</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                              <Edit className="w-3 h-3" /> <span>Edit</span>
                          </Button>
                          <Button variant="destructive" size="sm" className="flex items-center gap-1.5">
                              <Trash2 className="w-3 h-3" /> <span>Delete</span>
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// Mobile Nav Component
type MobileNavProps = {
  activeTab: string;
  onTabChange: (tab: 'feed' | 'map' | 'profile') => void;
};
const mobileNavItems = [
  { id: 'feed', label: 'Feed', icon: Rss, href: '/feed' },
  { id: 'map', label: 'Map', icon: MapPin, href: '/feed/map' },
  { id: 'profile', label: 'Profile', icon: User, href: '/feed/reports' },
];

function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = (tabId: 'feed' | 'map' | 'profile', href: string) => {
    onTabChange(tabId);
    if (pathname !== href) {
        router.push(href);
    }
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t z-50">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {mobileNavItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`inline-flex flex-col items-center justify-center px-5 rounded-none h-full ${activeTab === item.id ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => handlePress(item.id as 'feed' | 'map' | 'profile', item.href)}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

// My Reports Stats Component
function MyReportsStats() {
    return (
        <Card className="bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle className="font-headline text-2xl">My Reports</CardTitle>
                </div>
              <CardDescription>A list of issues you have reported.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-2xl font-bold font-headline text-primary">3</p>
                    <p className="text-xs text-muted-foreground">Total Reports</p>
                </div>
                <div>
                    <p className="text-2xl font-bold font-headline text-green-500 flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" /> 1
                    </p>
                    <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
                <div>
                    <p className="text-2xl font-bold font-headline text-amber-500 flex items-center justify-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> 2
                    </p>
                    <p className="text-xs text-muted-foreground">Active</p>
                </div>
            </CardContent>
      </Card>
    );
}

// Stats Panel Component
const trendingTagsData = ["pothole", "streetlight", "parks", "noise", "safety"];

function StatsPanel() {
  return (
    <div className="sticky top-20 space-y-6">
      <Card className="bg-card/60 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="font-headline text-lg flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />Community Stats</CardTitle>
          <CardDescription className="text-xs">
            Overview of all reports on LocalEcho.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-center">
            <div>
                <p className="text-3xl font-bold font-headline text-primary">1,492</p>
                <p className="text-xs text-muted-foreground">Total Reports</p>
            </div>
            <div>
                <p className="text-3xl font-bold font-headline text-green-500">834</p>
                <p className="text-xs text-muted-foreground">Resolved</p>
            </div>
        </CardContent>
      </Card>

      <Card className="bg-card/60 backdrop-blur-sm border-border/50">
        <CardHeader>
            <CardTitle className="font-headline text-lg flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" />Trending Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTagsData.map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize cursor-pointer hover:bg-primary/20 transition-colors">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// User Profile Card Component
function UserProfileCard() {
  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50">
      <CardContent className="pt-6 flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/50">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold font-headline">John Doe</h2>
        <p className="text-sm text-muted-foreground">Springfield, USA</p>
        <Button variant="outline" size="sm" className="mt-4">Edit Profile</Button>
      </CardContent>
    </Card>
  );
}

// Trending Tags Panel Component
function TrendingTagsPanel() {
  return (
    <Card className="sticky top-20 bg-card/60 backdrop-blur-sm border-border/50">
        <CardHeader>
            <CardTitle className="font-headline text-lg flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" />Trending Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTagsData.map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize cursor-pointer hover:bg-primary/20 transition-colors">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
  );
}

// --- MAIN REPORTS PAGE ---

export default function ReportsPage() {
    const [activeMobileTab, setActiveMobileTab] = useState<'feed' | 'map' | 'profile'>('profile');
    const router = useRouter();

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


    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-6">
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
                        <StatsPanel />
                    </div>
                </div>
                
                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <MyReportsStats />
                    <div className='my-4' />
                    <MyReports />
                    <div className='my-4' />
                    <UserProfileCard />
                    <div className='my-4' />
                    <TrendingTagsPanel />
                </div>
            </main>
            <MobileNav activeTab={activeMobileTab} onTabChange={handleTabChange} />
        </div>
    );
}

