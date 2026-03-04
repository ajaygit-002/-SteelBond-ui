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
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
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
        <section className="section" style={{ background: '#0f172a' }}>
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
                  <h3 style={{ color: '#f97316', marginBottom: '0.75rem' }}>
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

        {/* CTA Section */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <h2 style={{ marginBottom: '1.5rem' }}>Ready to Partner with Us?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Reach out to our team to learn more about how we can serve your needs
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
