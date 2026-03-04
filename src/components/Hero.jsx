import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidEther from './LiquidEther';
import '../styles/hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Hero content animation on page load
    gsap.timeline()
      .from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
      }, 0)
      .from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.2)
      .from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'elastic.out',
      }, 0.4)
      .from('.scroll-indicator', {
        opacity: 0,
        duration: 0.6,
      }, 0.6);

    // Parallax effect on scroll
    gsap.to('.hero-background', {
      y: window.innerHeight * 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    // Hero content fade out on scroll
    gsap.to('.hero-content', {
      opacity: 0.3,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'center center',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="hero">
      {/* LiquidEther WebGL background */}
      <div className="hero-background">
        <LiquidEther
          colors={['#ffffff', '#cccccc', '#999999', '#666666', '#333333', '#111111']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="hero-pattern"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Powering Strong Connections</h1>
        <p className="hero-subtitle">
          Reliable Wire Solutions for Modern Industries
        </p>
        <div className="hero-cta">
          <button className="hero-button primary">Explore More</button>
          <button className="hero-button secondary">Learn More</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15l-4-4m4 4l4-4m-4 4V3" />
          <path d="M12 21v-6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
