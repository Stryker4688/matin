import { SERVICES } from "../shared/constants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-20 overflow-hidden bg-gray-900"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%)",
      }}
    >
      {/* افکت‌های مشابه Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"></div>

        {/* ذرات متحرک */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.15 + 0.1,
              }}
            />
          ))}
        </div>

        {/* افکت‌های نوری */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-[70px]"></div>
      </div>

      <div className="relative z-10">
        {/* محتوای اصلی فوتر - کاملاً وسط */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* لوگو و عنوان */}
          <div className="text-center mb-16 w-full">
            <div className="flex flex-col items-center justify-center">
              {/* لوگو */}
              <div className="mb-8 relative">
                <div className="relative">
                  {/* هاله نور پشت لوگو */}
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-lg mx-auto -translate-x-1/2 left-1/2"></div>

                  {/* لوگو اصلی */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-xl mx-auto border border-gray-600/50">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
                    <span className="relative text-white font-bold text-2xl bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                      MS
                    </span>
                  </div>
                </div>
              </div>

              {/* عنوان اصلی */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                تماس با{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  ما
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-md mx-auto px-4">
                برای شروع پروژه خلاقانه خود با ما در ارتباط باشید
              </p>
            </div>
          </div>

          {/* اطلاعات تماس - کاملاً وسط */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl px-4">
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2 text-lg">تلفن</h4>
              <p className="text-gray-300 text-xl">۰۹۱۲۷۷۷۳۹۴۱</p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2 text-lg">ایمیل</h4>
              <p className="text-gray-300 text-lg">info@mrshayan.com</p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2 text-lg">آدرس</h4>
              <p className="text-gray-300 text-lg">تهران، ایران</p>
            </div>
          </div>

          {/* خدمات - کاملاً وسط */}
          <div className="mb-12 w-full max-w-2xl px-4">
            <h4 className="text-xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              خدمات ما
            </h4>
            <div className="flex flex-wrap justify-center gap-3 text-gray-300">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex items-center space-x-2 space-x-reverse px-4 py-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-lg">{service.icon}</span>
                  <span className="text-base">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* دکمه‌های اقدام - کاملاً وسط */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full px-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 min-w-[180px] flex items-center justify-center gap-3">
              <span>شروع همکاری</span>
              <svg
                className="w-5 h-5"
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

            <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 min-w-[180px] flex items-center justify-center gap-3">
              <span>نمونه کارها</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>

          {/* کپی رایت - کاملاً وسط */}
          <div className="border-t border-gray-700 pt-8 w-full max-w-2xl text-center px-4">
            <p className="text-gray-400 text-lg">
              © 2025 Mr. Shayan - تمام حقوق محفوظ است
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
