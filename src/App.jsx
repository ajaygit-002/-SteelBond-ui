import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Innovation from './pages/Innovation';
import Products from './pages/Products';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import FooterPage from './pages/Footer';
import ExploreMore from './pages/ExploreMore';
import LearnMore from './pages/LearnMore';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy Policy';
import TermsOfService from './pages/Terms of Service';
import CookiePolicy from './pages/Cookie Policy';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/explore-more" element={<ExploreMore />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </Router>
  );
}

export default App;
