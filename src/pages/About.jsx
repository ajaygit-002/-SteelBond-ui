import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.about-content > *', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
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
            <div
              className="about-content"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                SteelBond Wires has been a trusted leader in the wire manufacturing
                industry for over three decades. Founded with a vision to provide
                premium, reliable wire solutions, we have grown into a global powerhouse
                serving industries worldwide.
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                Our commitment to excellence, innovation, and customer satisfaction
                has made us the preferred choice for industrial and manufacturing
                sectors globally.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                We combine modern manufacturing techniques with decades of expertise
                to deliver products that exceed expectations and withstand the most
                demanding applications.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { title: 'Excellence', description: 'Striving for perfection in every product' },
                { title: 'Innovation', description: 'Pioneering new manufacturing solutions' },
                { title: 'Integrity', description: 'Building trust through honest business practices' },
                { title: 'Sustainability', description: 'Committed to environmental responsibility' },
              ].map((value, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(249, 115, 22, 0.1)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: '#f97316', marginBottom: '1rem' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#94a3b8' }}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
