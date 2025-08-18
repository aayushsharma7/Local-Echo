import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { FileText, TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
const StatsPanelMy = () => {
const trendingTagsData = ["pothole", "streetlight", "parks", "noise", "safety"];
  return (
    <div>
      <div className=" md:mr-10 sticky top-20 space-y-6">
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
    </div>
  )
}

export default StatsPanelMy
