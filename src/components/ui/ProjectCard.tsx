import { Project } from "../shared/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-luxury hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2 group/btn">
          مشاهده جزئیات
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
  );
}
