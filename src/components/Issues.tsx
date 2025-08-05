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
  const issues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      status: "In Progress",
      votes: 23,
      statusColor: "bg-yellow-500",
      icon: "🕳️",
    },
    {
      id: 2,
      title: "Broken Streetlight",
      status: "Reported",
      votes: 15,
      statusColor: "bg-primary/80",
      icon: "💡",
    },
    {
      id: 3,
      title: "Overflowing Trash Can",
      status: "Resolved",
      votes: 8,
      statusColor: "bg-green-600",
      icon: "🗑️",
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
      <section id="preview" className="py-20 bg-gradient-to-b from-surface-soft to-background md:-mt-0 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              See{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">
                Issues
              </span>{" "}
              in Real-Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch as your community collaborates to identify and resolve local
              problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start md:ml-7 md:mr-7">
            {/* Mock Map */}
            <div className="relative">
              <Card className="p-8  dark:bg-gray-900/60">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl relative overflow-hidden">
                  {/* Map Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-100"
                    style={{ backgroundImage: "url('/map-preview.png')" }} // replace with actual path
                  />

                  {/* Issue Pins */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-xs">🕳️</span>
                    </div>
                  </div>

                  <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-primary dark:bg-primary/30 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                      <span className="text-xs">💡</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                      <span className="text-xs">🗑️</span>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <div className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs">+</span>
                    </div>
                    <div className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs">-</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground font-medium">
                    Interactive Map Preview
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hover over pins to see details
                  </p>
                </div>
              </Card>
            </div>

            {/* Issues Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Recent Reports</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  <span>Live Updates</span>
                </div>
              </div>

              <div className="space-y-4">
                {issues.map((issue, index) => (
                  <Card
                    key={issue.id}
                    className="p-6 card-soft dark:bg-gray-900/60 group hover:scale-102 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{issue.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {issue.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge
                              variant="secondary"
                              className={`${issue.statusColor} text-white text-xs`}
                            >
                              {issue.status}
                            </Badge>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{issue.votes} votes</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {issue.status === "Resolved" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : issue.status === "In Progress" ? (
                        <Clock className="w-5 h-5 text-yellow-500 animate-spin" />
                      ) : (
                        <MapPin className="w-5 h-5 text-primary/80" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">46</div>
                  <div className="text-xs text-muted-foreground">This Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-xs text-muted-foreground">Resolved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">8</div>
                  <div className="text-xs text-muted-foreground">
                    In Progress
                  </div>
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
