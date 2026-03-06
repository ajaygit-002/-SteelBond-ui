import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'About Us', path: '/about', id: 'about' },
    { label: 'Innovation & Quality', path: '/innovation', id: 'innovation' },
    { label: 'Our Products', path: '/products', id: 'products' },
    { label: 'Resources', path: '/resources', id: 'resources' },
    { label: 'Careers', path: '/careers', id: 'careers' },
    // { label: 'Contact Us', path: '/contact', id: 'contact' }, // Added Contact Us
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLink = navLinks.find(link => link.path === location.pathname)?.id || 'home';

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand */}
          <div className="navbar-brand" onClick={handleLogoClick}>
            <div className="navbar-logo">SB</div>
            <span className="navbar-text">SteelBond Wires</span>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.path)}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleNavClick(link.path);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Contact - moved into nav links; keep for accessibility on wide screens */}
          <button
            className="nav-contact-btn"
            onClick={() => handleNavClick('/contact')}
            aria-label="Contact Us"
          >
            Contact Us
          </button>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button
          className="close-menu"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav>
          {navLinks.map(link => (
            <a
              key={link.id}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.path)}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleNavClick(link.path);
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="nav-contact-btn-mobile" onClick={() => handleNavClick('/contact')}>
            Contact Us
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
