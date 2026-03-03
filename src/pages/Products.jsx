import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  useEffect(() => {
    gsap.from('.product-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.products-grid',
        start: 'top 85%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const products = [
    {
      name: 'Industrial Steel Wire',
      description: 'High-strength steel wire for heavy industrial applications',
      specs: '2-8mm diameter | Tensile strength 1200-1600 MPa',
    },
    {
      name: 'Stainless Steel Wire',
      description: 'Corrosion-resistant wire for demanding environments',
      specs: '1-6mm diameter | Grade 304/316 available',
    },
    {
      name: 'Galvanized Wire',
      description: 'Zinc-coated wire for outdoor and protective applications',
      specs: '1-10mm diameter | 40-150µm zinc coating',
    },
    {
      name: 'Copper Wire',
      description: 'High-conductivity wire for electrical applications',
      specs: '0.5-6mm diameter | 99.9% pure copper',
    },
    {
      name: 'Aluminum Wire',
      description: 'Lightweight wire for aerospace and electrical sectors',
      specs: '1-8mm diameter | High conductivity alloy',
    },
    {
      name: 'Specialty Alloy Wire',
      description: 'Custom engineered wire for unique applications',
      specs: 'Custom specifications | Titanium, Nickel, and more',
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
              Our Products
            </h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px' }}>
              We offer a comprehensive range of premium wire solutions designed to
              meet the diverse needs of modern industries. From standard industrial
              wires to specialized alloys, we have the right solution for your
              application.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <div
              className="products-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="product-card"
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
                      fontSize: '1.5rem',
                    }}
                  >
                    ⚙️
                  </div>
                  <h3 style={{ color: '#f97316', marginBottom: '0.75rem' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: '#94a3b8', marginBottom: '1rem', flex: 1 }}>
                    {product.description}
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
                    {product.specs}
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
            <h2 style={{ marginBottom: '1.5rem' }}>Need a Custom Solution?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Contact our team to discuss your specific wire requirements
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
              Get a Quote
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Products;
