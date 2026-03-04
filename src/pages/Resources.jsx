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

        {/* Technical Knowledge Base */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div className="container">
            <h2 className="section-title">Technical Knowledge Base</h2>
            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '3rem',
              }}
            >
              <div
                style={{
                  height: '280px',
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: '#fff',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Wire Selection Guide</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Complete guide to choosing the right wire for any application</p>
              </div>
              <div>
                <h3 style={{ color: '#f97316', marginBottom: '1rem', fontSize: '1.3rem' }}>How to Choose the Right Wire</h3>
                {[
                  'Determine the current-carrying capacity required (Amperes)',
                  'Select appropriate conductor size (sq mm) based on load',
                  'Choose insulation type: PVC for general, XLPE for high-temp, FRLS for fire safety',
                  'Verify voltage rating matches your application (450/750V or 1100V)',
                  'Check BIS marking and ISI certification on the product',
                ].map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '0.75rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: '#f97316', fontWeight: 700, minWidth: '24px' }}>{index + 1}.</span>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wire Comparison Table */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <h2 className="section-title">Wire Type Comparison</h2>
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  minWidth: '600px',
                }}
              >
                <thead>
                  <tr style={{ background: 'rgba(249, 115, 22, 0.2)' }}>
                    {['Wire Type', 'Conductor', 'Insulation', 'Voltage Rating', 'Best For'].map((header) => (
                      <th
                        key={header}
                        style={{
                          padding: '1rem',
                          color: '#f97316',
                          fontWeight: 600,
                          textAlign: 'left',
                          borderBottom: '2px solid rgba(249, 115, 22, 0.3)',
                          fontSize: '0.95rem',
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['FR House Wire', '99.95% Copper', 'FR PVC', '450/750V', 'Homes & Offices'],
                    ['FRLS Wire', '99.95% Copper', 'FRLS PVC', '450/750V', 'Public Buildings'],
                    ['ZHFR Wire', '99.95% Copper', 'ZHFR', '450/750V', 'Hospitals, Malls'],
                    ['Flexible Cable', 'Multi-strand Cu', 'PVC', '300/500V', 'Appliances'],
                    ['Submersible', 'Copper', 'PVC/XLPE', '1100V', 'Pump Motors'],
                    ['Armoured', 'Copper/Aluminium', 'XLPE+PVC', '1100V', 'Underground'],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid rgba(249, 115, 22, 0.1)',
                        transition: 'background 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(249, 115, 22, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          style={{
                            padding: '1rem',
                            color: cellIndex === 0 ? '#e2e8f0' : '#94a3b8',
                            fontWeight: cellIndex === 0 ? 600 : 400,
                            fontSize: '0.9rem',
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                { q: 'What is the difference between FR, FRLS, and ZHFR wires?', a: 'FR (Flame Retardant) resists flame propagation. FRLS (Flame Retardant Low Smoke) additionally produces less smoke. ZHFR (Zero Halogen Flame Retardant) emits no toxic halogen gases during fire.' },
                { q: 'How do I calculate the right wire size for my load?', a: 'Wire size depends on current load. For example: 1.5 sq mm handles up to 14A, 2.5 sq mm up to 19A, 4.0 sq mm up to 26A. Always add 20% safety margin.' },
                { q: 'Are your wires BIS certified?', a: 'Yes, all our house wiring cables carry the ISI mark and are manufactured as per IS 694:2010 standards. We are BIS license holders.' },
                { q: 'What is the warranty on SteelBond Wires products?', a: 'We offer up to 25 years of performance warranty on our house wiring cables, backed by regular quality audits and customer support.' },
                { q: 'Do you supply for bulk/industrial orders?', a: 'Absolutely. We supply to builders, OEMs, government projects, and distributors. Contact our sales team for bulk pricing and customization.' },
              ].map((faq, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '1.5rem',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #1e293b 0%, rgba(30, 41, 59, 0.5) 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 115, 22, 0.15)',
                  }}
                >
                  <h4 style={{ color: '#f97316', marginBottom: '0.75rem', fontSize: '1rem' }}>{faq.q}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7' }}>{faq.a}</p>
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
