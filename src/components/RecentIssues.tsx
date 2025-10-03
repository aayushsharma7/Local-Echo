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
  { id: 1, user: { name: "Asha Verma", avatar: "https://avatar.iran.liara.run/public/75" }, title: "Pothole in Sector 15", location: "Main Road 15", time: "5m ago" },
  { id: 2, user: { name: "Robert Fox", avatar: "https://avatar.iran.liara.run/public/4" }, title: "Overflowing bins at Park", location: "Sector 15 Park", time: "1h ago" },
  { id: 3, user: { name: "Robert Fox", avatar: "https://avatar.iran.liara.run/public/4" }, title: "Streetlight out Sector 11", location: "Sector 11", time: "2h ago" },
  { id: 4, user: { name: "Asha Verma", avatar: "https://avatar.iran.liara.run/public/75" }, title: "Deep pothole near City Hall", location: "City Hall", time: "4h ago" },
  { id: 5, user: { name: "Asha Verma", avatar: "https://avatar.iran.liara.run/public/75" }, title: "Illegal dumping on Elm St", location: "Elm St", time: "5h ago" },
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
