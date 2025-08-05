"use client"
import React from 'react'


import { useState, useEffect } from "react";
import { ArrowRight, Users, MapPin, Sparkles, Star } from "lucide-react";
import {  Bell, Smartphone } from "lucide-react";
import {  Github, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Camera, Eye, Shield, Zap,ThumbsUp, Clock, CheckCircle, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import Link from 'next/link';
const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
    

    { label: "Guide", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const footerLinks = {
    product: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Live Map", href: "#live-preview" },
      { label: "Mobile App", href: "#" }
    ],
    community: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "Success Stories", href: "#" },
      { label: "Community Guidelines", href: "#" },
      { label: "Help Center", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Contact" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Community Organizer",
      avatar: "👩‍💼",
      content: "Reported a pothole in 2 clicks — fixed in 3 days! LocalEcho made it so easy to get our community's voice heard.",
      rating: 5,
      location: "Downtown District"
    },
    {
      name: "Mike Rodriguez", 
      role: "Local Resident",
      avatar: "👨‍🏫",
      content: "Finally, a platform that actually works! Tracked my streetlight report from submission to completion. Transparency at its finest.",
      rating: 5,
      location: "Riverside Area"
    },
    {
      name: "Emily Watson",
      role: "Neighborhood Watch",
      avatar: "👩‍🦳", 
      content: "Love how I can see what issues my neighbors are reporting. It's bringing our community together to solve problems collectively.",
      rating: 5,
      location: "Oak Hill"
    },
    {
      name: "David Kim",
      role: "Small Business Owner",
      avatar: "👨‍💼",
      content: "The real-time updates are game-changing. I can stay informed about issues affecting my business area and customers.",
      rating: 5,
      location: "Market District"
    },
    {
      name: "Lisa Thompson",
      role: "Parent & Advocate",
      avatar: "👩‍🏫",
      content: "Reported unsafe playground equipment and got instant community support. Local authorities responded within hours!",
      rating: 5,
      location: "Family Gardens"
    },
    {
      name: "Carlos Rivera",
      role: "College Student",
      avatar: "👨‍🎓",
      content: "Super intuitive app! Even my non-tech-savvy neighbors are using it. Making civic engagement accessible to everyone.",
      rating: 5,
      location: "University Quarter"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Empowered Citizens",
      description: "Take an active role in improving your neighborhood with tools designed for community engagement.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20"
    },
    {
      icon: MapPin,
      title: "Location-aware Reporting", 
      description: "Precise GPS mapping ensures issues are reported exactly where they occur for faster resolution.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      darkBgColor: "dark:bg-emerald-950/20"
    },
    {
      icon: Bell,
      title: "Real-Time Tracking",
      description: "Get instant updates when issues are acknowledged, being worked on, or resolved by local authorities.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      darkBgColor: "dark:bg-amber-950/20"
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Simple, intuitive interface that works perfectly on any device - report issues in just a few taps.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-950/20"
    }
  ];

  const issues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      status: "In Progress",
      votes: 23,
      statusColor: "bg-yellow-500",
      icon: "🕳️"
    },
    {
      id: 2,
      title: "Broken Streetlight",
      status: "Reported", 
      votes: 15,
      statusColor: "bg-primary/80",
      icon: "💡"
    },
    {
      id: 3,
      title: "Overflowing Trash Can",
      status: "Resolved",
      votes: 8,
      statusColor: "bg-green-600",
      icon: "🗑️"
    }
  ];

   const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
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

  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Pin the Problem",
      description: "Tap on the map to mark exactly where the issue is located in your neighborhood.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20"
    },
    {
      number: "02", 
      icon: Camera,
      title: "Add Photo & Details",
      description: "Take a photo and describe the problem to help your community understand the issue.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      darkBgColor: "dark:bg-emerald-950/20"
    },
    {
      number: "03",
      icon: Users,
      title: "Community Support", 
      description: "Let neighbors support your report and track progress together in real-time.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      darkBgColor: "dark:bg-amber-950/20"
    }
  ];

  return (
    <div>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 -ml-3 md:-ml-0">
            
            <Image
              src="/logo4.png"        // path to your transparent PNG in /public
              alt="LocalEcho Logo"
              width={62}             // increase size as needed
              height={62}
              className="object-contain md:-mr-2"
            />
            <span className="text-xl font-semibold text-foreground -ml-5 md:-ml-0">
              <Link href="#front-page">
              Local{" "}
              </Link>
              <span className='text-gradient'>
                <Link href="#front-page">
                Echo
                </Link>
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
              <Button asChild size="sm" className="hero-bg text-primary-foreground">
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
                <span className={`w-4 h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                <span className={`w-4 h-0.5 bg-current transition-all duration-200 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
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
                
                <Button asChild size="sm" className="hero-bg text-primary-foreground">
                  <Link href="#get-started" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
     <section id="front-page" className=" relative min-h-screen pt-20 pb-16 overflow-hidden md:ml-7 md:mr-7">
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className=" inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium  md:ml-0 ml-7 ">
              <Zap className="w-4 h-4" />
              <span>Empowering Communities Since 2024</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4 md:-mt-4">
              <h1 className="text-4xl md:text-7xl font-bold md:leading-20 text-center md:text-left">
                
                Community Hub,{" "} 
                <br></br>
                <span className="text-gradient">
                   for Local Issues.
                   <br></br>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg md:text-left text-center">
                Report local issues, track progress in real-time, and work together to make your community better. One report at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex md:flex-row flex-col gap-4 -ml-2 md:-ml-0 ">
              <Button size="lg" className="hero-bg text-primary-foreground glow-primary interactive">
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
              <span className='text-white'>Live Updates</span>
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
    
      <section id="how-it-works" className="md:scroll-mt-10 scroll-mt-5 py-20 bg-gradient-to-b from-background to-surface-soft md:ml-7 md:mr-7 md:-mt-0 -mt-17">
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl">
            3-Step {" "}
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
              
              <Card className="relative p-8 card-soft dark:bg-gray-900/30 text-center h-full group hover:scale-105 transition-all duration-300" >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 ${step.bgColor} ${step.darkBgColor} rounded-full flex items-center justify-center border-2 border-background`}>
                    <span className={`text-sm font-bold ${step.color}`}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} ${step.darkBgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
            <span className="text-sm font-medium text-primary">Ready to make a difference?</span>
          </div>
        </div>
      </div>
    </section>
     <section id="features" className= " relative min-h-screen py-24 bg-gradient-to-b from-background via-surface-soft/30 to-background ">
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
            Powerful features designed to make community engagement effortless and effective
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 md:ml-7 md:mr-7 md:-mt-0 -mt-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card */}
              <div className="card-soft dark:bg-gray-900/30 relative h-full p-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-border transition-all duration-500 group-hover:translate-y-[-4px]">
                {/* Icon */}
                <div className={`relative w-14 h-14 ${feature.bgColor} ${feature.darkBgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-1 right-1 w-1 h-1 ${feature.bgColor} rounded-full animate-ping`} />
                    <div className={`absolute bottom-2 left-2 w-0.5 h-0.5 ${feature.bgColor} rounded-full animate-pulse delay-300`} />
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
                <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Floating trust indicator */}
        <div className="flex justify-center mt-20">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-background/60 backdrop-blur-sm border border-border/30 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-background flex items-center justify-center">
                <span className=" text-white dark:text-gray-300 font-bold">P</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-white dark:text-gray-300 font-bold">Y</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-white dark:text-gray-300 font-bold">A</span>
              </div>
            </div>

            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 50K+ communities
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-b from-surface-soft to-background md:-mt-0 -mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            See{" "} 
            <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">
              Issues
            </span>
            {" "}in Real-Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch as your community collaborates to identify and resolve local problems
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
                <p className="text-sm text-muted-foreground font-medium">Interactive Map Preview</p>
                <p className="text-xs text-muted-foreground mt-1">Hover over pins to see details</p>
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
                <Card key={issue.id} className="p-6 card-soft dark:bg-gray-900/60 group hover:scale-102 transition-all duration-300">
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
                <div className="text-xs text-muted-foreground">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="md:scroll-mt-10 scroll-mt-5 py-20 bg-gradient-to-b from-background to-surface-soft md:-mt-0 -mt-17">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Voices from the{" "} 
            <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">
              Community
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how LocalEcho is making a real difference in neighborhoods across the country
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-7 md:mr-7">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 card-soft dark:bg-gray-900/60 group hover:scale-105 transition-all duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
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
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.location}</div>
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
            <div className="text-sm text-muted-foreground">Issues Reported</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-green-600">1,923</div>
            <div className="text-sm text-muted-foreground">Issues Resolved</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-yellow-500">15,234</div>
            <div className="text-sm text-muted-foreground">Community Votes</div>
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
    <section id="get-started" className="md:-scroll-mt-15 -scroll-mt-0 py-32 relative overflow-hidden">
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
                  Be part of a community that cares. Report issues, support your neighbors, and watch as your voice creates real change.
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
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Free forever</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Privacy protected</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300" />
                  <span className="text-sm font-medium">Community driven</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="flex justify-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-background/60 via-surface-soft/80 to-background/60 backdrop-blur-sm border border-border/30 px-8 py-4 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Works on all devices</span>
              </div>
              <div className="w-px h-4 bg-border/50" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary-glow to-primary rounded-full animate-pulse delay-500" />
                <span className="text-sm font-medium text-muted-foreground">Mobile-first design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-surface-soft border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8 ">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6 md:ml-7">
            {/* Logo */}
            <div className="flex items-center space-x-2 -ml-4 -mt-5 mb-1">
            <Image
              src="/logo4.png"        // path to your transparent PNG in /public
              alt="LocalEcho Logo"
              width={62}             // increase size as needed
              height={62}
              className="object-contain md:-mr-2"
            />
            <span className="text-xl font-semibold text-foreground -ml-5 md:-ml-0">
              Local{" "}
              <span className='text-gradient'>
                Echo
              </span>
              
              </span>
          </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering communities to create positive change through collaborative problem-solving and civic engagement.
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
  )
}

export default LandingPage
