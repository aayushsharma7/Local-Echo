
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
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

import FeedFilters from '@/components/FeedFilters';

const IssueFeed = () => {
    const issues = [
  {
    id: 1,
    user: { name: "Asha Verma", avatar: "https://avatar.iran.liara.run/public/75" },
    description: "Huge pothole at the Sector 15 Main road. Needs immediate attention.",
    image: '/pothole.png',
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
    user: { name: "Robert Fox", avatar: "https://avatar.iran.liara.run/public/4" },
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
    user: { name: "Ajay - RWA Manager", avatar: "https://avatar.iran.liara.run/public/31" },
    description: "Streetlight outage reported on the corner of Roundabout at Sector 11 has been resolved. Our team replaced the faulty bulb this morning.",
    image: '/light2.png',
    imageHint: "street light",
    tags: ["streetlight", "resolved"],
    location: "5th Avenue",
    time: "1d ago",
    upvotes: 210,
    comments: 34,
    specialBadge: "Verified Authority",
  },
];
  return (
    <div>
      <div className="w-full">
      <FeedFilters />
      <div className="space-y-4">
        {issues.map((issue) => (
          <Card key={issue.id} className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
            <CardHeader className="p-4 -mt-5">
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
            <CardContent className="px-4 pb-3 -mt-7">
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
              <div className="flex gap-2 -mt-5">
                {issue.tags.map(tag => <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>)}
                {issue.specialBadge && <Badge variant="default" className="bg-accent text-accent-foreground">{issue.specialBadge}</Badge>}
              </div>
              <div className="w-full flex items-center justify-between text-muted-foreground -mb-5">
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
    </div>
  )
}

export default IssueFeed
