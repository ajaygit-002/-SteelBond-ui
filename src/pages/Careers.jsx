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
            background: '#ffffff',
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
        <section className="section" style={{ background: '#f8fafc' }}>
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
                    background: 'rgba(0, 0, 0, 0.06)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ color: '#111111', marginBottom: '0.75rem' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem' }}>
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
            background: '#ffffff',
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
                  <h3 style={{ color: '#111111', marginBottom: '1rem' }}>
                    {job.title}
                  </h3>
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      flex: 1,
                    }}
                  >
                    <p style={{ color: '#475569', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#111111', fontWeight: 600 }}>
                        Department:
                      </span>{' '}
                      {job.department}
                    </p>
                    <p style={{ color: '#475569', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#111111', fontWeight: 600 }}>
                        Location:
                      </span>{' '}
                      {job.location}
                    </p>
                    <p style={{ color: '#475569' }}>
                      <span style={{ color: '#111111', fontWeight: 600 }}>Type:</span>{' '}
                      {job.type}
                    </p>
                  </div>
                  <button
                    style={{
                      background: '#111111',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#333333';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#111111';
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at SteelBond */}
        <section
          className="section"
          style={{
            background: '#ffffff',
          }}
        >
          <div className="container">
            <h2 className="section-title">Life at SteelBond Wires</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { img: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)', title: 'Annual Day Celebration', icon: '🎉' },
                { img: 'linear-gradient(135deg, #bfbfbf 0%, #2a2a2a 100%)', title: 'Team Building Events', icon: '🤝' },
                { img: 'linear-gradient(135deg, #ababab 0%, #3a3a3a 100%)', title: 'Training Programs', icon: '📚' },
                { img: 'linear-gradient(135deg, #e8e8e8 0%, #4a4a4a 100%)', title: 'Sports & Recreation', icon: '🏏' },
                { img: 'linear-gradient(135deg, #e8e8e8 0%, #4a4a4a 100%)', title: 'Community Service', icon: '❤️' },
                { img: 'linear-gradient(135deg, #d4d4d4 0%, #1a1a1a 100%)', title: 'Award Ceremonies', icon: '🏆' },
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
                  <div style={{ padding: '1.25rem', background: '#f1f5f9', textAlign: 'center' }}>
                    <h3 style={{ color: '#1e293b', fontSize: '1.05rem' }}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">Our Hiring Process</h2>
            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
              }}
            >
              {[
                { step: '01', title: 'Application Review', desc: 'Our HR team reviews your resume and cover letter within 48 hours of submission.' },
                { step: '02', title: 'Phone Screening', desc: 'A 20-minute call to discuss your experience, expectations, and cultural fit.' },
                { step: '03', title: 'Technical Interview', desc: 'In-depth discussion with the department head on technical skills and problem-solving.' },
                { step: '04', title: 'On-site Visit', desc: 'Tour our facilities and meet the team you will be working with directly.' },
                { step: '05', title: 'Offer & Onboarding', desc: 'Competitive offer followed by a structured 30-day onboarding program.' },
                { step: '06', title: 'Welcome Aboard!', desc: 'Mentorship assignment, training schedule, and your first team project kickoff.' },
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

        {/* CTA Section */}
        <section
          className="section"
          style={{
            background: '#ffffff',
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
              Send Your Resume
            </button>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="section" style={{ background: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title">What Our Team Says</h2>
            <div
              className="responsive-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                {
                  quote: 'Working here has been a transformative experience. The innovation culture encourages us to think beyond boundaries.',
                  name: 'Suresh M.',
                  role: 'Senior Engineer, 8 years',
                },
                {
                  quote: 'The growth opportunities are unmatched. I started as a trainee and now lead an entire production line.',
                  name: 'Anita R.',
                  role: 'Production Lead, 6 years',
                },
                {
                  quote: 'The team environment and work-life balance make this the best place I have ever worked.',
                  name: 'Vikram S.',
                  role: 'Quality Analyst, 4 years',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    background: '#ffffff',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    "{testimonial.quote}"
                  </p>
                  <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', paddingTop: '1rem' }}>
                    <p style={{ color: '#111111', fontWeight: 600 }}>{testimonial.name}</p>
                    <p style={{ color: '#475569', fontSize: '0.85rem' }}>{testimonial.role}</p>
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

export default Careers;
