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
            background: '#ffffff',
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
              <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#000000' }}>About Us</h1>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#000000' }}>
                SteelBond Wires has been a trusted leader in the wire manufacturing
                industry for over three decades. Founded with a vision to provide
                premium, reliable wire solutions, we have grown into a global powerhouse
                serving industries worldwide.
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#000000' }}>
                Our commitment to excellence, innovation, and customer satisfaction
                has made us the preferred choice for industrial and manufacturing
                sectors globally.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#000000' }}>
                We combine modern manufacturing techniques with decades of expertise
                to deliver products that exceed expectations and withstand the most
                demanding applications.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section" style={{ background: '#f8fafc' }}>
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
                    background: 'rgba(0, 0, 0, 0.06)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: '#111111', marginBottom: '1rem' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#475569' }}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h2 className="section-title">Our Mission</h2>
            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                  To deliver world-class electrical wire solutions that exceed customer
                  expectations in quality, safety, and performance. We are driven by a
                  commitment to continuous improvement and sustainable practices.
                </p>
                <p style={{ fontSize: '1.125rem' }}>
                  We believe in building lasting partnerships with our clients by providing
                  reliable products backed by exceptional service and technical expertise.
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                }}
              >
                {[
                  { number: '25+', label: 'Years of Excellence' },
                  { number: '99.95%', label: 'Pure Copper' },
                  { number: 'BIS', label: 'Certified' },
                  { number: 'ISO', label: 'Certified' },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(0, 0, 0, 0.06)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                    }}
                  >
                    <h3 style={{ color: '#111111', fontSize: '1.5rem' }}>{item.number}</h3>
                    <p style={{ color: '#475569', fontSize: '0.9rem' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">Our Journey</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                { year: '1996', title: 'Company Founded', desc: 'SteelBond Wires established with a single production line and a vision for quality.' },
                { year: '2003', title: 'BIS Certification', desc: 'Achieved Bureau of Indian Standards certification, a major quality milestone.' },
                { year: '2008', title: 'Expanded Production', desc: 'New state-of-the-art manufacturing unit with 5x production capacity.' },
                { year: '2014', title: 'ISO 9001 Certified', desc: 'Internationally recognized quality management system implementation.' },
                { year: '2019', title: 'Pan-India Distribution', desc: 'Expanded dealer network across all Indian states with 500+ channel partners.' },
                { year: '2024', title: 'Green Manufacturing', desc: 'Transitioned to solar-powered production & REACH compliant materials.' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'flex-start',
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#111111';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      minWidth: '70px',
                      height: '70px',
                      background: '#ffedd5',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#111111',
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    {item.year}
                  </div>
                  <div>
                    <h3 style={{ color: '#111111', marginBottom: '0.5rem', fontSize: '1.15rem' }}>{item.title}</h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Gallery */}
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h2 className="section-title">Our Infrastructure</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { img: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)', title: 'Wire Drawing Plant', desc: '20+ high-speed wire drawing machines with PLC automation' },
                { img: 'linear-gradient(135deg, #bfbfbf 0%, #2a2a2a 100%)', title: 'Insulation Line', desc: 'Continuous vulcanization lines for PVC, XLPE & FRLS insulation' },
                { img: 'linear-gradient(135deg, #ababab 0%, #3a3a3a 100%)', title: 'Testing Laboratory', desc: 'NABL-accredited lab with advanced HV & mechanical testing equipment' },
                { img: 'linear-gradient(135deg, #e8e8e8 0%, #4a4a4a 100%)', title: 'Warehouse & Logistics', desc: '50,000 sq ft storage with GPS-tracked delivery fleet' },
                { img: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)', title: 'Quality Control Hub', desc: 'In-line quality checks with Six Sigma methodology' },
                { img: 'linear-gradient(135deg, #b45309 0%, #dc2626 100%)', title: 'Solar Power Unit', desc: '500KW rooftop solar installation powering 40% of production' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      height: '180px',
                      background: item.img,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      padding: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ padding: '1.25rem', background: '#f1f5f9' }}>
                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">Our Leadership</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { name: 'Rajesh Kumar', role: 'Founder & Managing Director', desc: 'Visionary leader with 30+ years of industry experience' },
                { name: 'Priya Sharma', role: 'Director of Operations', desc: 'Streamlining production and ensuring quality at every step' },
                { name: 'Amit Patel', role: 'Head of R&D', desc: 'Pioneering innovative wire solutions for modern industries' },
              ].map((member, index) => (
                <div
                  key={index}
                  style={{
                    background: '#ffffff',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: '#ffedd5',
                      margin: '0 auto 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                    }}
                  >
                    👤
                  </div>
                  <h3 style={{ color: '#111111', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ color: '#1e293b', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{member.role}</p>
                  <p style={{ color: '#475569', fontSize: '0.85rem' }}>{member.desc}</p>
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
