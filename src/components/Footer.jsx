import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animate footer sections on scroll
    gsap.from('.footer-section', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: 'footer',
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
      className="footer"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: '#ffffff',
        marginTop: 'auto',
        width: '100%',
      }}
    >
      {/* Main Footer Content - Full Width */}
      <div
        className="footer-content"
        style={{
          width: '100%',
          padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 5rem)',
        }}
      >
        {/* Top Section: Brand + Links in Full Width Layout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(2rem, 5vw, 4rem)',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Section - Fixed Width Left */}
          <div className="footer-section" style={{ flex: '0 0 280px' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #f97316, #ff6b35)',
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
                  color: '#94a3b8',
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
                    background: 'rgba(249, 115, 22, 0.2)',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f97316',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1.25rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f97316';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(249, 115, 22, 0.2)';
                    e.currentTarget.style.color = '#f97316';
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

          {/* Right Side - All Links Filling Full Width */}
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {/* Quick Links Section */}
            <div className="footer-section">
              <h4
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  marginBottom: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
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
                        color: '#94a3b8',
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
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
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h4
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  marginBottom: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
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
                        color: '#94a3b8',
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
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
                  color: '#ffffff',
                }}
              >
                Contact Us
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <p style={{ color: '#f97316', fontWeight: 600, marginBottom: '0.25rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Email</p>
                  <a
                    href="mailto:info@SteelBond Wires.com"
                    style={{
                      color: '#94a3b8',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      transition: 'color 0.3s ease',
                      wordBreak: 'break-word',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f97316')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  >
                    info@SteelBondWires.com
                  </a>
                </div>
                <div>
                  <p style={{ color: '#f97316', fontWeight: 600, marginBottom: '0.25rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Phone</p>
                  <a
                    href="tel:+15551234567"
                    style={{
                      color: '#94a3b8',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f97316')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p style={{ color: '#f97316', fontWeight: 600, marginBottom: '0.25rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Address</p>
                  <p style={{ color: '#94a3b8', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Industrial District<br />
                    City, Country 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className="footer-section"
          style={{
            background: 'rgba(249, 115, 22, 0.1)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '12px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '2rem',
          }}
        >
          <h3
            style={{
              color: '#f97316',
              marginBottom: '0.75rem',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            }}
          >
            Stay Updated
          </h3>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
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
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#f97316';
                e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.3)';
                e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.5)';
              }}
            />
            <button
              style={{
                background: '#f97316',
                color: '#000',
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
                e.target.style.background = '#ea580c';
                e.target.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f97316';
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
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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
                  color: '#f97316',
                  marginBottom: '0.75rem',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                }}
              >
                Business Hours
              </h5>
              <ul style={{ listStyle: 'none', color: '#94a3b8', fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}>
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h5
                style={{
                  color: '#f97316',
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
                      background: 'rgba(249, 115, 22, 0.1)',
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                      color: '#94a3b8',
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
                  color: '#f97316',
                  marginBottom: '0.75rem',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                }}
              >
                Certifications
              </h5>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}>
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
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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
                  onMouseEnter={(e) => (e.target.style.color = '#f97316')}
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
          background: '#f97316',
          color: '#000',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
          zIndex: '999',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#ea580c';
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 8px 24px rgba(249, 115, 22, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#f97316';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
        }}
        title="Back to top"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
