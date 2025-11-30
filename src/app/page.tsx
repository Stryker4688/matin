"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import Footer from "../components/layout/Footer";

export default function LuxuryHomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی بارگذاری داده‌ها
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      dir="rtl"
      className="font-sans bg-white min-h-screen overflow-x-hidden"
    >
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
