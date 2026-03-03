import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.from('.footer', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(249, 115, 22, 0.2)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>SteelBond Wires</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
              Leading provider of premium wire solutions for modern industries
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="#about"
                  style={{
                    color: '#94a3b8',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#f97316';
                    e.target.style.paddingLeft = '0.5rem';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#94a3b8';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="#products"
                  style={{
                    color: '#94a3b8',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#f97316';
                    e.target.style.paddingLeft = '0.5rem';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#94a3b8';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  Products
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="#careers"
                  style={{
                    color: '#94a3b8',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#f97316';
                    e.target.style.paddingLeft = '0.5rem';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#94a3b8';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Contact Us</h4>
            <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
              📧 info@steelbond.com
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
              📞 +1 (555) 123-4567
            </p>
            <p style={{ color: '#94a3b8' }}>
              📍 Industrial District, City, Country
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            © {currentYear} SteelBond Wires. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a
              href="#privacy"
              style={{
                color: '#64748b',
                fontSize: '0.875rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f97316')}
              onMouseLeave={(e) => (e.target.style.color = '#64748b')}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              style={{
                color: '#64748b',
                fontSize: '0.875rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f97316')}
              onMouseLeave={(e) => (e.target.style.color = '#64748b')}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
