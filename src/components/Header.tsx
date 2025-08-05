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
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Guide", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Preview", href: "#preview" },
    { label: "Testimonials", href: "#testimonials" },
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 -ml-3 md:-ml-0">
              <Image
                src="/logo4.png" // path to your transparent PNG in /public
                alt="LocalEcho Logo"
                width={62} // increase size as needed
                height={62}
                className="object-contain md:-mr-2"
              />
              <span className="text-xl font-semibold text-foreground -ml-5 md:-ml-0">
                <Link href="#front-page">Local </Link>
                <span className="text-gradient">
                  <Link href="#front-page">Echo</Link>
                </span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 ml-23">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="w-9 h-9 p-0"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>

              {/* Auth Buttons */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="hero-bg text-primary-foreground"
                >
                  <Link href="#get-started">Get Started</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden w-9 h-9 p-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-4 h-4 flex flex-col justify-center items-center">
                  <span
                    className={`w-4 h-0.5 bg-current transition-all duration-200 ${
                      isMenuOpen ? "rotate-45 translate-y-0.5" : ""
                    }`}
                  />
                  <span
                    className={`w-4 h-0.5 bg-current transition-all duration-200 mt-1 ${
                      isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    className="hero-bg text-primary-foreground"
                  >
                    <Link
                      href="#get-started"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
