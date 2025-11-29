import { Project, Service, NavigationItem } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { name: "خانه", href: "#home" },
    { name: "پروژه‌ها", href: "#projects" },
    { name: "تماس", href: "#contact" },
];

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

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "تدوین سینمایی",
        description: "تدوین و ادیت حرفه‌ای ویدیو با کیفیت سینمایی و افکت‌های پیشرفته",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "ویدیو",
        tags: ["تدوین", "رنگ‌گریدی", "صداگذاری"],
        year: "2024",
        client: "برند معتبر",
    },
    // ... سایر پروژه‌ها
];

export const PROJECT_CATEGORIES = ["همه", "ویدیو", "سه‌بعدی", "موشن"];