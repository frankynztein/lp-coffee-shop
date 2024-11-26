"use client";
import { useEffect } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Components
import { Hero } from "@/components/Hero";
import { Explore } from "@/components/Explore";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { OpeningHours } from "@/components/OpeningHours";
import { Testimonials } from "@/components/Testimonials";

const Home = () => {
  // Add locomotive scroll
    useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        resetNativeScroll: true,
      });

      const handleAnchorClick = (e) => {
        e.preventDefault();
        
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          locomotiveScroll.scrollTo(targetElement, {
            offset: 0,
            duration: 8,
          });
        }
      };

      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });

      return () => {
        anchors.forEach(anchor => {
          anchor.removeEventListener('click', handleAnchorClick);
        });
        locomotiveScroll.destroy();
      };
    };

    const cleanup = loadLocomotiveScroll();

    return () => {
      cleanup.then(cleanupFn => cleanupFn && cleanupFn());
    };
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero/>
      <Explore/>
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  )
}

export default Home ;