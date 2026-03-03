import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  useEffect(() => {
    gsap.from('.job-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.jobs-grid',
        start: 'top 85%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const jobs = [
    {
      title: 'Senior Manufacturing Engineer',
      department: 'Production',
      location: 'Industrial Hub, City',
      type: 'Full-time',
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Control',
      location: 'Industrial Hub, City',
      type: 'Full-time',
    },
    {
      title: 'Sales & Business Development',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
    },
    {
      title: 'Research & Development Engineer',
      department: 'Innovation',
      location: 'R&D Center, City',
      type: 'Full-time',
    },
    {
      title: 'Logistics & Supply Chain Manager',
      department: 'Operations',
      location: 'Distribution Center',
      type: 'Full-time',
    },
    {
      title: 'Marketing & Communications Specialist',
      department: 'Marketing',
      location: 'Corporate Office, City',
      type: 'Full-time',
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
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Join Our Team</h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px' }}>
              At SteelBond Wires, we're not just building products – we're building
              futures. If you're passionate about excellence and want to be part of an
              innovative industrial leader, we want to hear from you.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section" style={{ background: '#0f172a' }}>
          <div className="container">
            <h2 className="section-title">Why Work With Us</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                {
                  title: 'Innovation Culture',
                  description: 'Work on cutting-edge projects that shape industries',
                },
                {
                  title: 'Growth Opportunities',
                  description: 'Career development programs and mentorship',
                },
                {
                  title: 'Competitive Benefits',
                  description: 'Comprehensive health, wellness, and retirement plans',
                },
                {
                  title: 'Team Environment',
                  description: 'Collaborative culture with diverse, talented professionals',
                },
                {
                  title: 'Work-Life Balance',
                  description: 'Flexible working arrangements and paid time off',
                },
                {
                  title: 'Global Exposure',
                  description: 'Opportunities to work with international teams',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(249, 115, 22, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: '#f97316', marginBottom: '0.75rem' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div className="container">
            <h2 className="section-title">Open Positions</h2>
            <div
              className="jobs-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
              }}
            >
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="job-card"
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
                  <h3 style={{ color: '#f97316', marginBottom: '1rem' }}>
                    {job.title}
                  </h3>
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      flex: 1,
                    }}
                  >
                    <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#f97316', fontWeight: 600 }}>
                        Department:
                      </span>{' '}
                      {job.department}
                    </p>
                    <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#f97316', fontWeight: 600 }}>
                        Location:
                      </span>{' '}
                      {job.location}
                    </p>
                    <p style={{ color: '#94a3b8' }}>
                      <span style={{ color: '#f97316', fontWeight: 600 }}>Type:</span>{' '}
                      {job.type}
                    </p>
                  </div>
                  <button
                    style={{
                      background: '#f97316',
                      color: '#000',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#ea580c';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#f97316';
                    }}
                  >
                    Apply Now
                  </button>
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
            <h2 style={{ marginBottom: '1.5rem' }}>Don't See Your Role?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Send us your resume and we'll keep you in mind for future opportunities
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
              Send Your Resume
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
