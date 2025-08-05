"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
import { ThumbsUp, MessageCircle, Share2, Tag, MoreHorizontal, MapPin, Layers, Minus, SlidersHorizontal, Rss, User, Bell, LogOut, Settings, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import type { DialogProps } from "@radix-ui/react-dialog";
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
import { Separator } from "@/components/ui/separator";
import { TrendingUp, CheckCircle } from "lucide-react";
import { usePathname } from 'next/navigation';

// --- INLINED COMPONENTS ---

// public/icons.tsx
function AppLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
      <path d="M12 2a10 10 0 00-7.53 16.59" />
      <path d="M21.53 9.41a10 10 0 00-16.12-.02" />
    </svg>
  );
}


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

// Issue Feed Components
const issues = [
  {
    id: 1,
    user: { name: "Jane Cooper", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    description: "Huge pothole at the intersection of Oak & Maple. Multiple cars have been hit. Needs immediate attention from the city.",
    image: "/placeho.png",
    imageHint: "pothole road",
    tags: ["pothole", "danger"],
    location: "Oak & Maple St",
    time: "2h ago",
    upvotes: 128,
    comments: 12,
    specialBadge: "Live"
  },
  {
    id: 2,
    user: { name: "Robert Fox", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
    description: "Overflowing trash cans at Central Park near the playground. It's becoming a health hazard for kids and families.",
    image: null,
    imageHint: "",
    tags: ["trash", "park"],
    location: "Central Park",
    time: "8h ago",
    upvotes: 45,
    comments: 5,
    specialBadge: null,
  },
  {
    id: 3,
    user: { name: "City Works", avatar: "https://i.pravatar.cc/150?u=cityworks" },
    description: "Streetlight outage reported on 5th Avenue between Pine and Elm has been resolved. Our team replaced the faulty bulb this morning.",
    image: "/placeho.png",
    imageHint: "street light",
    tags: ["streetlight", "resolved"],
    location: "5th Avenue",
    time: "1d ago",
    upvotes: 210,
    comments: 34,
    specialBadge: "Verified Authority",
  },
];

function FeedFilters() {
  return (
    <Card className="mb-4 bg-card/60 backdrop-blur-sm border-border/50">
        <CardContent className="p-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <Rss className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-headline font-semibold">Community Feed</h2>
            </div>
            <div className="flex items-center gap-2">
                <Select defaultValue="recent">
                    <SelectTrigger className="w-[150px] text-xs h-8">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="upvoted">Most Upvoted</SelectItem>
                        <SelectItem value="nearby">Nearby</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <SlidersHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </CardContent>
    </Card>
  );
}

function IssueFeed() {
  return (
    <div className="w-full">
      <FeedFilters />
      <div className="space-y-4">
        {issues.map((issue) => (
          <Card key={issue.id} className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
            <CardHeader className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={issue.user.avatar} alt={issue.user.name} />
                    <AvatarFallback>{issue.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{issue.user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {issue.location} &middot; {issue.time}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-3">
              <p className="text-sm mb-3">{issue.description}</p>
              {issue.image && (
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src={issue.image}
                    alt={`Issue reported by ${issue.user.name}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={issue.imageHint}
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
              <div className="flex gap-2">
                {issue.tags.map(tag => <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>)}
                {issue.specialBadge && <Badge variant="default" className="bg-accent text-accent-foreground">{issue.specialBadge}</Badge>}
              </div>
              <div className="w-full flex items-center justify-between text-muted-foreground">
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5 -ml-2">
                    <ThumbsUp className="w-4 h-4" /> <span>{issue.upvotes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" /> <span>{issue.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" /> <span>Share</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4" /> <span>Tag</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Map Panel Component
const issuesOnMap = [
    { id: 'pothole1', emoji: '🕳️', top: '25%', left: '30%', tooltip: 'Pothole on Oak St' },
    { id: 'trash1', emoji: '🗑️', top: '55%', left: '65%', tooltip: 'Overflowing bins at Park' },
    { id: 'light1', emoji: '💡', top: '70%', left: '20%', tooltip: 'Streetlight out on 5th Ave' },
    { id: 'pothole2', emoji: '🕳️', top: '40%', left: '80%', tooltip: 'Deep pothole near City Hall' },
    { id: 'trash2', emoji: '🗑️', top: '15%', left: '10%', tooltip: 'Illegal dumping on Elm St' },
];

function MapPanel() {
  return (
    <Card className="sticky top-20 bg-card/60 backdrop-blur-sm border-border/50 h-[calc(100vh-15rem)] lg:h-[calc(100vh-9rem)]">
      <CardHeader>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <CardTitle className="font-headline text-lg">Issue Map</CardTitle>
            </div>
            <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-7 w-7"><Layers className="h-4 w-4"/></Button>
                <Button variant="outline" size="icon" className="h-7 w-7"><Plus className="h-4 w-4"/></Button>
                <Button variant="outline" size="icon" className="h-7 w-7"><Minus className="h-4 w-4"/></Button>
            </div>
        </div>
        <CardDescription className="text-xs">Live issues reported by the community. Click an icon for details.</CardDescription>
      </CardHeader>
      <CardContent className="h-[calc(100%-8rem)] lg:h-[calc(100%-6rem)] p-0">
        <TooltipProvider>
            <div className="relative w-full h-full bg-secondary/30 rounded-b-lg overflow-hidden">
                <div 
                    className="absolute inset-0 z-0" 
                    style={{
                    backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    }}
                />
                {issuesOnMap.map((issue, index) => (
                    <Tooltip key={issue.id}>
                        <TooltipTrigger asChild>
                            <div
                                className="absolute text-3xl transition-transform hover:scale-125 z-10 cursor-pointer"
                                style={{ 
                                    top: issue.top, 
                                    left: issue.left,
                                    animation: `bounce 1.5s ease-in-out infinite`,
                                    animationDelay: `${index * 0.15}s`,
                                }}
                            >
                                {issue.emoji}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{issue.tooltip}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}

// Stats Panel Component
const trendingTags = ["pothole", "streetlight", "parks", "noise", "safety"];

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
            {trendingTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize cursor-pointer hover:bg-primary/20 transition-colors">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/60 backdrop-blur-sm border-border/50">
        <CardHeader>
            <CardTitle className="font-headline text-lg">Your Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground flex items-center gap-2"><FileText className="w-4 h-4"/> Your Reports</span>
                <span className="font-bold text-base">12</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground flex items-center gap-2"><ThumbsUp className="w-4 h-4"/> Upvotes Given</span>
                <span className="font-bold text-base">152</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground flex items-center gap-2"><MessageCircle className="w-4 h-4"/> Comments Made</span>
                <span className="font-bold text-base">34</span>
            </div>
        </CardContent>
      </Card>
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

// Create Issue Dialog Component
function CreateIssueDialog(props: DialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-[480px] bg-card/80 backdrop-blur-sm border-border/50">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Report a New Issue</DialogTitle>
          <DialogDescription>
            Help improve your community by reporting an issue. Please provide as much detail as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Issue Title</Label>
            <Input id="title" placeholder="e.g., Large pothole on Main St" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the issue, its location, and any other relevant details."
              className="min-h-[120px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="issue-type">Problem Type</Label>
                <Select>
                    <SelectTrigger id="issue-type">
                        <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pothole">Pothole</SelectItem>
                        <SelectItem value="trash">Trash & Dumping</SelectItem>
                        <SelectItem value="streetlight">Streetlight Outage</SelectItem>
                        <SelectItem value="noise">Noise Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="authority">Local Authority</Label>
                <Select>
                    <SelectTrigger id="authority">
                        <SelectValue placeholder="Select authority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="public-works">Public Works</SelectItem>
                        <SelectItem value="parks-rec">Parks & Recreation</SelectItem>
                        <SelectItem value="police">Police Dept.</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                    </SelectContent>
                </Select>
              </div>
          </div>
          <div className="grid gap-2">
             <Label>Upload Image (Optional)</Label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary/80">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, or GIF</p>
                    </div>
                    <Input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full sm:w-auto">Submit Report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


// --- MAIN PAGE COMPONENT ---

export default function FeedPage() {
  const [isCreateIssueOpen, setCreateIssueOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<'feed' | 'map' | 'profile'>('feed');
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
            {activeMobileTab === 'feed' && <IssueFeed />}
        </div>
      </main>

      <CreateIssueDialog open={isCreateIssueOpen} onOpenChange={setCreateIssueOpen} />

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
