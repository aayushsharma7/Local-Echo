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

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Empowered Citizens",
      description:
        "Take an active role in improving your neighborhood with tools designed for community engagement.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20",
    },
    {
      icon: MapPin,
      title: "Location-aware Reporting",
      description:
        "Precise GPS mapping ensures issues are reported exactly where they occur for faster resolution.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      darkBgColor: "dark:bg-emerald-950/20",
    },
    {
      icon: Bell,
      title: "Real-Time Tracking",
      description:
        "Get instant updates when issues are acknowledged, being worked on, or resolved by local authorities.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      darkBgColor: "dark:bg-amber-950/20",
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description:
        "Simple, intuitive interface that works perfectly on any device - report issues in just a few taps.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-950/20",
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
        id="features"
        className=" relative min-h-screen py-24 bg-gradient-to-b from-background via-surface-soft/30 to-background "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10 opacity-60" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:-mt-0 -mt-17 ">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20 z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              ✨ Why Choose Local Echo
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl">
              Built for{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">
                Impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Powerful features designed to make community engagement effortless
              and effective
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 md:ml-7 md:mr-7 md:-mt-0 -mt-10">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Card */}
                <div className="card-soft dark:bg-gray-900/30 relative h-full p-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-border transition-all duration-500 group-hover:translate-y-[-4px]">
                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 ${feature.bgColor} ${feature.darkBgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute top-1 right-1 w-1 h-1 ${feature.bgColor} rounded-full animate-ping`}
                      />
                      <div
                        className={`absolute bottom-2 left-2 w-0.5 h-0.5 ${feature.bgColor} rounded-full animate-pulse delay-300`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle bottom accent */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Floating trust indicator */}
          <div className="flex justify-center mt-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-background/60 backdrop-blur-sm border border-border/30 rounded-full shadow-lg">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-background flex items-center justify-center">
                  <span className=" text-white dark:text-gray-300 font-bold">
                    P
                  </span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-background flex items-center justify-center">
                  <span className="text-white dark:text-gray-300 font-bold">
                    Y
                  </span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-2 border-background flex items-center justify-center">
                  <span className="text-white dark:text-gray-300 font-bold">
                    A
                  </span>
                </div>
              </div>

              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 50K+ communities
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
