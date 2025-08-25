"use client"
import React, { useState } from 'react'
import { ThumbsUp, MessageCircle, Share2, Tag, MoreHorizontal, MapPin, Layers, Minus, SlidersHorizontal, Rss, User, Bell, LogOut, Settings, FileText, Loader2Icon, SendIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import type { DialogProps } from "@radix-ui/react-dialog";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from './ui/button';
import { useUser } from '@clerk/nextjs';
import { createPost } from '@/actions/post.action';
const CreateIssueDialog = (props: DialogProps) => {
  const {user} = useUser();
  const [content, setContent] = useState("");
  const [title,setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() && !content.trim() && !imageUrl) return;

    setIsPosting(true);
    try {
      const result = await createPost(title, content, imageUrl);
      if (result?.success) {
        // reset the form
        setTitle("");
        setContent("");
        setImageUrl("");
        setShowImageUpload(false);

        toast.success("Post created successfully");
      }
    } catch (error) {
      console.error("Failed to create post:", error);
      toast.error("Failed to create post");
    } finally {
      setIsPosting(false);
    }
  };



  return (
    <div>
      <Dialog {...props}>
      <DialogContent className="sm:max-w-[480px] bg-card/80 backdrop-blur-sm border-border/50">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Report a New Issue</DialogTitle>
          <DialogDescription>
            Help improve your community by reporting an issue. Please provide as much detail as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Issue Title</Label>
            <Textarea
              placeholder="e.g., Large pothole on Main St"
              value={title}
              className="min-h-[10px]"
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPosting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
           
            <Textarea
              placeholder="Describe the issue, its location, and any other relevant detals."
              className="min-h-[120px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPosting}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="issue-type">Problem Type</Label>
                <Select>
                    <SelectTrigger id="issue-type">
                        <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pothole">Pothole</SelectItem>
                        <SelectItem value="trash">Trash & Dumping</SelectItem>
                        <SelectItem value="streetlight">Streetlight Outage</SelectItem>
                        <SelectItem value="noise">Noise Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="authority">Local Authority</Label>
                <Select>
                    <SelectTrigger id="authority">
                        <SelectValue placeholder="Select authority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="public-works">Public Works</SelectItem>
                        <SelectItem value="parks-rec">Parks & Recreation</SelectItem>
                        <SelectItem value="police">Police Dept.</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                    </SelectContent>
                </Select>
              </div>
          </div>
          <div className="grid gap-2">
             <Label>Upload Image (Optional)</Label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary/80">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, or GIF</p>
                    </div>
                    <Input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
          </div>
        </div>
        <DialogFooter>
          <Button
              className="w-full sm:w-auto"
              onClick={handleSubmit}
              disabled={(!content.trim() && !imageUrl) || isPosting}
            >
              {isPosting ? (
                <>
                  <Loader2Icon className="size-4 mr-2 animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <SendIcon className="size-4 mr-2" />
                  Submit Report
                </>
              )}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default CreateIssueDialog
