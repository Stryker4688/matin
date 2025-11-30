"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "../shared/constants";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("همه");

  const filteredProjects =
    activeFilter === "همه"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%)",
      }}
    >
      {/* افکت‌های زمینه */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"></div>
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* هدر پروژه‌ها */}
        <div className="text-center w-full mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              گالری{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                پروژه‌ها
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            هر پروژه داستانی منحصر به فرد از خلاقیت و تخصص است
          </p>
        </div>

        {/* فیلترها */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 w-full max-w-4xl px-4">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* شبکه پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* تصویر پروژه */}
              <div className="relative overflow-hidden h-64 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* محتوای پروژه */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-lg text-center flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-bold flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl">
                  <span>مشاهده جزئیات</span>
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
