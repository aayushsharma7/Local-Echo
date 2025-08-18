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
import { TrendingUp } from 'lucide-react';

const TrendingTagsPanel = () => {
    const trendingTagsData = ["pothole", "streetlight", "parks", "noise", "safety"];
  return (
    <div>
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
    </div>
  )
}

export default TrendingTagsPanel
