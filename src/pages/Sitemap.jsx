import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Sitemap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate section headers
    gsap.from(".sitemap-section-title", {
      y: 30,
      // opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".sitemap-section-title",
        start: "top 85%",
      },
    });

    // Animate link items
    gsap.from(".sitemap-link", {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".sitemap-link",
        start: "top 85%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const links = {
    "Main Pages": [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Products", path: "/products" },
      { name: "Innovation", path: "/innovation" },
      { name: "Resources", path: "/resources" },
    ],
    "Company": [
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact" },
      { name: "Explore More", path: "/explore-more" },
      { name: "Learn More", path: "/learn-more" },
    ],
    "Legal & Policy": [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  };

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.title}>Sitemap</h1>
      <p style={styles.description}>
        Welcome to the SteelBond Wires sitemap. This page provides an overview of all the pages and content available on our website, helping you navigate efficiently.
      </p>

      <div style={styles.gridContainer}>
        {Object.entries(links).map(([category, items]) => (
          <div key={category} style={styles.section}>
            <h2 style={styles.sectionTitle} className="sitemap-section-title">
              {category}
            </h2>
            <ul style={styles.list}>
              {items.map((item) => (
                <li key={item.path} style={styles.listItem} className="sitemap-link">
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                    }}
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#1a1a1a";
                      e.target.style.paddingLeft = "10px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#475569";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    → {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>Website Statistics</h3>
        <p style={styles.infoText}>
          This sitemap contains all major sections and pages of the SteelBond Wires website. For a detailed XML sitemap for search engines, please visit our robots.txt file.
        </p>
      </div>

      <div style={styles.contactBox}>
        <h3 style={styles.contactTitle}>Need Help Navigating?</h3>
        <p style={styles.contactText}>
          If you can't find what you're looking for, please feel free to{" "}
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}
            style={styles.contactLink}
          >
            contact us
          </a>
          . Our team is here to assist you.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
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
    marginBottom: "clamp(15px, 3vw, 20px)",
    background: "linear-gradient(135deg, #1a1a1a, #9ca3af)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    color: "#475569",
    marginBottom: "clamp(25px, 5vw, 40px)",
    lineHeight: "1.8",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(25px, 5vw, 35px)",
    marginBottom: "clamp(35px, 7vw, 50px)",
  },
  section: {
    padding: "clamp(20px, 4vw, 30px)",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease",
  },
  sectionTitle: {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    fontWeight: "700",
    marginBottom: "clamp(15px, 3vw, 20px)",
    color: "#1a1a1a",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "clamp(8px, 2vw, 12px)",
  },
  link: {
    color: "#475569",
    textDecoration: "none",
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    transition: "all 0.3s ease",
    display: "inline-block",
  },
  infoBox: {
    padding: "clamp(20px, 4vw, 30px)",
    backgroundColor: "#f0f9ff",
    borderLeft: "4px solid #1a1a1a",
    borderRadius: "8px",
    marginBottom: "clamp(20px, 4vw, 30px)",
  },
  infoTitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    marginBottom: "clamp(10px, 2vw, 15px)",
    color: "#1a1a1a",
  },
  infoText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    color: "#475569",
    lineHeight: "1.8",
  },
  contactBox: {
    padding: "clamp(20px, 4vw, 30px)",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    textAlign: "center",
  },
  contactTitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontWeight: "700",
    marginBottom: "clamp(10px, 2vw, 15px)",
    color: "#1a1a1a",
  },
  contactText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    color: "#475569",
    lineHeight: "1.8",
  },
  contactLink: {
    color: "#1a1a1a",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
};

export default Sitemap;