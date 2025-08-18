import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import React from "react";
import { ThumbsUp, MessageCircle, Edit, Trash2, User, Bell, LogOut, Settings, FileText, Rss, MapPin, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

const MyReports = () => {
  return (
    <div>
      <Card className="md:ml-10 bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          <CardTitle className="font-headline text-2xl">My Reports</CardTitle>
        </div>
        <CardDescription>A list of issues you have reported.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold font-headline text-primary">3</p>
          <p className="text-xs text-muted-foreground">Total Reports</p>
        </div>
        <div>
          <p className="text-2xl font-bold font-headline text-green-500 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" /> 1
          </p>
          <p className="text-xs text-muted-foreground">Resolved</p>
        </div>
        <div>
          <p className="text-2xl font-bold font-headline text-amber-500 flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5" /> 2
          </p>
          <p className="text-xs text-muted-foreground">Active</p>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default MyReports
