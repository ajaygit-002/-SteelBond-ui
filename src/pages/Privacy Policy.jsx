import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {

  useEffect(() => {

    gsap.from(".privacy-card", {
      y: 60,
      // opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".privacy-grid",
        start: "top 85%",
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <>

      {/* HERO SECTION */}
      <section style={styles.hero}>

        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
          alt="Industrial wires"
          style={styles.heroImage}
        />

        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Privacy Policy</h1>

          <p style={styles.heroText}>
            SteelBond Wires respects your privacy and ensures that your
            personal information is protected with the highest standards.
          </p>
        </div>

      </section>


      {/* CONTENT SECTION */}
      <section style={styles.section}>

        <div style={styles.container}>

          <div className="privacy-grid" style={styles.grid}>


            {/* INTRODUCTION */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Introduction</h3>

              <p style={styles.text}>
                At SteelBond Wires, protecting customer data and maintaining
                transparency in how information is handled is a core value.
              </p>

              <p style={styles.text}>
                This Privacy Policy explains how we collect, store and use
                information provided by visitors when using our website.
              </p>
            </div>


            {/* INFORMATION */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Information We Collect</h3>

              <ul style={styles.list}>
                <li>Full name and contact details</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Product inquiries</li>
                <li>Browser and device information</li>
                <li>IP address and website activity</li>
              </ul>
            </div>


            {/* USE */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>How We Use Your Information</h3>

              <ul style={styles.list}>
                <li>Respond to inquiries</li>
                <li>Provide product quotations</li>
                <li>Improve website performance</li>
                <li>Enhance customer experience</li>
                <li>Maintain internal records</li>
                <li>Send updates regarding services</li>
              </ul>
            </div>


            {/* SECURITY */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Data Protection</h3>

              <p style={styles.text}>
                SteelBond Wires uses industry-standard security practices
                to protect information from unauthorized access, loss,
                misuse or alteration.
              </p>

              <p style={styles.text}>
                Our systems ensure secure storage and safe handling
                of sensitive information.
              </p>
            </div>


            {/* COOKIES */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Cookies Policy</h3>

              <p style={styles.text}>
                Our website may use cookies to enhance functionality
                and analyze visitor behavior to improve user experience.
              </p>

              <p style={styles.text}>
                You may disable cookies in your browser settings
                if preferred.
              </p>
            </div>


            {/* THIRD PARTY */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Third-Party Links</h3>

              <p style={styles.text}>
                Our website may contain links to external websites.
              </p>

              <p style={styles.text}>
                SteelBond Wires is not responsible for the privacy
                practices of those third-party websites.
              </p>
            </div>


            {/* RIGHTS */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Your Rights</h3>

              <ul style={styles.list}>
                <li>Access your personal information</li>
                <li>Request corrections</li>
                <li>Request deletion of data</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>


            {/* CONTACT */}
            <div className="privacy-card" style={styles.card}>
              <h3 style={styles.title}>Contact Us</h3>

              <p style={styles.text}>
                If you have questions about this Privacy Policy,
                please contact us.
              </p>

              <p style={styles.text}>
                <strong>SteelBond Wires</strong><br/>
                Email: info@steelbondwires.com<br/>
                Phone: +91 XXXXX XXXXX<br/>
                Location: Tamil Nadu, India
              </p>
            </div>


          </div>

        </div>

      </section>

      <Footer />

    </>
  );
};


const styles = {

  hero: {
    position: "relative",
    height: "clamp(260px,40vw,420px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },

  heroImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px"
  },

  heroTitle: {
    fontSize: "clamp(2rem,5vw,3.2rem)",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "12px",
    letterSpacing: "0.5px"
  },

  heroText: {
    color: "#e2e8f0",
    maxWidth: "650px",
    fontSize: "clamp(0.95rem,2vw,1.15rem)",
    lineHeight: "1.6"
  },

  section: {
    background: "#f8fafc",
    padding: "clamp(3rem,6vw,5rem) 0"
  },

  container: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "0 clamp(1rem,3vw,2rem)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "clamp(1.5rem,3vw,2.2rem)"
  },

  card: {
    background: "#ffffff",
    padding: "clamp(1.5rem,3vw,2rem)",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    border: "1px solid rgba(0,0,0,0.06)"
  },

  title: {
    fontSize: "clamp(1.1rem,2vw,1.35rem)",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#111827"
  },

  text: {
    color: "#475569",
    lineHeight: "1.7",
    fontSize: "clamp(0.9rem,1.6vw,0.96rem)",
    marginBottom: "10px"
  },

  list: {
    paddingLeft: "18px",
    color: "#475569",
    lineHeight: "1.9",
    fontSize: "clamp(0.9rem,1.6vw,0.95rem)"
  }

};

export default PrivacyPolicy;