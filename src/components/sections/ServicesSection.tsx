import { SERVICES } from "../shared/constants";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            خدمات <span className="text-gold-gradient">حرفه‌ای</span> ما
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            با بهره‌گیری از آخرین تکنولوژی‌ها و متخصصان مجرب
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
