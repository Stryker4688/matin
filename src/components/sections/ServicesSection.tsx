import { SERVICES } from "../shared/constants";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-2 min-h-[55vh] flex items-center justify-center"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-4">
        {/* بخش عنوان - کاملاً وسط‌چین */}
        <div className="text-center w-full mb-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              خدمات{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                حرفه‌ای
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* div جداکننده بین عنوان و محتوا */}
        <div className="h-4"></div>

        {/* بخش محتوای اصلی - کاملاً وسط‌چین */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* کارت‌های سرویس */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full mb-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in-up flex flex-col items-center justify-between text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* افکت هورور */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* شماره سرویس */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* آیکون */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>

                {/* محتوا */}
                <div className="relative z-10 flex flex-col items-center flex-grow w-full">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>
                </div>

                {/* خط پایین */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-3/4 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* آمار خدمات - کاملاً وسط‌چین */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
            {[
              { number: "۵۰۰+", label: "پروژه تکمیل شده", icon: "🎯" },
              { number: "۹۸%", label: "رضایت مشتریان", icon: "⭐" },
              { number: "۵+", label: "سال تجربه", icon: "🚀" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
