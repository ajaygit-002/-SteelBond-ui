import { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll be in touch soon.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", queryType: "", message: "" });
  };

  return (
    <>
      {/* NAVBAR */}
      {/* <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.navBrand} onClick={() => navigate("/")}>
            <div style={styles.navLogo}>S</div>
            <div style={styles.navBrandText}>
              <div style={styles.navBrandName}>Sonali Wires</div>
              <div style={styles.navBrandSub}>Premium Copper Cables</div>
            </div>
          </div>
          <ul style={styles.navLinks}>
            <li><a href="/" style={styles.navLink}>Home</a></li>
            <li><a href="/products" style={styles.navLink}>Products</a></li>
            <li><a href="/about" style={styles.navLink}>About</a></li>
            <li><a href="/contact" style={{...styles.navLink, color: "#111", fontWeight: "700"}}>Contact</a></li>
          </ul>
        </div>
      </nav> */}

      {/* MAIN CONTENT */}
      <div style={styles.mainContainer}>
        {/* HERO SECTION */}
        <section style={styles.heroSection}>
          <h1 style={styles.heroTitle}>Get in Touch with  SteelBond Wires</h1>
          <p style={styles.heroSubtitle}>
            We're here to support product enquiries, dealership opportunities, and technical assistance.
          </p>
        </section>

        {/* CONTACT GRID */}
        <section style={styles.contactSection}>
          <div style={styles.contactWrapper}>
            <div style={styles.contactGrid}>
              {/* CONTACT FORM */}
              <div style={styles.formCard}>
                <div style={styles.formTopBar}></div>
                <div style={styles.formContent}>
                  <h2 style={styles.formTitle}>Customer Enquiries</h2>
                  <p style={styles.formSubtitle}>
                    We're here to support product enquiries, dealership requests, and technical assistance.
                  </p>

                  <form onSubmit={handleSubmit} style={styles.form}>
                    {/* NAME ROW */}
                    <div style={styles.nameRow}>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          style={styles.input}
                          required
                        />
                      </div>
                      <div style={styles.formGroup}>
                        <label style={styles.label}>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          style={styles.input}
                        />
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    {/* PHONE */}
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                        required
                      />
                    </div>

                    {/* QUERY TYPE */}
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Query Type *</label>
                      <select
                        name="queryType"
                        value={formData.queryType}
                        onChange={handleChange}
                        style={styles.select}
                        required
                      >
                        <option value="">Select Query Type</option>
                        <option value="product">Product Enquiry</option>
                        <option value="dealer">Dealer Enquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="technical">Technical Assistance</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Message</label>
                      <textarea
                        name="message"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                      ></textarea>
                    </div>

                    {/* SMS AGREEMENT */}
                    <div style={styles.smsNote}>
                      By providing your phone number, you agree to receive SMS messages.
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button type="submit" style={styles.submitButton}>
                      Get In Touch
                    </button>
                  </form>
                </div>
              </div>

              {/* LOCATION & MAP */}
              <div style={styles.detailsSection}>
                <h2 style={styles.detailsTitle}>Global Headquarters</h2>

                {/* INFO CARDS */}
                <div style={styles.infoCards}>
                  <div style={styles.infoCard}>
                    <div style={styles.infoIcon}>📍</div>
                    <div style={styles.infoContent}>
                      <h3 style={styles.infoCardTitle}>Location</h3>
                      <p style={styles.infoCardText}>
                        #45, Anna Main Road<br/>
                        Nandambakkam, Chennai<br/>
                        Tamil Nadu 600089, India
                      </p>
                    </div>
                  </div>

                  <div style={styles.infoCard}>
                    <div style={styles.infoIcon}>📞</div>
                    <div style={styles.infoContent}>
                      <h3 style={styles.infoCardTitle}>Phone</h3>
                      <p style={styles.infoCardText}>+91 (044) 2456-7890</p>
                    </div>
                  </div>

                  <div style={styles.infoCard}>
                    <div style={styles.infoIcon}>✉️</div>
                    <div style={styles.infoContent}>
                      <h3 style={styles.infoCardTitle}>Email</h3>
                      <p style={styles.infoCardText}>info@sonaliwires.com</p>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div style={styles.mapContainer}>
                  <iframe
                    title="Sonali Wires Location - Chennai"
                    src="https://www.google.com/maps?q=Anna+Main+Road+Nandambakkam+Chennai&output=embed"
                    style={styles.mapFrame}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

const styles = {
  // NAVBAR STYLES
  navbar: {
    background: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    padding: "0 20px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  navContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
  },
  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    textDecoration: "none",
  },
  navLogo: {
    width: "45px",
    height: "45px",
    background: "linear-gradient(135deg, #1a1a1a, #444444)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    color: "#ffffff",
  },
  navBrandText: {
    display: "flex",
    flexDirection: "column",
  },
  navBrandName: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#111",
  },
  navBrandSub: {
    fontSize: "0.75rem",
    color: "#666",
  },
  navLinks: {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.3s ease",
    cursor: "pointer",
    fontWeight: "500",
  },

  // MAIN CONTENT
  mainContainer: {
    background: "#ffffff",
  },

  // HERO SECTION
  heroSection: {
    padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)",
    textAlign: "center",
    background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "700",
    background: "linear-gradient(135deg, #1a1a1a, #9ca3af)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "15px",
  },
  heroSubtitle: {
    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
    color: "#475569",
    maxWidth: "650px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  // CONTACT SECTION
  contactSection: {
    padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)",
    background: "#ffffff",
  },
  contactWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
    alignItems: "start",
  },

  // FORM CARD
  formCard: {
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    overflow: "hidden",
  },
  formTopBar: {
    height: "4px",
    background: "linear-gradient(90deg, #1a1a1a, #9ca3af)",
  },
  formContent: {
    padding: "clamp(25px, 5vw, 40px)",
  },
  formTitle: {
    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
    fontWeight: "700",
    color: "#111",
    marginBottom: "8px",
  },
  formSubtitle: {
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    color: "#666",
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  nameRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#111",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "0.95rem",
    outline: "none",
    background: "#fff",
    color: "#000",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  select: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "0.95rem",
    outline: "none",
    background: "#fff",
    color: "#000",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "0.95rem",
    outline: "none",
    background: "#fff",
    color: "#000",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    minHeight: "120px",
    resize: "vertical",
    fontFamily: "inherit",
  },
  smsNote: {
    padding: "12px",
    background: "#f5f5f5",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontSize: "0.9rem",
    color: "#000",
    lineHeight: "1.5",
  },
  submitButton: {
    background: "linear-gradient(135deg, #1a1a1a, #6b7280)",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
  },

  // DETAILS SECTION
  detailsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  detailsTitle: {
    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
    fontWeight: "700",
    color: "#111",
  },
  infoCards: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  infoCard: {
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
    padding: "18px",
    background: "#f5f5f5",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    transition: "all 0.3s ease",
  },
  infoIcon: {
    fontSize: "1.5rem",
    minWidth: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContent: {
    flex: 1,
  },
  infoCardTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#111",
    marginBottom: "5px",
  },
  infoCardText: {
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.6",
  },
  mapContainer: {
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #e0e0e0",
    height: "clamp(300px, 50vw, 400px)",
  },
  mapFrame: {
    width: "100%",
    height: "100%",
    border: "none",
  },

  // RESPONSIVE MEDIA QUERIES (simulated with conditional styles)
  "@media (max-width: 768px)": {
    contactGrid: {
      gridTemplateColumns: "1fr",
    },
    nameRow: {
      gridTemplateColumns: "1fr",
    },
  },
};

export default Contact;
