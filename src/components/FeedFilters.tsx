import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Rss, SlidersHorizontal } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const FeedFilters = () => {
  return (
    <div>
      <Card className="mb-4 bg-card/60 backdrop-blur-sm border-border/50">
        <CardContent className=" flex items-center justify-between gap-2 -mt-3 -mb-3">
            <div className="flex items-center gap-2">
                <Rss className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-headline font-semibold text-center">
                  <div className='flex gap-1'>
                  <span className='hidden md:block'>
                  Community 
                  </span>
                  <span className=''>
                  Feed 
                  </span>
                  </div>
                  </h2>
            </div>
            <div className="flex items-center gap-2">
                <Select defaultValue="recent">
                    <SelectTrigger
                     className="w-[150px] text-xs h-8">
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
    </div>
  )
}

export default FeedFilters
