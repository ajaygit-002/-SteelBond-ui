import Hero from '../components/Hero';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

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

      {/* Features Section */}
      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <h2 className="section-title">Why Choose SteelBond?</h2>
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
                  background: 'linear-gradient(135deg, #1e293b 0%, rgba(30, 41, 59, 0.5) 100%)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(249, 115, 22, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#f97316';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(249, 115, 22, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: '0.75rem', color: '#f97316' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
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
            {[
              { number: '10K+', label: 'Products Delivered' },
              { number: '500+', label: 'Industrial Clients' },
              { number: '30+', label: 'Years Experience' },
              { number: '99%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: '#f97316',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.number}
                </h3>
                <p style={{ color: '#94a3b8' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
