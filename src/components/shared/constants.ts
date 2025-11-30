import { Project, Service, NavigationItem } from './types';

// آیتم‌های منوی ناوبری
export const NAVIGATION_ITEMS: NavigationItem[] = [
    { name: "خانه", href: "#home" },
    { name: "پروژه‌ها", href: "#projects" },
    { name: "تماس", href: "#contact" },
];

// خدمات ارائه شده
export const SERVICES: Service[] = [
    {
        icon: "🎬",
        title: "تدوین ویدیو",
        description: "تدوین حرفه‌ای با کیفیت سینمایی",
    },
    {
        icon: "🎨",
        title: "موشن گرافیک",
        description: "خلق انیمیشن‌های خلاقانه و جذاب",
    },
    {
        icon: "📐",
        title: "مدل‌سازی 3D",
        description: "طراحی سه‌بعدی با جزئیات واقعی",
    },
    {
        icon: "🎭",
        title: "رنگ‌گریدی",
        description: "اصلاح رنگ حرفه‌ای با استانداردهای هالیوود",
    },
];

// پروژه‌های نمونه
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "تدوین سینمایی",
        description: "تدوین و ادیت حرفه‌ای ویدیو با کیفیت سینمایی و افکت‌های پیشرفته",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "ویدیو",
        tags: ["تدوین", "رنگ‌گریدی", "صداگذاری"],
        year: "2025",
        client: "برند معتبر",
    },
    {
        id: 2,
        title: "موشن گرافیک تبلیغاتی",
        description: "ساخت موشن گرافیک خلاقانه برای کمپین تبلیغاتی",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "موشن",
        tags: ["انیمیشن", "طراحی", "صداگذاری"],
        year: "2025",
        client: "شرکت نوآور",
    },
    {
        id: 3,
        title: "مدل سه‌بعدی محصول",
        description: "طراحی و مدل‌سازی سه‌بعدی محصول با جزئیات بالا",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "سه‌بعدی",
        tags: ["3D Modeling", "رندر", "متریال"],
        year: "2025",
        client: "استارتاپ تکنولوژی",
    },
];

// دسته‌بندی‌های پروژه
export const PROJECT_CATEGORIES = ["همه", "ویدیو", "سه‌بعدی", "موشن"];