"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%)",
      }}
    >
      {/* افکت دکوراتیو پیشرفته */}
      <div className="absolute inset-0 overflow-hidden">
        {/* گرادیانت متحرک */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 animate-gradient"></div>

        {/* ذرات متحرک */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>

        {/* افکت‌های نوری */}
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px]"></div>
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-20 text-center w-full max-w-6xl mx-auto px-6">
        <div
          className={`flex flex-col items-center justify-center transform transition-all duration-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* لوگو - بسیار زیبا و برجسته */}
          <div className="mb-16 relative">
            <div className="relative">
              {/* هاله نور پشت لوگو */}
              <div className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl mx-auto -translate-x-1/2 left-1/2 animate-pulse"></div>

              {/* لوگو اصلی */}
              <div className="relative w-36 h-36 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full flex items-center justify-center shadow-2xl mx-auto border-2 border-gray-600/50 hover:scale-110 hover:rotate-3 transition-all duration-700 group cursor-pointer">
                {/* افکت درخشان */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* شیشه‌ای افکت */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>

                <span className="relative text-white font-bold text-5xl bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                  MS
                </span>
              </div>

              {/* دایره چرخان */}
              <div className="absolute inset-0 w-44 h-44 border-2 border-blue-400/30 border-t-transparent rounded-full animate-spin-slow mx-auto -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"></div>
            </div>

            {/* متن زیر لوگو */}
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Mr. Shayan</h2>
              <p className="text-gray-400 text-lg font-light">
                Creative Excellence
              </p>
            </div>
          </div>

          {/* عنوان اصلی - بسیار زیبا */}
          <div className="mb-20 w-full">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="block text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  داستان‌های
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient bg-300%">
                  بصری ناب
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* توضیحات - بسیار زیبا */}
          <div className="mb-24 w-full max-w-4xl mx-auto">
            <div className="relative">
              <p className="text-2xl lg:text-3xl xl:text-4xl text-gray-300 leading-relaxed font-light px-8 bg-gradient-to-b from-white/80 to-white/60 bg-clip-text text-transparent">
                هر فریم، یک احساس | هر پروژه، یک{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                    شاهکار
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></span>
                </span>
              </p>

              {/* افکت زیر متن */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </div>
          </div>

          {/* دکمه‌های اقدام - فوق العاده */}
          <div className="mb-28 w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              {/* دکمه اول */}
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 min-w-[240px] border-2 border-blue-400/30 flex items-center justify-center gap-4">
                {/* افکت درخشان */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative">نمونه کارها</span>
                <svg
                  className="w-6 h-6 relative transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              {/* دکمه دوم */}
              <button className="group relative overflow-hidden bg-white/10 backdrop-blur-xl text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-500 min-w-[240px] transform hover:scale-105 border-2 border-white/20 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4">
                <span className="relative">شروع همکاری</span>
                <svg
                  className="w-6 h-6 relative transform group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* آمار و ارقام - بسیار زیبا */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-16">
              {[
                { number: "۵۰۰+", label: "پروژه موفق", suffix: "🎯" },
                { number: "۹۸%", label: "رضایت مشتری", suffix: "⭐" },
                { number: "۵+", label: "سال تجربه", suffix: "🚀" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="relative">
                    {/* افکت پشت عدد */}
                    <div className="absolute inset-0 text-7xl font-black text-blue-500/5 -z-10 group-hover:text-purple-500/10 transition-colors duration-500">
                      {stat.number}
                    </div>

                    <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-500 relative">
                      {stat.number}
                      <span className="absolute -top-2 -right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors duration-500 transform group-hover:translate-y-1">
                      {stat.label}
                    </div>

                    {/* خط انیمیشنی */}
                    <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 transition-all duration-700 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* نشانگر اسکرول پایین - بسیار زیبا */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-4 group cursor-pointer">
          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
            کشف دنیای خلاقیت
          </span>
          <div className="w-10 h-16 border-2 border-gray-400/50 rounded-full flex justify-center group-hover:border-blue-400 transition-colors duration-300 relative overflow-hidden">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>

            {/* افکت درخشان */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
