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

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Live Map", href: "#live-preview" },
      { label: "Mobile App", href: "#" },
    ],
    community: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "Success Stories", href: "#" },
      { label: "Community Guidelines", href: "#" },
      { label: "Help Center", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Contact" },
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
      <footer className="bg-surface-soft border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8 ">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6 md:ml-7">
              {/* Logo */}
              <div className="flex items-center space-x-2 -ml-4 -mt-5 mb-1">
                <Image
                  src="/logo4.png" // path to your transparent PNG in /public
                  alt="LocalEcho Logo"
                  width={62} // increase size as needed
                  height={62}
                  className="object-contain md:-mr-2"
                />
                <span className="text-xl font-semibold text-foreground -ml-5 md:-ml-0">
                  Local <span className="text-gradient">Echo</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Empowering communities to create positive change through
                collaborative problem-solving and civic engagement.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="space-y-6">
              <h3 className="font-semibold text-foreground">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-foreground">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-border ">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground md:ml-7">
                <span>© 2025 LocalEcho. Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
