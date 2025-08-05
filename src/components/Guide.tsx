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

const Guide = () => {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Pin the Problem",
      description:
        "Tap on the map to mark exactly where the issue is located in your neighborhood.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20",
    },
    {
      number: "02",
      icon: Camera,
      title: "Add Photo & Details",
      description:
        "Take a photo and describe the problem to help your community understand the issue.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      darkBgColor: "dark:bg-emerald-950/20",
    },
    {
      number: "03",
      icon: Users,
      title: "Community Support",
      description:
        "Let neighbors support your report and track progress together in real-time.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      darkBgColor: "dark:bg-amber-950/20",
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
        id="how-it-works"
        className="md:scroll-mt-10 scroll-mt-5 py-20 bg-gradient-to-b from-background to-surface-soft md:ml-7 md:mr-7 md:-mt-0 -mt-17"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl">
              3-Step{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">
                Guide
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making your voice heard in your community is as simple as 1-2-3
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {/* {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-4 -translate-y-1/2" />
              )} */}

                <Card className="relative p-8 card-soft dark:bg-gray-900/30 text-center h-full group hover:scale-105 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-8 h-8 ${step.bgColor} ${step.darkBgColor} rounded-full flex items-center justify-center border-2 border-background`}
                    >
                      <span className={`text-sm font-bold ${step.color}`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${step.bgColor} ${step.darkBgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-primary/5 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Ready to make a difference?
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
