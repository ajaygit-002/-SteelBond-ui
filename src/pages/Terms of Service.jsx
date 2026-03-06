import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
  useEffect(() => {
    // Animate content sections on scroll
    gsap.from(".terms-section", {
      y: 50,
      // opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".terms-section",
        start: "top 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.title} className="terms-section">Terms of Service</h1>
      <p style={styles.text} className="terms-section">
        These Terms of Service ("Terms") govern your use of the SteelBond Wires website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our website.
      </p>

      <h2 style={styles.subtitle} className="terms-section">1. Use License</h2>
      <p style={styles.text} className="terms-section">
        Permission is granted to temporarily download one copy of the materials (information or software) on SteelBond Wires' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      </p>
      <ul style={styles.list} className="terms-section">
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose or for any public display</li>
        <li>Attempt to decompile or reverse engineer any software contained on the website</li>
        <li>Remove any copyright or other proprietary notations from the materials</li>
        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
      </ul>

      <h2 style={styles.subtitle} className="terms-section">2. Disclaimer</h2>
      <p style={styles.text} className="terms-section">
        The materials on SteelBond Wires' website are provided on an 'as is' basis. SteelBond Wires makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>

      <h2 style={styles.subtitle} className="terms-section">3. Limitations</h2>
      <p style={styles.text} className="terms-section">
        In no event shall SteelBond Wires or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SteelBond Wires' website.
      </p>

      <h2 style={styles.subtitle} className="terms-section">4. Accuracy of Materials</h2>
      <p style={styles.text} className="terms-section">
        The materials appearing on SteelBond Wires' website could include technical, typographical, or photographic errors. SteelBond Wires does not warrant that any of the materials on its website are accurate, complete, or current. SteelBond Wires may make changes to the materials contained on its website at any time without notice.
      </p>

      <h2 style={styles.subtitle} className="terms-section">5. Links</h2>
      <p style={styles.text} className="terms-section">
        SteelBond Wires has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SteelBond Wires of the site. Use of any such linked website is at the user's own risk.
      </p>

      <h2 style={styles.subtitle} className="terms-section">6. Modifications</h2>
      <p style={styles.text} className="terms-section">
        SteelBond Wires may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
      </p>

      <h2 style={styles.subtitle} className="terms-section">7. Governing Law</h2>
      <p style={styles.text} className="terms-section">
        These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>

      <h2 style={styles.subtitle} className="terms-section">Contact Us</h2>
      <address style={styles.address} className="terms-section">
        SteelBond Wires<br />
        Email: info@steelbondwires.com<br />
        Phone: +91 XXXXX XXXXX<br />
        Location: Tamil Nadu, India
      </address>
    </div>
    <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "clamp(20px, 5vw, 40px)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.8",
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "800",
    marginBottom: "clamp(20px, 4vw, 30px)",
    background: "linear-gradient(135deg, #1a1a1a, #9ca3af)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
    fontWeight: "700",
    marginTop: "clamp(25px, 5vw, 35px)",
    marginBottom: "clamp(12px, 2vw, 18px)",
    color: "#1a1a1a",
  },
  text: {
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    marginBottom: "clamp(15px, 3vw, 20px)",
    lineHeight: "1.8",
    color: "#475569",
  },
  list: {
    paddingLeft: "clamp(20px, 5vw, 30px)",
    marginBottom: "clamp(15px, 3vw, 25px)",
    listStyle: "disc",
  },
  address: {
    fontStyle: "normal",
    lineHeight: "1.8",
    backgroundColor: "#f5f5f5",
    padding: "clamp(15px, 4vw, 25px)",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "clamp(0.95rem, 2vw, 1rem)",
  },
};

export default TermsOfService;