import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ExploreMore = () => {
  useEffect(() => {
    gsap.from('.explore-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.explore-grid',
        start: 'top 85%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const exploreContent = [
    {
      title: 'Industry Solutions',
      description: 'Discover how our wire products are revolutionizing industries worldwide',
      details: 'From automotive to aerospace, construction to electronics - explore real-world applications',
      icon: '🌍',
    },
    {
      title: 'Manufacturing Excellence',
      description: 'Learn about our state-of-the-art production facilities and quality control',
      details: 'Advanced technology meets precision craftsmanship in every product we create',
      icon: '🏭',
    },
    {
      title: 'Sustainability Initiatives',
      description: 'Explore our commitment to environmental responsibility',
      details: 'Eco-friendly practices, recycling programs, and sustainable manufacturing',
      icon: '🌱',
    },
    {
      title: 'Global Market Reach',
      description: 'See how we serve customers in 50+ countries across all continents',
      details: 'Established supply chains and partnerships for reliable worldwide delivery',
      icon: '🚀',
    },
    {
      title: 'Research & Development',
      description: 'Explore cutting-edge innovations in wire technology',
      details: 'Investment in R&D leads to next-generation products and solutions',
      icon: '🔬',
    },
    {
      title: 'Customer Success Stories',
      description: 'Discover how our clients have transformed their operations',
      details: 'Case studies and testimonials from leading companies worldwide',
      icon: '⭐',
    },
  ];

  return (
    <>
      <div style={{ marginTop: '80px' }}>
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              Explore More
            </h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px' }}>
              Dive deeper into our world. Discover the innovations, processes, and values
              that drive SteelBond Wires to be a leader in the wire industry.
            </p>
          </div>
        </section>

        {/* Explore Grid */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <div
              className="explore-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {exploreContent.map((item, index) => (
                <div
                  key={index}
                  className="explore-card"
                  style={{
                    background: '#ffffff',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#111111';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(0, 0, 0, 0.1)',
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
                  <h3 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#475569', marginBottom: '1rem', flex: 1 }}>
                    {item.description}
                  </p>
                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(0, 0, 0, 0.03)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      color: '#475569',
                      borderLeft: '3px solid #111111',
                    }}
                  >
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="section"
          style={{
            background: '#ffffff',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem', color: '#ffffff' }}>Ready to Partner with Us?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Reach out to our team to learn more about how we can serve your needs
            </p>
            <button
              style={{
                background: '#111111',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2.5rem',
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
              Get in Touch
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ExploreMore;
