"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import Link from "next/link";
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

import { ThemeToggle } from "@/components/theme-toggle";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { syncUser } from "@/actions/user.action";
const AppHeader = () => {
  const navLinks = [
    { href: "/feed", label: "Feed", icon: Rss },
    { href: "/feed/map", label: "Map", icon: MapPin },
    { href: "/feed/reports", label: "My Reports", icon: FileText },
  ];
  const { theme, setTheme } = useTheme(); // <-- Use the useTheme hook

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // <-- Use setTheme to toggle
  };

  const [mounted, setMounted] = useState(false);

  
  const { isLoaded, isSignedIn, user } = useUser(); // Get user state from Clerk
  // This useEffect will run when the component mounts and whenever isLoaded or isSignedIn changes.
  useEffect(() => {
    setMounted(true);
    
    // Call the server action only when the user is signed in and the user data is loaded.
    if (isLoaded && isSignedIn) {
      console.log("User signed in. Syncing user data with database...");
      syncUser();
    }
  }, [isLoaded, isSignedIn]);
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2 md:ml-8 ml-1">
            <Image
              src="/logo4.png"
              alt="LocalEcho Logo"
              width={62}
              height={62}
              className="object-contain md:-mr-2"
            />
            <span className="text-xl font-semibold text-foreground -ml-5 md:-ml-0">
              <Link href="#front-page">Local </Link>
              <span className="text-gradient">
                <Link href="/feed">Echo</Link>
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-1 ml-75">
            {navLinks.map((link) => (
              <Button
                asChild
                variant="ghost"
                key={link.label}
                className="text-muted-foreground hover:text-foreground"
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Actions (Notifications, Theme Toggle, Auth) */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />

            {/* Conditional rendering based on auth status */}
            {isLoaded && isSignedIn ? (
              <div className="md:mr-10 mr-3 mt-1.5">
                <UserButton
                  appearance={{
                    baseTheme: theme === "dark" ? dark : undefined,
                  }}
                />
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                {/* Assuming you have these Clerk buttons imported */}
                <SignInButton>
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <div className="md:mr-10">
                  <SignUpButton>
                    <Button size="sm">Sign Up</Button>
                  </SignUpButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default AppHeader;
