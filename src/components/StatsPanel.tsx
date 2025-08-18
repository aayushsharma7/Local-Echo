import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {  FileText, MessageCircle, ThumbsUp, TrendingUp } from 'lucide-react';
const StatsPanel = () => {
    const trendingTags = ["pothole", "streetlight", "parks", "noise", "safety"];

  return (
    <div>
      <div className="ml-10 sticky top-20 space-y-6">
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
    </div>
  )
}

export default StatsPanel
