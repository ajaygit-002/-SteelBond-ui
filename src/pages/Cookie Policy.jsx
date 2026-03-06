import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy = () => {

  useEffect(() => {

    gsap.from(".flow-card", {
      y: 50,
      // opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".flow-container",
        start: "top 85%"
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
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Cookie policy"
          style={styles.heroImage}
        />

        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Cookie Policy</h1>

          <p style={styles.heroText}>
            Learn how SteelBond Wires uses cookies to enhance
            website functionality and user experience.
          </p>
        </div>
      </section>


      {/* FLOW DIAGRAM CONTENT */}
      <section style={styles.section}>

        <div style={styles.container} className="flow-container">

          {/* STEP 1 */}
          <div className="flow-card" style={styles.card}>
            <div style={styles.step}>01</div>

            <h3 style={styles.title}>What Are Cookies?</h3>

            <p style={styles.text}>
              Cookies are small text files stored on your device when you
              visit a website. They help websites remember your preferences,
              login status, and browsing behavior.
            </p>
          </div>


          {/* STEP 2 */}
          <div className="flow-card" style={styles.card}>
            <div style={styles.step}>02</div>

            <h3 style={styles.title}>Types of Cookies</h3>

            <ul style={styles.list}>
              <li>Essential Cookies</li>
              <li>Performance Cookies</li>
              <li>Functionality Cookies</li>
              <li>Marketing Cookies</li>
            </ul>
          </div>


          {/* STEP 3 */}
          <div className="flow-card" style={styles.card}>
            <div style={styles.step}>03</div>

            <h3 style={styles.title}>How We Use Cookies</h3>

            <ul style={styles.list}>
              <li>Improve website usability</li>
              <li>Remember user preferences</li>
              <li>Analyze visitor behavior</li>
              <li>Provide personalized content</li>
              <li>Improve marketing campaigns</li>
            </ul>
          </div>


          {/* STEP 4 */}
          <div className="flow-card" style={styles.card}>
            <div style={styles.step}>04</div>

            <h3 style={styles.title}>Managing Cookies</h3>

            <p style={styles.text}>
              Most browsers allow you to control cookie settings.
              You may disable cookies or receive alerts when cookies
              are used. Disabling essential cookies may affect
              website functionality.
            </p>
          </div>


          {/* STEP 5 */}
          <div className="flow-card" style={styles.card}>
            <div style={styles.step}>05</div>

            <h3 style={styles.title}>Policy Updates</h3>

            <p style={styles.text}>
              SteelBond Wires may update this Cookie Policy
              periodically to reflect legal or operational changes.
              Updates will always appear on this page.
            </p>
          </div>


          {/* STEP 6 */}
          <div className="flow-card" style={styles.card}>
            <div style={styles.step}>06</div>

            <h3 style={styles.title}>Contact Us</h3>

            <p style={styles.text}>
              <strong>SteelBond Wires</strong><br/>
              Email: info@steelbondwires.com<br/>
              Phone: +91 XXXXX XXXXX<br/>
              Location: Tamil Nadu, India
            </p>
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
fontSize:"clamp(2.4rem,5vw,3.4rem)",
fontWeight:"800",
color:"#fff"
},

heroText:{
maxWidth:"650px",
color:"#e2e8f0",
marginTop:"10px",
fontSize:"clamp(1rem,2vw,1.2rem)"
},

section:{
background:"#f8fafc",
padding:"clamp(3rem,6vw,5rem) 0"
},

container:{
maxWidth:"900px",
margin:"0 auto",
padding:"0 clamp(1rem,3vw,2rem)",
display:"flex",
flexDirection:"column",
gap:"30px"
},

card:{
background:"#ffffff",
padding:"28px",
borderRadius:"10px",
boxShadow:"0 8px 25px rgba(0,0,0,0.08)",
border:"1px solid #e2e8f0",
position:"relative",
transition:"all 0.3s ease"
},

step:{
position:"absolute",
top:"-14px",
left:"-14px",
width:"38px",
height:"38px",
borderRadius:"50%",
background:"#111827",
color:"#fff",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontWeight:"700",
fontSize:"14px"
},

title:{
fontSize:"clamp(1.2rem,2vw,1.4rem)",
fontWeight:"700",
marginBottom:"10px",
color:"#111827"
},

text:{
fontSize:"clamp(0.95rem,1.6vw,1rem)",
lineHeight:"1.8",
color:"#475569"
},

list:{
paddingLeft:"20px",
lineHeight:"1.9",
color:"#475569"
}

};

export default CookiePolicy;