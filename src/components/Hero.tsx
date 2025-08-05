"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight, Users, MapPin, Sparkles, Star } from "lucide-react";
import { Bell, Smartphone } from "lucide-react";
import { Github, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Camera,
  Eye,
  Shield,
  Zap,
  ThumbsUp,
  Clock,
  CheckCircle,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import Issues from "@/components/Issues";
import Testimonials from "@/components/Testimonials";
const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {/* header */}
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <section
        id="front-page"
        className=" relative min-h-screen pt-20 pb-16 overflow-hidden md:ml-7 md:mr-7"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className=" inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium  md:ml-0 ml-7 ">
                <Zap className="w-4 h-4" />
                <span>Empowering Communities Since 2025</span>
              </div>

              {/* Main Headlines */}
              <div className="space-y-4 md:-mt-4">
                <h1 className="text-4xl md:text-7xl font-bold md:leading-20 text-center md:text-left">
                  Community Hub, <br></br>
                  <span className="text-gradient">
                    for Local Issues.
                    <br></br>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg md:text-left text-center">
                  Report local issues, track progress in real-time, and work
                  together to make your community better. One report at a time.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex md:flex-row flex-col gap-4 -ml-2 md:-ml-0 ">
                <Button
                  size="lg"
                  className="hero-bg text-primary-foreground glow-primary interactive"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Report an Issue
                </Button>
                <Button size="lg" variant="outline" className="interactive">
                  <MapPin className="w-5 h-5 mr-2" />
                  Explore Map
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex md:flex-wrap items-center text-center gap-6 text-md text-nowrap text-muted-foreground">
                <div className="flex items-center space-x-2 -ml-1 md:-ml-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Live tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <span>Privacy first</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Always free</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image & Stats */}
            <div className="relative mt-5 md:mt-15 -ml-2 md:-ml-0">
              {/* Hero Image */}
              <div className="relative">
                <img
                  src="/heroimg1.jpg"
                  alt="LocalEcho app showing community issue reporting"
                  className="w-full h-auto rounded-2xl shadow-2xl float"
                />

                {/* Floating Stats Card */}
                <Card className="absolute bottom-4 left-4 p-4  backdrop-blur-sm bg-card border border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-sm text-muted-foreground">Reports</div>
                  </div>
                </Card>

                {/* Live Updates Badge - Fixed positioning */}
                {/* <div className="absolute top-4 right-4 bg-yellow-500 text-warning-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                 Live Updates
              </div> */}
                <div className=" inline-flex absolute top-4 right-4 items-center bg-yellow-600 text-warning-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1" />
                  <span className="text-white">Live Updates</span>
                </div>
              </div>

              {/* Feature Icons */}
              <div className="hidden lg:block">
                <div className="absolute -top-8 -right-8 w-16 h-16 feature-icon rounded-2xl flex items-center justify-center float">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-1/2 -left-8 w-14 h-14 feature-icon rounded-xl flex items-center justify-center float delay-500">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-8 right-1/4 w-12 h-12 feature-icon rounded-lg flex items-center justify-center float delay-1000">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
