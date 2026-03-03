import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (selector, animationConfig = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const defaultConfig = {
      from: true,
      duration: 1,
      ease: 'power3.out',
      ...animationConfig,
    };

    const {
      from,
      duration,
      ease,
      x = 0,
      y = 80,
      opacity = 0,
      rotation = 0,
      scale = 1,
      stagger = 0,
      scrollTrigger = {},
    } = defaultConfig;

    const scrollTriggerConfig = {
      trigger: selector,
      start: 'top 85%',
      end: 'bottom 15%',
      ...scrollTrigger,
    };

    const animation = {
      duration,
      ease,
      opacity,
      rotation,
      scale,
      stagger,
      scrollTrigger: scrollTriggerConfig,
    };

    if (x !== 0) animation.x = x;
    if (y !== 0) animation.y = y;

    if (from) {
      gsap.from(selector, animation);
    } else {
      gsap.to(selector, animation);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animationConfig]);
};

export default useScrollAnimation;
