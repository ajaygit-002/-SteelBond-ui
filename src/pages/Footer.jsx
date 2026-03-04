import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/footer.css';

gsap.registerPlugin(ScrollTrigger);

const FooterPage = () => {
  useEffect(() => {
    // Animate footer sections on scroll
    gsap.from('.footer-section', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.footer-content',
        start: 'top 85%',
      },
    });

    // Animate social icons
    gsap.from('.social-icon', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#ffffff',
        color: '#1e293b',
        marginTop: 'auto',
      }}
    >
      {/* Main Footer Content */}
      <div
        className="footer-content"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 5rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Section */}
          <div className="footer-section">
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #222222, #444444)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                }}
              >
                SB
              </div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', marginBottom: '0.5rem' }}>
                SteelBond Wires
              </h3>
              <p
                style={{
                  color: '#475569',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                }}
              >
                Leading provider of premium wire solutions for modern industries
                worldwide.
              </p>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="social-icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111111',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1.25rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#111111';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.color = '#111111';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {platform === 'facebook' && '👁'}
                  {platform === 'twitter' && '𝕏'}
                  {platform === 'linkedin' && '💼'}
                  {platform === 'instagram' && '📷'}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                marginBottom: '1.5rem',
                fontWeight: 600,
                color: '#1e293b',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'About Us', 'Products', 'Innovation', 'Careers', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: '#475569',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#111111';
                      e.target.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#475569';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                marginBottom: '1.5rem',
                fontWeight: 600,
                color: '#1e293b',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Bulk Orders',
                'Custom Solutions',
                'Technical Support',
                'Quality Assurance',
                'Logistics',
              ].map(service => (
                <li key={service}>
                  <a
                    href={`#${service.toLowerCase()}`}
                    style={{
                      color: '#475569',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#111111';
                      e.target.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#475569';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    → {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                marginBottom: '1.5rem',
                fontWeight: 600,
                color: '#1e293b',
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ color: '#111111', fontWeight: 600, marginBottom: '0.25rem' }}>Email</p>
                <a
                  href="mailto:info@steelbondwires.com"
                  style={{
                    color: '#475569',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#111111')}
                  onMouseLeave={(e) => (e.target.style.color = '#475569')}
                >
                  info@steelbondwires.com
                </a>
              </div>
              <div>
                <p style={{ color: '#111111', fontWeight: 600, marginBottom: '0.25rem' }}>Phone</p>
                <a
                  href="tel:+15551234567"
                  style={{
                    color: '#475569',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#111111')}
                  onMouseLeave={(e) => (e.target.style.color = '#475569')}
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p style={{ color: '#111111', fontWeight: 600, marginBottom: '0.25rem' }}>Address</p>
                <p style={{ color: '#475569', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                  Industrial District
                  <br />
                  City, Country 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className="footer-section"
          style={{
            background: 'rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '2rem',
          }}
        >
          <h3
            style={{
              color: '#111111',
              marginBottom: '0.75rem',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            }}
          >
            Stay Updated
          </h3>
          <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
            Subscribe to our newsletter for the latest updates and industry insights.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.75rem 1rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                color: '#1e293b',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#111111';
                e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.5)';
              }}
            />
            <button
              style={{
                background: '#111111',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#333333';
                e.target.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#111111';
                e.target.style.boxShadow = 'none';
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div
          style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '2rem',
          }}
        >
          {/* Footer Bottom Info */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            {/* Business Hours */}
            <div>
              <h5
                style={{
                  color: '#111111',
                  marginBottom: '0.75rem',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                }}
              >
                Business Hours
              </h5>
              <ul style={{ listStyle: 'none', color: '#475569', fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}>
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h5
                style={{
                  color: '#111111',
                  marginBottom: '0.75rem',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                }}
              >
                Payment Methods
              </h5>
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {['Visa', 'Mastercard', 'Bank Transfer', 'Wire'].map(method => (
                  <span
                    key={method}
                    style={{
                      background: 'rgba(0, 0, 0, 0.05)',
                      border: '1px solid #e2e8f0',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                      color: '#475569',
                    }}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h5
                style={{
                  color: '#111111',
                  marginBottom: '0.75rem',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                }}
              >
                Certifications
              </h5>
              <p style={{ color: '#475569', fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}>
                ✓ ISO 9001:2015<br />
                ✓ ISO 14001:2015<br />
                ✓ ASTM Certified
              </p>
            </div>
          </div>

          {/* Legal Links and Copyright */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid #e2e8f0',
            }}
          >
            <p
              style={{
                color: '#64748b',
                fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
              }}
            >
              © {currentYear} SteelBond Wires. All rights reserved.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                flexWrap: 'wrap',
              }}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#111111')}
                  onMouseLeave={(e) => (e.target.style.color = '#64748b')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          background: '#111111',
          color: '#ffffff',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          zIndex: '999',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#333333';
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#111111';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
        }}
        title="Back to top"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default FooterPage;
