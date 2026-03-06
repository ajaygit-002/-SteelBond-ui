import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy = () => {
  useEffect(() => {
    // Animate content sections on scroll
    gsap.from(".cookie-section", {
      y: 50,
      // opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cookie-section",
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
      <h1 style={styles.title} className="cookie-section">Cookie Policy</h1>
      <p style={styles.text} className="cookie-section">
        SteelBond Wires uses cookies on our website to enhance your browsing experience and provide personalized content. This Cookie Policy explains what cookies are, how we use them, and your options regarding cookie usage.
      </p>

      <h2 style={styles.subtitle} className="cookie-section">What Are Cookies?</h2>
      <p style={styles.text} className="cookie-section">
        Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferences and login details.
      </p>

      <h2 style={styles.subtitle} className="cookie-section">Types of Cookies We Use</h2>
      
      <h3 style={styles.sectionTitle} className="cookie-section">Essential Cookies</h3>
      <p style={styles.text} className="cookie-section">
        These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation and access to secure areas of the website. Without these cookies, some services may not function properly.
      </p>

      <h3 style={styles.sectionTitle} className="cookie-section">Performance Cookies</h3>
      <p style={styles.text} className="cookie-section">
        These cookies collect information about how you use our website, such as which pages you visit, how long you stay, and any errors you encounter. This information helps us improve the performance and functionality of our website.
      </p>

      <h3 style={styles.sectionTitle} className="cookie-section">Functionality Cookies</h3>
      <p style={styles.text} className="cookie-section">
        These cookies remember choices you make (such as your language preference or login information) so we can provide a more personalized experience.
      </p>

      <h3 style={styles.sectionTitle} className="cookie-section">Marketing/Tracking Cookies</h3>
      <p style={styles.text} className="cookie-section">
        These cookies track your activity across different websites to deliver targeted advertising. They may be set by third-party advertising networks.
      </p>

      <h2 style={styles.subtitle} className="cookie-section">How We Use Cookies</h2>
      <ul style={styles.list} className="cookie-section">
        <li>Remembering your login information and preferences</li>
        <li>Analyzing website traffic and user behavior</li>
        <li>Improving website functionality and user experience</li>
        <li>Customizing content based on your interests</li>
        <li>Delivering targeted advertisements</li>
        <li>Tracking the effectiveness of our marketing campaigns</li>
      </ul>

      <h2 style={styles.subtitle} className="cookie-section">Third-Party Cookies</h2>
      <p style={styles.text} className="cookie-section">
        Some cookies on our website are set by third parties, such as analytics providers and advertising networks. These cookies are subject to their own privacy policies, and we have limited control over them. We encourage you to review their policies for more information.
      </p>

      <h2 style={styles.subtitle} className="cookie-section">Managing Your Cookie Preferences</h2>
      <p style={styles.text} className="cookie-section">
        You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when a cookie is being sent. Please note that disabling essential cookies may affect website functionality.
      </p>

      <h2 style={styles.subtitle} className="cookie-section">Browser Cookie Controls</h2>
      <ul style={styles.list} className="cookie-section">
        <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
        <li><strong>Firefox:</strong> Preferences &gt; Privacy & Security &gt; Cookies and Site Data</li>
        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
        <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Clear browsing data</li>
      </ul>

      <h2 style={styles.subtitle} className="cookie-section">Updates to This Cookie Policy</h2>
      <p style={styles.text} className="cookie-section">
        SteelBond Wires may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page.
      </p>

      <h2 style={styles.subtitle} className="cookie-section">Contact Us</h2>
      <address style={styles.address} className="cookie-section">
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
  sectionTitle: {
    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
    fontWeight: "600",
    marginTop: "clamp(15px, 3vw, 25px)",
    marginBottom: "clamp(10px, 2vw, 15px)",
    color: "#333",
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

export default CookiePolicy;