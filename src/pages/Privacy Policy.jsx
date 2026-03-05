import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {

  useEffect(() => {

    gsap.from(".privacy-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".privacy-grid",
        start: "top 85%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>

        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
          alt="Industrial wires"
          style={styles.heroImage}
        />

        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Privacy Policy</h1>

          <p style={styles.heroText}>
            Protecting your information is our priority at SteelBond Wires.
          </p>
        </div>

      </section>


      {/* GRID CONTENT */}
      <div style={styles.container}>

        <div className="privacy-grid" style={styles.grid}>

          {/* INTRO */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="data protection"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Introduction</h2>

            <p style={styles.text}>
              SteelBond Wires respects your privacy and is committed to protecting
              the personal information you provide when using our website.
              This Privacy Policy explains how we collect, use and safeguard
              your information.
            </p>

          </div>


          {/* INFORMATION */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="information collection"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Information We Collect</h2>

            <ul style={styles.list}>
              <li style={styles.listItem}>Full Name</li>
              <li style={styles.listItem}>Email Address</li>
              <li style={styles.listItem}>Phone Number</li>
              <li style={styles.listItem}>Company Name</li>
              <li style={styles.listItem}>Inquiry details</li>
              <li style={styles.listItem}>Device and browser information</li>
              <li style={styles.listItem}>IP address</li>
            </ul>

          </div>


          {/* USAGE */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="business communication"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>How We Use Your Information</h2>

            <ul style={styles.list}>
              <li style={styles.listItem}>Respond to customer inquiries</li>
              <li style={styles.listItem}>Provide product information</li>
              <li style={styles.listItem}>Improve website performance</li>
              <li style={styles.listItem}>Maintain internal records</li>
              <li style={styles.listItem}>Send business updates</li>
            </ul>

          </div>


          {/* SECURITY */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
              alt="data security"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Data Protection</h2>

            <p style={styles.text}>
              SteelBond Wires implements industry-standard security practices
              to safeguard your personal information from unauthorized access,
              misuse, loss or alteration.
            </p>

          </div>


          {/* COOKIES */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
              alt="cookies tracking"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Cookies</h2>

            <p style={styles.text}>
              Our website may use cookies to improve website functionality,
              analyze traffic and enhance your browsing experience.
            </p>

          </div>


          {/* THIRD PARTY */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://imgs.search.brave.com/FK8l0FgIa8iT8w0MEUIihh3FCADq5a6uSVmKwPfJhcc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzU5LzcxLzUz/LzM2MF9GXzY1OTcx/NTM2Ml9odENOR1hP/cHFCNVpERW1XS0Fl/bno5eHRYS2RWY283/Sy5qcGc"
              alt="third party links"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Third-Party Links</h2>

            <p style={styles.text}>
              Our website may contain links to external websites.
              SteelBond Wires is not responsible for the privacy
              practices of third-party websites.
            </p>

          </div>


          {/* RIGHTS */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="user rights"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Your Rights</h2>

            <ul style={styles.list}>
              <li style={styles.listItem}>Access your personal information</li>
              <li style={styles.listItem}>Request correction</li>
              <li style={styles.listItem}>Request deletion of data</li>
            </ul>

          </div>


          {/* CONTACT */}
          <div className="privacy-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="contact support"
              style={styles.image}
            />

            <h2 style={styles.subtitle}>Contact Us</h2>

            <p style={styles.text}>
              If you have questions regarding this Privacy Policy please contact:
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

      <Footer />

    </>
  );
};


const styles = {

  hero: {
    position: "relative",
    height: "340px",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: 1,
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    zIndex: 2,
  },

  heroTitle: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: "800",
    marginBottom: "10px",
    background: "linear-gradient(180deg, #e5e5e5, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  },

  heroText: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#f1f1f1",
    margin: 0,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 10,
    visibility: "visible",
    opacity: 1,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(260px, 80vw, 320px), 1fr))",
    gap: "clamp(1.5rem, 3vw, 2.5rem)",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
    visibility: "visible",
    opacity: 1,
  },

  card: {
    background: "#ffffff",
    borderRadius: "clamp(8px, 3vw, 14px)",
    padding: "clamp(1.5rem, 4vw, 2.5rem)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "visible",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "auto",
    border: "1.5px solid rgba(0, 0, 0, 0.06)",
    zIndex: 5,
    visibility: "visible",
    opacity: 1,
  },

  image: {
    width: "100%",
    height: "clamp(140px, 25vw, 200px)",
    objectFit: "cover",
    borderRadius: "clamp(6px, 2vw, 10px)",
    marginBottom: "clamp(1rem, 2vw, 1.5rem)",
    display: "block",
  },

  subtitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    fontWeight: "700",
    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
    color: "#111111",
    position: "relative",
    zIndex: 2,
  },

  text: {
    fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
    lineHeight: "1.7",
    color: "#475569",
    marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
    position: "relative",
    zIndex: 2,
  },

  list: {
    paddingLeft: "clamp(1.5rem, 3vw, 2rem)",
    lineHeight: "1.9",
    margin: "0",
    position: "relative",
    zIndex: 2,
  },

  listItem: {
    fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
    color: "#475569",
    marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
  },

};

export default PrivacyPolicy;