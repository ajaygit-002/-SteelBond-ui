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
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
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
                  height: '400px',
                  backgroundImage: `url(${viBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  padding: '2rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                Welcome to SteelBond Wires
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2
                style={{
                  fontSize: '2.5rem',
                  color: '#1e293b',
                  marginBottom: '1.5rem',
                }}
              >
                WHO WE ARE
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: '#475569',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                }}
              >
                SteelBond Wires is a BIS & ISO certified manufacturer of high-quality
                electrical wires for homes, OEMs, agriculture, and industry.
              </p>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: '#475569',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                }}
              >
                Made with 99.95%+ pure copper and RoHS & REACH compliant materials, our
                products ensure superior safety, efficiency, and long-term performance.
              </p>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: '#111111',
                  fontWeight: 600,
                  marginBottom: '2rem',
                  lineHeight: '1.8',
                }}
              >
                SteelBond Wires - Powering Progress. Connecting Trust.
              </p>
              <button
                style={{
                  background: '#111111',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#333333';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#111111';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Know More
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
                fontSize: '2.5rem',
                color: '#1e293b',
                marginBottom: '2rem',
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
                fontSize: '2.5rem',
                color: '#1e293b',
                marginBottom: '1rem',
              }}
            >
              Since 1996
            </h2>
            <h3
              style={{
                fontSize: '1.8rem',
                color: '#111111',
                fontWeight: 700,
              }}
            >
              A Legacy of Trust & Excellence
            </h3>
            <div
              style={{
                height: '4px',
                width: '80px',
                background: '#111111',
                margin: '1.5rem auto',
                borderRadius: '2px',
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
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">Why Choose SteelBond Wires?</h2>
          <div
            className="features-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Premium Quality',
                description:
                  'Our wires undergo rigorous testing to ensure exceptional durability and performance.',
                icon: '⭐',
              },
              {
                title: 'Industry Expertise',
                description:
                  'Over 30 years of experience serving industrial and manufacturing sectors.',
                icon: '🏭',
              },
              {
                title: 'Custom Solutions',
                description:
                  'Tailored wire solutions designed to meet your specific industry requirements.',
                icon: '⚙️',
              },
              {
                title: 'Global Reach',
                description:
                  'Reliable supply chain delivering premium products worldwide efficiently.',
                icon: '🌍',
              },
              {
                title: 'Innovation',
                description:
                  'Continuous R&D for cutting-edge wire technology and manufacturing methods.',
                icon: '🚀',
              },
              {
                title: '24/7 Support',
                description:
                  'Dedicated customer support team ready to assist you anytime, anywhere.',
                icon: '📞',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{
                  background: '#ffffff',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#111111';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: '0.75rem', color: '#111111' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
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
