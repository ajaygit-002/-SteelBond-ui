import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
  useEffect(() => {
    gsap.from('.resource-item', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.resources-list',
        start: 'top 85%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: '80px' }}>
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div className="container">
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Resources</h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px' }}>
              Access our comprehensive collection of technical documentation,
              specifications, certifications, and industry resources to help you make
              informed decisions.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <h2 className="section-title">Available Resources</h2>
            <div
              className="resources-list"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                {
                  category: 'Technical Specs',
                  icon: '📋',
                  items: [
                    'Product Datasheets',
                    'Performance Charts',
                    'Dimensional Guides',
                  ],
                },
                {
                  category: 'Certifications',
                  icon: '✅',
                  items: [
                    'ISO Certificates',
                    'Test Reports',
                    'Compliance Documents',
                  ],
                },
                {
                  category: 'Guides & Manuals',
                  icon: '📖',
                  items: [
                    'Installation Guides',
                    'Maintenance Tips',
                    'Best Practices',
                  ],
                },
                {
                  category: 'Case Studies',
                  icon: '🎯',
                  items: [
                    'Success Stories',
                    'Industry Applications',
                    'Project Highlights',
                  ],
                },
                {
                  category: 'FAQs',
                  icon: '❓',
                  items: [
                    'Common Questions',
                    'Troubleshooting',
                    'Quick Tips',
                  ],
                },
                {
                  category: 'Tools & Downloads',
                  icon: '⬇️',
                  items: [
                    'Software Tools',
                    'Calculators',
                    'Templates',
                  ],
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="resource-item"
                  style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, rgba(30, 41, 59, 0.5) 100%)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#f97316';
                    e.currentTarget.style.boxShadow =
                      '0 0 30px rgba(249, 115, 22, 0.2)';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    {resource.icon}
                  </div>
                  <h3 style={{ color: '#f97316', marginBottom: '1.25rem' }}>
                    {resource.category}
                  </h3>
                  <ul style={{ listStyle: 'none' }}>
                    {resource.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: '#94a3b8',
                          marginBottom: '0.75rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: '#f97316',
                          }}
                        >
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div className="container">
            <div
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'rgba(249, 115, 22, 0.1)',
                padding: '3rem',
                borderRadius: '12px',
                border: '2px solid rgba(249, 115, 22, 0.2)',
              }}
            >
              <h2 style={{ color: '#f97316', marginBottom: '1rem' }}>
                Need More Information?
              </h2>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                Can't find what you're looking for? Our technical support team is
                available 24/7 to assist with any questions or custom requirements.
              </p>
              <button
                style={{
                  background: '#f97316',
                  color: '#000',
                  border: 'none',
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#ea580c';
                  e.target.style.boxShadow = '0 0 30px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f97316';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Contact Support
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
