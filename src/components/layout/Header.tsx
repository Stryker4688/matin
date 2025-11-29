"use client";

import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "../shared/constants";
import { useScrollDirection } from "../../hooks/useScrollDirection";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isScrolled, isVisible, activeSection } = useScrollDirection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // تابع برای دریافت استایل بر اساس section فعال
  const getHeaderStyle = () => {
    switch (activeSection) {
      case "home":
        return {
          bg: "bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95",
          border: "border-gray-600",
          text: "text-white",
        };
      case "projects":
        return {
          bg: "bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95",
          border: "border-gray-600",
          text: "text-white",
        };
      case "contact":
        return {
          bg: "bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95",
          border: "border-gray-600",
          text: "text-white",
        };
      default:
        return {
          bg: "bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95",
          border: "border-gray-600",
          text: "text-white",
        };
    }
  };

  // تابع برای دریافت استایل دکمه CTA بر اساس section فعال
  const getCTAButtonStyle = () => {
    switch (activeSection) {
      case "home":
        return "bg-gradient-to-br from-indigo-800 via-purple-800 to-violet-900 text-white border-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-800 shadow-2xl transform hover:scale-105";
      case "projects":
        return "bg-gradient-to-br from-indigo-800 via-purple-800 to-violet-900 text-white border-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-800 shadow-2xl transform hover:scale-105";
      case "contact":
        return "bg-gradient-to-br from-indigo-800 via-purple-800 to-violet-900 text-white border-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-800 shadow-2xl transform hover:scale-105";
      default:
        return "bg-gradient-to-br from-indigo-800 via-purple-800 to-violet-900 text-white border-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-800 shadow-2xl transform hover:scale-105";
    }
  };

  const headerStyle = getHeaderStyle();
  const ctaButtonStyle = getCTAButtonStyle();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out backdrop-blur-sm ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? `h-16 shadow-xl py-2 border-b ${headerStyle.bg} ${headerStyle.border}`
          : `h-20 py-4 ${headerStyle.bg} ${headerStyle.border}`
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 h-full">
        <div className="flex justify-between items-center h-full">
          {/* لوگو و برند */}
          <div className="flex items-center">
            {/* لوگو MS */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300 border ${
                activeSection === "home"
                  ? "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-600"
                  : activeSection === "projects"
                  ? "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-600"
                  : "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-600"
              }`}
            >
              <span className="text-white font-bold text-base">MS</span>
            </div>

            {/* فاصله بسیار کم بین لوگو و متن */}
            <div className="w-1.5"></div>

            {/* متن برند */}
            <div
              className={`transition-all duration-700 ease-out ${
                isMounted
                  ? "translate-x-0 opacity-100"
                  : "translate-x-6 opacity-0"
              }`}
            >
              <h1 className="text-lg font-bold text-white">Mr. Shayan</h1>
              <p className="text-xs text-gray-300 mt-0.5">Creative Studio</p>
            </div>
          </div>

          {/* منوی ناوبری دسکتاپ - CENTERED */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {NAVIGATION_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-6 py-3 rounded-xl transition-all duration-500 ease-out relative group min-w-[110px] text-center shadow-md hover:scale-105 border text-sm font-medium ${
                  activeSection === "home"
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-600 hover:from-gray-700 hover:to-gray-800"
                    : activeSection === "projects"
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-600 hover:from-gray-700 hover:to-gray-800"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-600 hover:from-gray-700 hover:to-gray-800"
                } ${
                  isMounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 80 + 200}ms`,
                }}
                onClick={handleNavClick}
              >
                {item.name}
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* دکمه CTA */}
          <button
            className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-600 ease-out border min-w-[150px] ${ctaButtonStyle} ${
              isMounted
                ? "translate-y-0 opacity-100 scale-100 rotate-0"
                : "translate-y-8 opacity-0 scale-95 -rotate-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            درخواست همکاری
          </button>

          {/* دکمه منوی موبایل */}
          <button
            className={`lg:hidden flex flex-col space-y-1 w-8 h-8 justify-center items-center transition-all duration-500 ease-out ${
              isMounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "700ms" }}
            onClick={toggleMobileMenu}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out rounded-full ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out rounded-full ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out rounded-full ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* منوی موبایل */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className={`rounded-xl p-5 shadow-xl border backdrop-blur-sm ${
              activeSection === "home"
                ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600"
                : activeSection === "projects"
                ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600"
                : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600"
            }`}
          >
            <div className="flex flex-col gap-3">
              {NAVIGATION_ITEMS.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-3.5 rounded-lg transition-all duration-300 ease-out text-sm shadow-md text-white text-center font-medium ${
                    activeSection === "home"
                      ? "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700"
                      : activeSection === "projects"
                      ? "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700"
                      : "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
