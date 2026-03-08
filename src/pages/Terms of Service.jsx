import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {

  useEffect(() => {

    gsap.from(".terms-card", {
      y: 60,
      // opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".terms-grid",
        start: "top 85%",
      }
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
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        alt="Terms policy"
        style={styles.heroImage}
      />

      <div style={styles.overlay}>
        <h1 style={styles.heroTitle}>Terms of Service</h1>

        <p style={styles.heroText}>
          These Terms of Service outline the rules and regulations for using
          the SteelBond Wires website and services.
        </p>
      </div>

    </section>



    {/* CONTENT */}
    <section style={styles.section}>

      <div style={styles.container}>

        <div className="terms-grid" style={styles.grid}>

          {/* INTRO */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="agreement"
              style={styles.image}
            />

            <h3 style={styles.title}>Introduction</h3>

            <p style={styles.text}>
              These Terms govern your access and use of the SteelBond Wires
              website. By accessing our website, you agree to comply with
              these terms and all applicable laws.
            </p>

          </div>


          {/* USE LICENSE */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="license"
              style={styles.image}
            />

            <h3 style={styles.title}>Use License</h3>

            <ul style={styles.list}>
              <li>Materials may be used for personal viewing only</li>
              <li>Content cannot be copied or modified</li>
              <li>Commercial usage is prohibited</li>
              <li>Reverse engineering of software is not allowed</li>
              <li>Copyright notices must remain intact</li>
            </ul>

          </div>


          {/* DISCLAIMER */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="disclaimer"
              style={styles.image}
            />

            <h3 style={styles.title}>Disclaimer</h3>

            <p style={styles.text}>
              The materials on the SteelBond Wires website are provided
              "as is". We do not guarantee completeness, accuracy,
              reliability or availability of the content.
            </p>

          </div>


          {/* LIMITATIONS */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="limitations"
              style={styles.image}
            />

            <h3 style={styles.title}>Limitations</h3>

            <p style={styles.text}>
              SteelBond Wires shall not be liable for any damages
              including data loss, profit loss, or business interruption
              resulting from website usage.
            </p>

          </div>


          {/* ACCURACY */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="accuracy"
              style={styles.image}
            />

            <h3 style={styles.title}>Accuracy of Information</h3>

            <p style={styles.text}>
              Website content may include technical or typographical
              errors. SteelBond Wires may update content without notice.
            </p>

          </div>


          {/* LINKS */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
              alt="external links"
              style={styles.image}
            />

            <h3 style={styles.title}>External Links</h3>

            <p style={styles.text}>
              Our website may contain links to third-party websites.
              SteelBond Wires is not responsible for the content or
              privacy practices of those websites.
            </p>

          </div>


          {/* MODIFICATIONS */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="policy updates"
              style={styles.image}
            />

            <h3 style={styles.title}>Modifications</h3>

            <p style={styles.text}>
              SteelBond Wires may revise these Terms at any time
              without prior notice. Continued use of the website
              means acceptance of the updated Terms.
            </p>

          </div>


          {/* GOVERNING LAW */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              alt="law"
              style={styles.image}
            />

            <h3 style={styles.title}>Governing Law</h3>

            <p style={styles.text}>
              These terms are governed by the laws of India and any
              disputes shall fall under the jurisdiction of Indian courts.
            </p>

          </div>


          {/* CONTACT */}
          <div className="terms-card" style={styles.card}>

            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="contact"
              style={styles.image}
            />

            <h3 style={styles.title}>Contact Us</h3>

            <p style={styles.text}>
              SteelBond Wires<br/>
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

hero:{
position:"relative",
height:"clamp(260px,40vw,420px)",
display:"flex",
alignItems:"center",
justifyContent:"center",
overflow:"hidden"
},

heroImage:{
position:"absolute",
width:"100%",
height:"100%",
objectFit:"cover"
},

overlay:{
position:"absolute",
inset:0,
background:"rgba(0,0,0,0.65)",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
textAlign:"center",
padding:"20px"
},

heroTitle:{
fontSize:"clamp(2.2rem,5vw,3.2rem)",
fontWeight:"800",
color:"#fff",
marginBottom:"12px"
},

heroText:{
maxWidth:"650px",
color:"#e2e8f0",
fontSize:"clamp(0.95rem,2vw,1.15rem)"
},

section:{
background:"#f8fafc",
padding:"clamp(3rem,6vw,5rem) 0"
},

container:{
maxWidth:"1200px",
margin:"0 auto",
padding:"0 clamp(1rem,3vw,2rem)"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"clamp(1.25rem,3vw,2.25rem)",
alignItems: "stretch"
},

card:{
background:"#ffffff",
padding:"clamp(1rem,2.5vw,1.5rem)",
borderRadius:"12px",
boxShadow:"0 8px 25px rgba(0,0,0,0.08)",
transition:"all 0.35s ease",
border:"1px solid rgba(0,0,0,0.06)"
 ,
 display: "flex",
 flexDirection: "column",
 justifyContent: "flex-start",
 alignItems: "stretch",
 height: "100%",
 boxSizing: "border-box",
 minHeight: "320px"
},

image:{
width:"100%",
height:"clamp(120px,20vw,180px)",
objectFit:"cover",
borderRadius:"8px",
marginBottom:"15px"
 ,
 flexShrink: 0
},

title:{
fontSize:"clamp(1.1rem,2vw,1.35rem)",
fontWeight:"700",
marginBottom:"10px",
color:"#111827"
},

text:{
color:"#475569",
lineHeight:"1.7",
fontSize:"clamp(0.9rem,1.6vw,0.96rem)",
flexGrow: 1
},

list:{
paddingLeft:"18px",
lineHeight:"1.8",
color:"#475569"
}

};

export default TermsOfService;