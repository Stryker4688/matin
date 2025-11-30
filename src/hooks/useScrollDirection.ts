import { useState, useEffect } from 'react';

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState<'home' | 'projects' | 'contact'>('home');

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;
            setScrollY(scrollY);

            // بررسی آیا کاربر اسکرول کرده است
            setIsScrolled(scrollY > 50);

            // تشخیص section فعال بر اساس موقعیت اسکرول
            const homeSection = document.getElementById('home');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');

            if (homeSection && projectsSection && contactSection) {
                const homeRect = homeSection.getBoundingClientRect();
                const projectsRect = projectsSection.getBoundingClientRect();
                const contactRect = contactSection.getBoundingClientRect();

                if (scrollY < projectsRect.top + 100) {
                    setActiveSection('home');
                } else if (scrollY < contactRect.top + 100) {
                    setActiveSection('projects');
                } else {
                    setActiveSection('contact');
                }
            }

            // منطق نمایش/پنهان کردن نوبار با انیمیشن نرم
            if (scrollY > 100 && scrollY > lastScrollY) {
                setScrollDirection('down');
                setIsVisible(false);
            } else {
                setScrollDirection('up');
                setIsVisible(true);
            }

            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // فراخوانی اولیه برای تنظیم section فعال
        updateScrollDir();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { scrollDirection, isScrolled, scrollY, isVisible, activeSection };
}