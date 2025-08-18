import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { PlusCircle, Send } from 'lucide-react';
type QuickReportCardProps = {
  onReportClick: () => void;
}
const QuickReport = ({ onReportClick }: QuickReportCardProps) => {
  return (
    <div>
      <Card className="md:mr-10 bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-primary" />
          <CardTitle className="font-headline text-lg">Quick Report</CardTitle>
        </div>
        <CardDescription className="text-xs">Spotted an issue? Report it now.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Help improve your community by quickly reporting issues like potholes, graffiti, or broken streetlights.
        </p>
        <Button className="w-full" onClick={onReportClick}>
          <Send className="w-4 h-4 mr-2" />
          Report a New Issue
        </Button>
      </CardContent>
    </Card>
    </div>
  )
}

export default QuickReport
