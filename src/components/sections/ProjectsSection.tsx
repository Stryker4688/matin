"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "../shared/constants";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("همه");

  const filteredProjects =
    activeFilter === "همه"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            گالری <span className="text-gold-gradient">پروژه‌ها</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            نمونه‌ای از بهترین کارهای ما که با passion و dedication خلق
            شده‌اند
          </p>
        </div>

        {/* فیلتر دسته‌بندی */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "gold-gradient text-black shadow-luxury"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* شبکه پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}