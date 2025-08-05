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

const Issues = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Community Organizer",
      avatar: "👩‍💼",
      content:
        "Reported a pothole in 2 clicks — fixed in 3 days! LocalEcho made it so easy to get our community's voice heard.",
      rating: 5,
      location: "Downtown District",
    },
    {
      name: "Mike Rodriguez",
      role: "Local Resident",
      avatar: "👨‍🏫",
      content:
        "Finally, a platform that actually works! Tracked my streetlight report from submission to completion. Transparency at its finest.",
      rating: 5,
      location: "Riverside Area",
    },
    {
      name: "Emily Watson",
      role: "Neighborhood Watch",
      avatar: "👩‍🦳",
      content:
        "Love how I can see what issues my neighbors are reporting. It's bringing our community together to solve problems collectively.",
      rating: 5,
      location: "Oak Hill",
    },
    {
      name: "David Kim",
      role: "Small Business Owner",
      avatar: "👨‍💼",
      content:
        "The real-time updates are game-changing. I can stay informed about issues affecting my business area and customers.",
      rating: 5,
      location: "Market District",
    },
    {
      name: "Lisa Thompson",
      role: "Parent & Advocate",
      avatar: "👩‍🏫",
      content:
        "Reported unsafe playground equipment and got instant community support. Local authorities responded within hours!",
      rating: 5,
      location: "Family Gardens",
    },
    {
      name: "Carlos Rivera",
      role: "College Student",
      avatar: "👨‍🎓",
      content:
        "Super intuitive app! Even my non-tech-savvy neighbors are using it. Making civic engagement accessible to everyone.",
      rating: 5,
      location: "University Quarter",
    },
  ];

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
      <section
        id="testimonials"
        className="md:scroll-mt-10 scroll-mt-5 py-20 bg-gradient-to-b from-background to-surface-soft md:-mt-0 -mt-17"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl">
              Voices from the{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">
                Community
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how LocalEcho is making a real difference in neighborhoods
              across the country
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-7 md:mr-7">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 card-soft dark:bg-gray-900/60 group hover:scale-105 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-warning fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">2,847</div>
              <div className="text-sm text-muted-foreground">
                Issues Reported
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-green-600">1,923</div>
              <div className="text-sm text-muted-foreground">
                Issues Resolved
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-yellow-500">15,234</div>
              <div className="text-sm text-muted-foreground">
                Community Votes
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-info">127</div>
              <div className="text-sm text-muted-foreground">Neighborhoods</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              <span>Join the movement • Be the change</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="get-started"
        className="md:-scroll-mt-15 -scroll-mt-0 py-32 relative overflow-hidden"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-glow/8 rounded-full blur-3xl animate-pulse delay-1000 opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:-mt-0 -mt-17">
          <div className="max-w-5xl mx-auto">
            {/* Main CTA Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 rounded-[2rem] blur-2xl opacity-60" />

              {/* Card */}
              <div className=" relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-[2rem] p-12 md:p-16 text-center">
                {/* Floating badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 relative">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Make a Difference?</span>

                  {/* Sparkle animations */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-500" />
                </div>

                {/* Headlines */}
                <div className="space-y-6 mb-12">
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight md:leading-19">
                    Join{" "}
                    <span className="relative">
                      <span className="text-gradient bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                        thousands
                      </span>
                      {/* Underline accent */}
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary-glow/60 to-primary/40 rounded-full" />
                    </span>
                    <br />
                    improving their
                    <br />
                    neighborhoods
                  </h2>
                  <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Be part of a community that cares. Report issues, support
                    your neighbors, and watch as your voice creates real change.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-glow text-white border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl"
                  >
                    <MapPin className="w-5 h-5 mr-3" />
                    Start Reporting Now
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl"
                  >
                    <Users className="w-5 h-5 mr-3" />
                    Explore Community
                  </Button>
                </div>

                {/* Trust indicators with modern design */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Free forever</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-border" />
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Privacy protected
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-border" />
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300" />
                    <span className="text-sm font-medium">
                      Community driven
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="flex justify-center mt-16">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-background/60 via-surface-soft/80 to-background/60 backdrop-blur-sm border border-border/30 px-8 py-4 rounded-full shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Works on all devices
                  </span>
                </div>
                <div className="w-px h-4 bg-border/50" />
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-glow to-primary rounded-full animate-pulse delay-500" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Mobile-first design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Issues;
