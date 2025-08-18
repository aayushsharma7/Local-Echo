"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Tag,
  MoreHorizontal,
  MapPin,
  Layers,
  Minus,
  SlidersHorizontal,
  Rss,
  User,
  Bell,
  LogOut,
  Settings,
  FileText,
} from "lucide-react";
import { usePathname } from "next/navigation";

type MobileNavProps = {
  activeTab: string;
  onTabChange: (tab: "feed" | "map" | "profile") => void;
};
const mobileNavItems = [
  { id: "feed", label: "Feed", icon: Rss, href: "/feed" },
  { id: "map", label: "Map", icon: MapPin, href: "/feed/map" },
  { id: "profile", label: "Profile", icon: User, href: "/feed/reports" },
];
const MobileNav = ({ activeTab, onTabChange }: MobileNavProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = (tabId: "feed" | "map" | "profile", href: string) => {
    onTabChange(tabId);
    if (pathname !== href) {
      router.push(href);
    }
  };
  return (
    <div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t z-50">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          {mobileNavItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`inline-flex flex-col items-center justify-center px-5 rounded-none h-full ${
                activeTab === item.id ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() =>
                handlePress(item.id as "feed" | "map" | "profile", item.href)
              }
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
