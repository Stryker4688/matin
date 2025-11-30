import { Project } from "../shared/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-luxury hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2 group/btn text-sm">
          مشاهده جزئیات
          <svg
            className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform"
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
