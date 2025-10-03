
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
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, Edit, Trash2, User, Bell, LogOut, Settings, FileText, Rss, MapPin, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

const MyReports = () => {
    const userIssues = [
  {
    id: 1,
    title: "Large pothole on Main Road - Sector 15",
    description: "Huge pothole at the Sector 15 Main road. Needs immediate attention.",
    image: "/pothole.png",
    imageHint: "pothole road",
    tags: ["pothole", "danger"],
    status: "In Progress",
    statusVariant: "secondary",
    time: "2h ago",
    upvotes: 128,
    comments: 12,
  },
  {
    id: 2,
    title: "Broken Streetlight",
    description: "The streetlight on the corner of Roundabout at Sector 11 has been out for a week.",
    image: null,
    imageHint: "",
    tags: ["streetlight", "safety"],
    status: "Resolved",
    statusVariant: "default",
    time: "3d ago",
    upvotes: 45,
    comments: 5,
  },
  {
    id: 3,
    title: "Overflowing Park Bins",
    description: "Trash cans at Sector 15 Park near playground are full.",
    image: "/bins.jpg",
    imageHint: "trash park",
    tags: ["trash", "park"],
    status: "Submitted",
    statusVariant: "outline",
    time: "1d ago",
    upvotes: 22,
    comments: 3,
  },
];
  return (
    <div>
      <div className="w-full space-y-4">
      {userIssues.map((issue) => (
        <Card key={issue.id} className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="grid grid-cols-1">
            <div className="p-4 -mt-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline font-semibold text-lg">{issue.title}</h3>
                    <Badge variant={issue.statusVariant as any}>{issue.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Reported {issue.time}
                  </p>
                </div>
              </div>
              <p className="text-sm my-3">{issue.description}</p>

              {issue.image && (
                <div className="rounded-lg overflow-hidden border mb-3">
                  <Image
                    src={issue.image}
                    alt={`Issue reported for ${issue.title}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={issue.imageHint}
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-3">
                {issue.tags.map(tag => <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>)}
              </div>
              <div className="flex items-center justify-between text-muted-foreground -mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm">
                    <ThumbsUp className="w-4 h-4" /> <span>{issue.upvotes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <MessageCircle className="w-4 h-4" /> <span>{issue.comments}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                    <Edit className="w-3 h-3" /> <span>Edit</span>
                  </Button>
                  <Button variant="destructive" size="sm" className="flex items-center gap-1.5">
                    <Trash2 className="w-3 h-3 " /> <span>Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
    </div>
  )
}

export default MyReports
