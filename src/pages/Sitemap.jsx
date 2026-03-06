import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Sitemap = () => {

  useEffect(() => {

    gsap.from(".sitemap-card", {
      y: 40,
      // opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".sitemap-card",
        start: "top 85%",
      },
    });

    gsap.from(".map-section", {
      y: 40,
      // opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".map-section",
        start: "top 85%",
      },
    });

  }, []);

  return (
    <>
      <div style={styles.container}>

        <h1 style={styles.title}>Website Sitemap</h1>

        {/* Company Details */}

        <div style={styles.gridContainer}>

          <div className="sitemap-card" style={styles.card}>
            <h2 style={styles.cardTitle}>About SteelBond Wires</h2>

            <p style={styles.cardText}>
              SteelBond Wires is dedicated to delivering high-quality wire
              solutions designed for durability, strength, and reliability.
              Our products are engineered to meet modern industrial
              requirements across infrastructure, construction, and
              manufacturing sectors.
            </p>

            <p style={styles.cardText}>
              With a focus on innovation and precision manufacturing,
              SteelBond Wires aims to provide dependable wire products that
              support long-term structural performance and safety.
            </p>
          </div>

          <div className="sitemap-card" style={styles.card}>
            <h2 style={styles.cardTitle}>Our Mission</h2>

            <p style={styles.cardText}>
              Our mission is to supply superior wire products that meet the
              highest industry standards while ensuring customer satisfaction,
              sustainability, and continuous innovation in manufacturing.
            </p>
          </div>

          <div className="sitemap-card" style={styles.card}>
            <h2 style={styles.cardTitle}>Our Vision</h2>

            <p style={styles.cardText}>
              We strive to become a trusted name in the wire manufacturing
              industry by delivering reliable solutions, maintaining product
              excellence, and building long-term partnerships with our
              customers and industry stakeholders.
            </p>
          </div>

        </div>

        {/* Company Location */}

        <div className="map-section" style={styles.mapContainer}>

          <h2 style={styles.mapTitle}>Company Location</h2>

          <p style={styles.mapText}>
            SteelBond Wires operates from Tamil Nadu, India. The map below
            shows the approximate location of our operations and business
            presence.
          </p>

          <div style={styles.mapWrapper}>
            <iframe
              title="SteelBond Location"
              src="https://maps.google.com/maps?q=karur%20tamil%20nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={styles.map}
              loading="lazy"
            />
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

const styles = {

container:{
maxWidth:"1100px",
margin:"0 auto",
padding:"clamp(20px,5vw,40px)",
fontFamily:"Segoe UI, sans-serif",
lineHeight:"1.8",
color:"#1a1a1a",
background:"#ffffff",
minHeight:"100vh"
},

title:{
fontSize:"clamp(2rem,5vw,3rem)",
fontWeight:"800",
marginBottom:"40px",
background:"linear-gradient(135deg,#1a1a1a,#9ca3af)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent"
},

gridContainer:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"30px",
marginBottom:"50px"
},

card:{
padding:"30px",
background:"#f9fafb",
borderRadius:"12px",
border:"1px solid #e5e7eb",
transition:"all 0.3s ease"
},

cardTitle:{
fontSize:"1.4rem",
fontWeight:"700",
marginBottom:"15px"
},

cardText:{
color:"#475569",
fontSize:"0.95rem"
},

mapContainer:{
marginTop:"40px"
},

mapTitle:{
fontSize:"1.5rem",
fontWeight:"700",
marginBottom:"10px"
},

mapText:{
color:"#475569",
marginBottom:"20px"
},

mapWrapper:{
width:"100%",
height:"350px",
borderRadius:"10px",
overflow:"hidden",
border:"1px solid #e5e7eb"
},

map:{
width:"100%",
height:"100%",
border:"0"
}

};

export default Sitemap;