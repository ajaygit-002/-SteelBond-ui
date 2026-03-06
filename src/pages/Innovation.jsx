import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Innovation = () => {
  useEffect(() => {
    gsap.from('.innovation-card', {
      y: 80,
      // opacity: 0,
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
            background: '#ffffff',
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
        <section className="section" style={{ background: '#f8fafc' }}>
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
                    background: '#ffffff',
                    padding: '2.5rem 2rem',
                    borderRadius: '12px',
                    border: '2px solid rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#111111';
                    e.currentTarget.style.boxShadow =
                      '0 0 30px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h3 style={{ color: '#111111', marginBottom: '0.75rem' }}>
                    {cert.standard}
                  </h3>
                  <p style={{ color: '#475569' }}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* R&D Section */}
        <section
          className="section"
          style={{
            background: '#ffffff',
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
                  background: 'rgba(0, 0, 0, 0.06)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  marginTop: '2rem',
                }}
              >
                <p style={{ color: '#111111', fontWeight: 600 }}>
                  ✓ 50+ Patents Held | ✓ 15+ Industry Awards | ✓ 100+ Research Projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Highlights with Images */}
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h2 className="section-title">Innovation Highlights</h2>
            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '4rem',
              }}
            >
              <div
                style={{
                  height: '300px',
                  background: 'url(/path/to/vi.jpg) center/cover no-repeat, linear-gradient(135deg, #d4d4d4 0%, #333333 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                }}
              >
                🔬
              </div>
              <div>
                <h3 style={{ color: '#111111', marginBottom: '1rem', fontSize: '1.5rem' }}>Advanced Material Science</h3>
                <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Our R&D lab uses spectroscopy, electron microscopy, and tensile analysis to engineer copper alloys with optimal conductivity-to-strength ratios.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.8' }}>
                  Every batch undergoes 12+ quality parameters before reaching the production floor.
                </p>
              </div>
            </div>
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
                <h3 style={{ color: '#111111', marginBottom: '1rem', fontSize: '1.5rem' }}>Smart Manufacturing</h3>
                <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Industry 4.0 enabled production lines with IoT sensors monitoring temperature, tension, and speed in real-time.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.8' }}>
                  Automated quality gates detect deviations of 0.01mm, ensuring zero-defect output.
                </p>
              </div>
              <div
                style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, #bfbfbf 0%, #222222 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                }}
              >
                🏭
              </div>
            </div>
          </div>
        </section>

        {/* Testing Lab */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">Testing & Quality Lab</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { icon: '🔋', title: 'Insulation Resistance', desc: 'Megger testing at 500V & 1000V DC to verify insulation integrity' },
                { icon: '⚡', title: 'High Voltage Test', desc: '3kV AC spark test on every metre of insulated wire produced' },
                { icon: '💪', title: 'Tensile Strength', desc: 'Universal testing machines verify break load & elongation specs' },
                { icon: '🔥', title: 'Fire Resistance', desc: 'Vertical flame propagation & oxygen index testing for FR wires' },
                { icon: '📏', title: 'Dimensional Check', desc: 'Laser micrometer ensures conductor diameter within ±0.02mm' },
                { icon: '🌡️', title: 'Ageing Test', desc: 'Accelerated thermal ageing at 100°C for insulation longevity verification' },
              ].map((test, index) => (
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#111111';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{test.icon}</div>
                  <h3 style={{ color: '#111111', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{test.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem' }}>{test.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">Our Manufacturing Process</h2>
            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
              }}
            >
              {[
                { step: '01', title: 'Raw Material Sourcing', desc: 'We source only the finest 99.95%+ pure copper and premium alloys from certified suppliers.' },
                { step: '02', title: 'Wire Drawing', desc: 'State-of-the-art drawing machines reduce rod diameter to precise wire gauges with consistent quality.' },
                { step: '03', title: 'Annealing & Treatment', desc: 'Controlled heat treatment ensures optimal conductivity, flexibility, and mechanical properties.' },
                { step: '04', title: 'Insulation & Coating', desc: 'RoHS & REACH compliant PVC/XLPE insulation applied with precision for maximum safety.' },
                { step: '05', title: 'Quality Testing', desc: 'Rigorous multi-stage testing including tensile, insulation resistance, and high-voltage tests.' },
                { step: '06', title: 'Packaging & Dispatch', desc: 'Secure packaging with proper labeling ensures products reach customers in perfect condition.' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem',
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div
                    style={{
                      minWidth: '50px',
                      height: '50px',
                      background: "linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)",
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ color: '#111111', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
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

export default Innovation;
