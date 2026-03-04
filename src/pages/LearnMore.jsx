import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const LearnMore = () => {
  useEffect(() => {
    gsap.from('.learn-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.learn-grid',
        start: 'top 85%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const learnContent = [
    {
      category: 'Wire Technology',
      title: 'Understanding Wire Materials',
      description: 'Explore the properties, characteristics, and applications of different wire materials',
      details: 'Learn about steel, stainless steel, copper, aluminum, and specialty alloys',
      icon: '📚',
    },
    {
      category: 'Industry Trends',
      title: 'Future of Manufacturing',
      description: 'Stay updated with the latest trends shaping the wire industry',
      details: 'Automation, Industry 4.0, sustainability, and digital transformation',
      icon: '📈',
    },
    {
      category: 'Technical Specs',
      title: 'Wire Standards & Certifications',
      description: 'Understand international standards and quality certifications',
      details: 'ISO certifications, ASTM standards, and quality assurance processes',
      icon: '✓',
    },
    {
      category: 'Best Practices',
      title: 'Choosing the Right Wire',
      description: 'Guide to selecting the perfect wire solution for your application',
      details: 'Diameter, tensile strength, coating, and other critical parameters',
      icon: '🎯',
    },
    {
      category: 'Industry Knowledge',
      title: 'Wire Applications Guide',
      description: 'Comprehensive guide to wire usage across various industries',
      details: 'Construction, automotive, aerospace, electronics, and more',
      icon: '🔧',
    },
    {
      category: 'Sustainability',
      title: 'Eco-Friendly Wire Solutions',
      description: 'Learn about our sustainable and environmentally responsible practices',
      details: 'Recycling programs, green manufacturing, and carbon footprint reduction',
      icon: '♻️',
    },
  ];

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
              Learn More
            </h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px' }}>
              Knowledge is power. Explore our comprehensive resources to deepen your
              understanding of wire technology, industry standards, and best practices.
            </p>
          </div>
        </section>

        {/* Learn Grid */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <div
              className="learn-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {learnContent.map((item, index) => (
                <div
                  key={index}
                  className="learn-card"
                  style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, rgba(30, 41, 59, 0.5) 100%)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#f97316';
                    e.currentTarget.style.boxShadow =
                      '0 0 30px rgba(249, 115, 22, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(249, 115, 22, 0.2)',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    style={{
                      color: '#f97316',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.category}
                  </p>
                  <h3 style={{ color: '#e2e8f0', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#94a3b8', marginBottom: '1rem', flex: 1 }}>
                    {item.description}
                  </p>
                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(249, 115, 22, 0.05)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      color: '#94a3b8',
                      borderLeft: '3px solid #f97316',
                    }}
                  >
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section" style={{ background: '#1e293b' }}>
          <div className="container">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
              Additional Resources
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                }}
              >
                <h4 style={{ color: '#f97316', marginBottom: '0.5rem' }}>
                  📄 Whitepapers & Case Studies
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  In-depth analysis and real-world success stories
                </p>
              </div>
              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                }}
              >
                <h4 style={{ color: '#f97316', marginBottom: '0.5rem' }}>
                  🎓 Training & Certifications
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Professional development programs and certifications
                </p>
              </div>
              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                }}
              >
                <h4 style={{ color: '#f97316', marginBottom: '0.5rem' }}>
                  📞 Expert Consultation
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Connect with our technical experts for personalized guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem' }}>Want to Dive Deeper?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Contact our experts to discuss your specific needs or request specialized materials
            </p>
            <button
              style={{
                background: '#f97316',
                color: '#000',
                border: 'none',
                padding: '1rem 2.5rem',
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
              Contact Our Experts
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LearnMore;
