import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Innovation = () => {
  useEffect(() => {
    gsap.from('.innovation-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.innovation-grid',
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
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              Innovation & Quality
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                maxWidth: '800px',
                marginBottom: '2rem',
              }}
            >
              Our commitment to innovation drives us to continuously improve our
              manufacturing processes and develop cutting-edge wire solutions that
              meet the evolving needs of modern industries.
            </p>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <h2 className="section-title">Quality Standards</h2>
            <div
              className="innovation-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                {
                  standard: 'ISO 9001:2015',
                  description: 'Quality Management System Certification',
                },
                {
                  standard: 'ISO 14001:2015',
                  description: 'Environmental Management System',
                },
                {
                  standard: 'ASTM Standards',
                  description: 'International Manufacturing Standards Compliance',
                },
                {
                  standard: 'Six Sigma',
                  description: 'Data-Driven Quality Control Methodology',
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="innovation-card"
                  style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, rgba(30, 41, 59, 0.5) 100%)',
                    padding: '2.5rem 2rem',
                    borderRadius: '12px',
                    border: '2px solid rgba(249, 115, 22, 0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#f97316';
                    e.currentTarget.style.boxShadow =
                      '0 0 30px rgba(249, 115, 22, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h3 style={{ color: '#f97316', marginBottom: '0.75rem' }}>
                    {cert.standard}
                  </h3>
                  <p style={{ color: '#94a3b8' }}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* R&D Section */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div className="container">
            <h2 className="section-title">Research & Development</h2>
            <div
              style={{
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                Our dedicated R&D team works tirelessly to develop innovative wire
                solutions that push the boundaries of what's possible in their field.
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                We invest heavily in cutting-edge technology and collaborate with
                industry experts to ensure our products remain at the forefront of
                manufacturing innovation.
              </p>
              <div
                style={{
                  background: 'rgba(249, 115, 22, 0.1)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  marginTop: '2rem',
                }}
              >
                <p style={{ color: '#f97316', fontWeight: 600 }}>
                  ✓ 50+ Patents Held | ✓ 15+ Industry Awards | ✓ 100+ Research Projects
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Innovation;
