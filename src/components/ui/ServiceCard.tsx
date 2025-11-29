import { Service } from "../shared/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className="group text-center glass-effect rounded-2xl p-8 shadow-soft hover-lift border border-white/50 overflow-hidden relative"
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "both",
      }}
    >
      {/* افکت هورور */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* آیکون */}
      <div className="relative z-10">
        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* عنوان */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gold-gradient transition-colors duration-300">
          {service.title}
        </h3>

        {/* توضیحات */}
        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
          {service.description}
        </p>
      </div>

      {/* خط طلایی پایین */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 gold-gradient transition-all duration-500 group-hover:w-1/2"></div>
    </div>
  );
}
