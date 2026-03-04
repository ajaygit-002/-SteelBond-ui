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
            background: '#ffffff',
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
        <section className="section" style={{ background: '#f8fafc' }}>
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
                    background: '#ffffff',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#111111';
                    e.currentTarget.style.boxShadow =
                      '0 0 30px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      background: '#ffedd5',
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
                  <h3 style={{ color: '#111111', marginBottom: '0.75rem' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: '#475569', marginBottom: '1rem', flex: 1 }}>
                    {product.description}
                  </p>
                  <div
                    style={{
                      padding: '1rem',
                      background: 'rgba(0, 0, 0, 0.03)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      color: '#475569',
                      borderLeft: '3px solid #111111',
                    }}
                  >
                    {product.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features Highlight */}
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h2 className="section-title">Why Our Products Stand Out</h2>
            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  height: '350px',
                  background: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                }}
              >
                ⚡
              </div>
              <div>
                {[
                  { title: '99.95% Pure Copper', desc: 'Electrolytic-grade copper ensures maximum conductivity and minimal heat generation.' },
                  { title: 'Multi-Layer Insulation', desc: 'PVC, XLPE, FRLS & ZHFR insulation options for every safety requirement.' },
                  { title: 'BIS Marked & Tested', desc: 'Every coil carries the ISI mark, tested as per IS 694:2010 standards.' },
                  { title: 'Long Service Life', desc: 'Designed for 25+ years of trouble-free performance in all conditions.' },
                ].map((feat, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: '1.5rem',
                      padding: '1rem 1.5rem',
                      background: '#f5f5f5',
                      borderRadius: '8px',
                      borderLeft: '3px solid #111111',
                    }}
                  >
                    <h4 style={{ color: '#111111', marginBottom: '0.25rem', fontSize: '1rem' }}>{feat.title}</h4>
                    <p style={{ color: '#475569', fontSize: '0.9rem' }}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Range Gallery */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">Product Range Gallery</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { img: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)', title: 'House Wiring (FR)', sizes: '0.75 / 1.0 / 1.5 / 2.5 / 4.0 / 6.0 sq mm', icon: '🏠' },
                { img: 'linear-gradient(135deg, #bfbfbf 0%, #2a2a2a 100%)', title: 'Flexible Cables', sizes: '0.5 / 0.75 / 1.0 / 1.5 / 2.5 sq mm', icon: '🔌' },
                { img: 'linear-gradient(135deg, #ababab 0%, #3a3a3a 100%)', title: 'Submersible Flat', sizes: '1.5 / 2.5 / 4.0 / 6.0 / 10 sq mm', icon: '💧' },
                { img: 'linear-gradient(135deg, #e8e8e8 0%, #4a4a4a 100%)', title: 'Armoured Cables', sizes: '2.5 to 400 sq mm', icon: '🛡️' },
                { img: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)', title: 'Solar DC Cables', sizes: '2.5 / 4.0 / 6.0 / 10 sq mm', icon: '☀️' },
                { img: 'linear-gradient(135deg, #b45309 0%, #dc2626 100%)', title: 'Control Cables', sizes: '0.5 to 2.5 sq mm - multi core', icon: '🔧' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      height: '160px',
                      background: item.img,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3.5rem',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ padding: '1.25rem', background: '#f1f5f9' }}>
                    <h3 style={{ color: '#111111', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                    <p style={{ color: '#475569', fontSize: '0.85rem' }}>Sizes: {item.sizes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h2 className="section-title">Industries We Serve</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                { icon: '🏠', title: 'Residential', desc: 'Safe wiring for homes & apartments' },
                { icon: '🏗️', title: 'Construction', desc: 'Heavy-duty wires for commercial buildings' },
                { icon: '🚜', title: 'Agriculture', desc: 'Durable wires for farm equipment & irrigation' },
                { icon: '🏭', title: 'Manufacturing', desc: 'Industrial-grade wiring solutions' },
                { icon: '⚡', title: 'Power & Energy', desc: 'High-performance power distribution cables' },
                { icon: '🚗', title: 'Automotive & OEM', desc: 'Precision wires for automotive applications' },
              ].map((industry, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{industry.icon}</div>
                  <h3 style={{ color: '#111111', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{industry.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem' }}>{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="section"
          style={{
            background: '#ffffff',
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
                background: '#111111',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#333333';
                e.target.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#111111';
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
