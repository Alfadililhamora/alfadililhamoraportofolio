import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isScrollingUp = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY !== lastScrollY) {
        isScrollingUp = currentY < lastScrollY;
        lastScrollY = currentY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains('active')) {
              if (isScrollingUp) {
                entry.target.classList.add('from-bottom');
              } else {
                entry.target.classList.remove('from-bottom');
              }
              entry.target.classList.add('active');
            }
          } else {
            entry.target.classList.remove('active', 'from-bottom');
          }
        });
      },
      {
        rootMargin: '-18% 0px -28% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
}
