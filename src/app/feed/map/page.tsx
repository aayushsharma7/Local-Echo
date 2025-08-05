
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, Minus, Layers, User, Bell, LogOut, Settings, FileText, Rss, List, PlusCircle, Send } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

// Recent Issues List Component
const recentIssues = [
  { id: 1, user: { name: "Jane Cooper", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }, title: "Pothole on Oak St", location: "Oak & Maple St", time: "5m ago" },
  { id: 2, user: { name: "Robert Fox", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" }, title: "Overflowing bins at Park", location: "Central Park", time: "1h ago" },
  { id: 3, user: { name: "Emily Selman", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e" }, title: "Streetlight out on 5th Ave", location: "5th Avenue", time: "2h ago" },
  { id: 4, user: { name: "John Doe", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f" }, title: "Deep pothole near City Hall", location: "City Hall", time: "4h ago" },
  { id: 5, user: { name: "Sarah Smith", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a" }, title: "Illegal dumping on Elm St", location: "Elm St", time: "5h ago" },
];

function RecentIssuesList() {
  return (
    <Card className="sticky top-20 bg-card/60 backdrop-blur-sm border-border/50 max-h-[calc(100vh-28rem)] overflow-y-auto">
      <CardHeader className="sticky top-0 bg-card/80 backdrop-blur-sm z-10">
        <div className="flex items-center gap-2">
            <List className="w-5 h-5 text-primary" />
            <CardTitle className="font-headline text-lg">Recent Issues</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentIssues.map((issue) => (
            <div key={issue.id} className="flex items-center gap-4 cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors">
              <Avatar className="h-10 w-10">
                <AvatarImage src={issue.user.avatar} alt={issue.user.name} />
                <AvatarFallback>{issue.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">{issue.title}</p>
                <p className="text-sm text-muted-foreground">{issue.location} &middot; {issue.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Quick Report Card
type QuickReportCardProps = {
    onReportClick: () => void;
}

function QuickReportCard({ onReportClick }: QuickReportCardProps) {
  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-primary" />
            <CardTitle className="font-headline text-lg">Quick Report</CardTitle>
        </div>
        <CardDescription className="text-xs">Spotted an issue? Report it now.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
            Help improve your community by quickly reporting issues like potholes, graffiti, or broken streetlights.
        </p>
        <Button className="w-full" onClick={onReportClick}>
            <Send className="w-4 h-4 mr-2" />
            Report a New Issue
        </Button>
      </CardContent>
    </Card>
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


// --- MAIN MAP PAGE ---

export default function MapPage() {
    const [activeMobileTab, setActiveMobileTab] = useState<'feed' | 'map' | 'profile'>('map');
    const [isCreateIssueOpen, setCreateIssueOpen] = useState(false);
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
                <div className="lg:grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8">
                        <MapPanel />
                    </div>
                    <div className="lg:col-span-4 space-y-6">
                        <RecentIssuesList />
                        <QuickReportCard onReportClick={() => setCreateIssueOpen(true)} />
                    </div>
                </div>
            </main>
            <MobileNav activeTab={activeMobileTab} onTabChange={handleTabChange} />
            <CreateIssueDialog open={isCreateIssueOpen} onOpenChange={setCreateIssueOpen} />
        </div>
    );
}

