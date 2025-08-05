"use client";
import React from "react";
import { useState, useEffect } from "react";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import Issues from "@/components/Issues";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
const LandingPage = () => {
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
      <Hero />
      <Guide />
      <Features />
      <Issues />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
