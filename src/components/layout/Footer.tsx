import { SERVICES } from "../shared/constants";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center shadow-luxury">
                <span className="text-black font-bold text-2xl">MS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">شرکت مستر شایان</h3>
                <p className="text-gray-400">خلاقیت در اوج کیفیت</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              ما با سال‌ها تجربه در زمینه تولید محتوای چندرسانه‌ای، همراهی مطمئن
              برای تحقق رویاهای خلاقانه شما هستیم.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-gradient">
              خدمات ما
            </h4>
            <ul className="space-y-3 text-gray-300">
              {SERVICES.map((service) => (
                <li
                  key={service.title}
                  className="hover:text-yellow-400 transition-colors cursor-pointer flex items-center space-x-2 space-x-reverse"
                >
                  <span>{service.icon}</span>
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-gradient">
              تماس با ما
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
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
                <span>09127773941</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
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
                <span>info@mrshayanthebooster.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
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
                <span>تهران، ایران</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 شرکت مستر شایان. تمام حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
