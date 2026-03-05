import Hero from '../components/Hero';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import viBg from '../assets/vi.jpg';

gsap.registerPlugin(ScrollTrigger);

/* ─── Animated Stats Counter (scroll-triggered count-up) ─── */
const statsData = [
  { target: 10000, suffix: '+', label: 'Products Delivered', display: '10K' },
  { target: 500, suffix: '+', label: 'Industrial Clients', display: '500' },
  { target: 30, suffix: '+', label: 'Years Experience', display: '30' },
  { target: 99, suffix: '%', label: 'Customer Satisfaction', display: '99' },
];

const formatNumber = (num) => {
  if (num >= 1000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
  return num.toString();
};

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const hasAnimated = useRef(false);

  const runAnimation = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    statsData.forEach((stat, i) => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: stat.target,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (countersRef.current[i]) {
            countersRef.current[i].textContent =
              formatNumber(Math.round(counter.val)) + stat.suffix;
          }
        },
      });
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check if already in viewport on mount (e.g. page refresh while scrolled)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      runAnimation();
    }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: runAnimation,
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              style={{
                padding: '2rem',
              }}
            >
              <h3
                ref={(el) => (countersRef.current[index] = el)}
                style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: '0.5rem',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                0
              </h3>
              <p style={{ color: '#475569' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    // Section title animations
    gsap.from('.section-title', {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
      },
    });

    // Card stagger animation
    gsap.from('.feature-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.features-container',
        start: 'top 85%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Hero />

      {/* Welcome Section */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div
            className="responsive-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Image Side */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'clamp(300px, 50vw, 450px)',
                  backgroundImage: `url(${viBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: 'clamp(8px, 3vw, 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  textAlign: 'center',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.4), rgba(107, 114, 128, 0.4))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Welcome to SteelBond Wires
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  fontWeight: '800',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  background: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '2px',
                }}
              >
                WHO WE ARE
              </h2>

              <div
                style={{
                  height: '4px',
                  width: '80px',
                  background: 'linear-gradient(90deg, #1a1a1a, #9ca3af)',
                  borderRadius: '2px',
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                }}
              ></div>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  color: '#475569',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              >
                SteelBond Wires is a BIS & ISO certified manufacturer of high-quality
                electrical wires for homes, OEMs, agriculture, and industry.
              </p>
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  color: '#475569',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              >
                Made with 99.95%+ pure copper and RoHS & REACH compliant materials, our
                products ensure superior safety, efficiency, and long-term performance.
              </p>

              {/* Key Features Mini Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: 'clamp(0.75rem, 2vw, 1rem)',
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                }}
              >
                {[
                  { icon: '✓', label: 'BIS Certified' },
                  { icon: '⚡', label: 'Pure Copper' },
                  { icon: '🛡️', label: 'RoHS Compliant' },
                  { icon: '🌍', label: 'Global Standard' },
                ].map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#f5f5f5',
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#111111';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#111111';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f5f5f5';
                      e.currentTarget.style.color = '#111111';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                      {feature.icon}
                    </div>
                    <div style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', fontWeight: 600 }}>
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  color: '#111111',
                  fontWeight: 600,
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                }}
              >
                SteelBond Wires - Powering Progress. Connecting Trust.
              </p>
              <button
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a, #6b7280)',
                  color: '#ffffff',
                  border: 'none',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#333333';
                  e.target.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #1a1a1a, #6b7280)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Know More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="section"
        style={{
          background: '#ffffff',
          padding: '4rem 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                      fontWeight: "800",
                      marginBottom: "1.5rem",
                      background: "linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "2px"
              }}
            >
              Our Vision
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#475569',
                lineHeight: '1.9',
              }}
            >
              To be a trusted leader in electrical wiring solutions by delivering safe,
              reliable, and innovative products of the highest quality, empowering homes,
              industries, OEMs, agriculture, and infrastructure with long-term performance
              and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
          padding: '4rem 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              background: '#ffffff',
              padding: '3rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            <h2
              style={{
                    fontWeight: "800",
                      marginBottom: "1.5rem",
                      background: "linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "2px"
              }}
            >
              Since 1996
            </h2>
            <h3
              style={{
  fontSize: "2.5rem",
  fontWeight: 800,
  marginBottom: "1.5rem",
  background: "linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  letterSpacing: "2px",
}}
            >
              A Legacy of Trust & Excellence
            </h3>
            <div
              style={{
                // height: '4px',
                // width: '80px',
                // background: '#111111',
                // margin: '1.5rem auto',
                // borderRadius: '2px',
              }}
            ></div>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#475569',
                lineHeight: '1.8',
                marginTop: '1.5rem',
              }}
            >
              With over 25 years of dedication to excellence, SteelBond Wires has
              consistently delivered premium quality electrical wires to customers across
              India and beyond. Our commitment to innovation, quality, and customer
              satisfaction has made us a trusted name in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: '#f8fafc', padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>Why Choose SteelBond Wires?</h2>
          <div
            className="features-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 80vw, 320px), 1fr))',
              gap: 'clamp(1.5rem, 4vw, 2.5rem)',
              width: '100%',
              margin: '0 auto',
              position: 'relative',
              zIndex: 20,
              visibility: 'visible',
              opacity: 1,
              padding: '1rem',
            }}
          >
            {[
              {
                title: 'Premium Quality',
                description:
                  'Our wires undergo rigorous testing to ensure exceptional durability and performance.',
                icon: '⭐',
                gradient: 'linear-gradient(135deg, #ffd89b 0%, #ffa500 100%)',
              },
              {
                title: 'Industry Expertise',
                description:
                  'Over 30 years of experience serving industrial and manufacturing sectors.',
                icon: '🏭',
                gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              },
              {
                title: 'Custom Solutions',
                description:
                  'Tailored wire solutions designed to meet your specific industry requirements.',
                icon: '⚙️',
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              },
              {
                title: 'Global Reach',
                description:
                  'Reliable supply chain delivering premium products worldwide efficiently.',
                icon: '🌍',
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              },
              {
                title: 'Innovation',
                description:
                  'Continuous R&D for cutting-edge wire technology and manufacturing methods.',
                icon: '🚀',
                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              },
              {
                title: '24/7 Support',
                description:
                  'Dedicated customer support team ready to assist you anytime, anywhere.',
                icon: '📞',
                gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{
                  background: '#ffffff',
                  padding: 'clamp(2rem, 5vw, 2.5rem)',
                  borderRadius: 'clamp(12px, 4vw, 18px)',
                  border: '2px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'visible',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: 'clamp(340px, 90vw, 480px)',
                  boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12)',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                  willChange: 'transform',
                  visibility: 'visible',
                  opacity: 1,
                  zIndex: 25,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.boxShadow = '0 24px 72px rgba(0, 0, 0, 0.18)';
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  
                  const icon = e.currentTarget.querySelector('.feature-icon');
                  if (icon) {
                    gsap.to(icon, {
                      scale: 1.3,
                      rotation: 10,
                      duration: 0.3,
                      ease: 'back.out',
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  
                  const icon = e.currentTarget.querySelector('.feature-icon');
                  if (icon) {
                    gsap.to(icon, {
                      scale: 1,
                      rotation: 0,
                      duration: 0.3,
                      ease: 'back.out',
                    });
                  }
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '140px',
                    height: '140px',
                    background: feature.gradient,
                    borderRadius: '50%',
                    opacity: 0.08,
                    filter: 'blur(3px)',
                    zIndex: -1,
                    pointerEvents: 'none',
                  }}
                ></div>

                <div
                  style={{
                    width: 'clamp(60px, 12vw, 80px)',
                    height: 'clamp(60px, 12vw, 80px)',
                    background: feature.gradient,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                    boxShadow: `0 8px 20px ${feature.gradient}40`,
                    position: 'relative',
                    zIndex: 1,
                  }}
                  className="feature-icon"
                >
                  {feature.icon}
                </div>

                <h3
                  style={{
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                    color: '#000000',
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 800,
                    position: 'relative',
                    zIndex: 2,
                    letterSpacing: '0.5px',
                  }}
                >
                  {feature.title}
                </h3>

                <div
                  style={{
                    height: '3px',
                    width: '40px',
                    background: feature.gradient,
                    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                    borderRadius: '2px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                ></div>

                <p
                  style={{
                    color: '#1a1a1a',
                    lineHeight: '1.8',
                    fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                    position: 'relative',
                    zIndex: 2,
                    flex: 1,
                    fontWeight: 500,
                  }}
                >
                  {feature.description}
                </p>

                <a
                  href="#"
                  style={{
                    marginTop: 'clamp(1.25rem, 3vw, 1.75rem)',
                    color: '#000000',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={(e) => {
                    gsap.to(e.target, {
                      x: 5,
                      duration: 0.3,
                      ease: 'power2.out',
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, {
                      x: 0,
                      duration: 0.3,
                      ease: 'power2.out',
                    });
                  }}
                >
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counters */}
      <StatsCounter />

      {/* Our Products Showcase */}
      <section
        className="section"
        style={{
          background: '#f8fafc',
        }}
      >
        <div className="container">
          <h2 className="section-title">Our Product Range</h2>
          <div
            className="responsive-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: '🔌',
                title: 'House Wiring Cables',
                desc: 'FR, FRLS & ZHFR insulated single & multi-core cables for safe residential wiring.',
                img: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)',
              },
              {
                icon: '⚡',
                title: 'Industrial Power Cables',
                desc: 'Heavy-duty armoured & unarmoured cables rated up to 1100V for factories & plants.',
                img: 'linear-gradient(135deg, #bfbfbf 0%, #2a2a2a 100%)',
              },
              {
                icon: '🚜',
                title: 'Submersible Pump Cables',
                desc: 'PVC insulated flat & round cables designed for submersible pump motors used in agriculture.',
                img: 'linear-gradient(135deg, #ababab 0%, #3a3a3a 100%)',
              },
              {
                icon: '🏗️',
                title: 'Flexible Cables',
                desc: 'Multi-strand flexible copper cables for appliances, machinery connections & temporary wiring.',
                img: 'linear-gradient(135deg, #e8e8e8 0%, #4a4a4a 100%)',
              },
              {
                icon: '🔧',
                title: 'Control & Instrumentation',
                desc: 'Shielded & unshielded cables for precise signal transmission in automation systems.',
                img: 'linear-gradient(135deg, #e8e8e8 0%, #4a4a4a 100%)',
              },
              {
                icon: '☀️',
                title: 'Solar DC Cables',
                desc: 'UV-resistant, double-insulated cables for solar panel installations with 25-year life.',
                img: 'linear-gradient(135deg, #d4d4d4 0%, #555555 100%)',
              },
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    height: '160px',
                    background: product.img,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3.5rem',
                  }}
                >
                  {product.icon}
                </div>
                <div style={{ padding: '1.5rem', background: '#f1f5f9' }}>
                  <h3 style={{ color: '#111111', marginBottom: '0.75rem', fontSize: '1.15rem' }}>
                    {product.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section
        className="section"
        style={{
          background: '#ffffff',
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <h2 className="section-title">Certifications & Compliance</h2>
          <div
            className="responsive-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            {[
              { badge: '🏅', label: 'BIS Certified', sub: 'IS 694:2010' },
              { badge: '✅', label: 'ISO 9001:2015', sub: 'Quality Management' },
              { badge: '🌿', label: 'RoHS Compliant', sub: 'Lead-Free Materials' },
              { badge: '🔬', label: 'REACH Compliant', sub: 'Chemical Safety' },
              { badge: '🛡️', label: 'ISO 14001:2015', sub: 'Env. Management' },
              { badge: '⚡', label: 'NABL Tested', sub: 'Lab Accredited' },
            ].map((cert, index) => (
              <div
                key={index}
                style={{
                  background: '#f5f5f5',
                  padding: '1.5rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#111111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{cert.badge}</div>
                <h4 style={{ color: '#111111', marginBottom: '0.25rem', fontSize: '1rem' }}>{cert.label}</h4>
                <p style={{ color: '#475569', fontSize: '0.8rem' }}>{cert.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div
            className="responsive-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                quote: 'SteelBond Wires has been our go-to supplier for over 10 years. Their quality is consistently exceptional and delivery is always on time.',
                name: 'Manoj Industries',
                role: 'Mumbai, Maharashtra',
              },
              {
                quote: 'We switched to SteelBond for our housing projects and the difference in quality was immediately noticeable. Highly recommended!',
                name: 'Greenfield Builders',
                role: 'Pune, Maharashtra',
              },
              {
                quote: 'Their submersible pump cables outperform competitors by miles. We now exclusively use SteelBond for all agricultural projects.',
                name: 'Agri Solutions Ltd.',
                role: 'Ahmedabad, Gujarat',
              },
            ].map((t, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: '3rem', color: 'rgba(0, 0, 0, 0.12)', position: 'absolute', top: '10px', left: '15px' }}>
                  "
                </div>
                <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.8', marginTop: '1rem' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', paddingTop: '1rem' }}>
                  <p style={{ color: '#111111', fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: '#475569', fontSize: '0.85rem' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #e0e0e0 0%, #666666 50%, #111111 100%)',
          padding: '4rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Ready to Power Your Next Project?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Get in touch with our team for bulk orders, custom specifications, or technical consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                background: '#ffffff',
                color: '#111111',
                border: 'none',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Request a Quote
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid #ffffff',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#111111';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              Download Catalogue
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
