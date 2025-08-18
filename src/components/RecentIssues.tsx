import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { List } from 'lucide-react';

const RecentIssues = () => {
    // Recent Issues List Component
const recentIssues = [
  { id: 1, user: { name: "Jane Cooper", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }, title: "Pothole on Oak St", location: "Oak & Maple St", time: "5m ago" },
  { id: 2, user: { name: "Robert Fox", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" }, title: "Overflowing bins at Park", location: "Central Park", time: "1h ago" },
  { id: 3, user: { name: "Emily Selman", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e" }, title: "Streetlight out on 5th Ave", location: "5th Avenue", time: "2h ago" },
  { id: 4, user: { name: "John Doe", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f" }, title: "Deep pothole near City Hall", location: "City Hall", time: "4h ago" },
  { id: 5, user: { name: "Sarah Smith", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a" }, title: "Illegal dumping on Elm St", location: "Elm St", time: "5h ago" },
];
  return (
    <div>
      <Card className="md:mr-10 sticky top-20 bg-card border-border/50 max-h-[calc(100vh-28rem)] overflow-hidden">
      <CardHeader className="bg-card z-10">
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-primary" />
          <CardTitle className="font-headline text-lg">Recent Issues</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="h-[calc(100%-8rem)] -mt-5 p-4 overflow-y-auto">
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
    </div>
  )
}

export default RecentIssues
