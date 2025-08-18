import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Tag,
  MoreHorizontal,
  MapPin,
  Layers,
  Minus,
  SlidersHorizontal,
  Rss,
  User,
  Bell,
  LogOut,
  Settings,
  FileText,
  Plus,
} from "lucide-react";

import FeedFilters from "@/components/FeedFilters";

const MapPanel = () => {
  const issuesOnMap = [
    {
      id: "pothole1",
      emoji: "🕳️",
      top: "25%",
      left: "30%",
      tooltip: "Pothole on Oak St",
    },
    {
      id: "trash1",
      emoji: "🗑️",
      top: "55%",
      left: "65%",
      tooltip: "Overflowing bins at Park",
    },
    {
      id: "light1",
      emoji: "💡",
      top: "70%",
      left: "20%",
      tooltip: "Streetlight out on 5th Ave",
    },
    {
      id: "pothole2",
      emoji: "🕳️",
      top: "40%",
      left: "80%",
      tooltip: "Deep pothole near City Hall",
    },
    {
      id: "trash2",
      emoji: "🗑️",
      top: "15%",
      left: "10%",
      tooltip: "Illegal dumping on Elm St",
    },
  ];
  return (
    <div>
      <Card className="mr-10 sticky top-20 bg-card/60 backdrop-blur-sm border-border/50 h-[calc(100vh-15rem)] lg:h-[calc(100vh-9rem)]">
        <CardHeader>
          <div className="flex items-center justify-between -ml-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary " />
              <CardTitle className="font-headline text-lg">Issue Map</CardTitle>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <Layers className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-7 w-7">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-7 w-7">
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription className="text-xs">
            Live issues reported by the community. Click an icon for details.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[calc(100%-8rem)] lg:h-[calc(100%-6rem)] p-0 ">
          <TooltipProvider>
            <div
              className="relative w-full h-full rounded-b-lg overflow-hidden"
              style={{
                backgroundImage: "url('/map-preview.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
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
    </div>
  );
};

export default MapPanel;
