import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Innovation from './pages/Innovation';
import Products from './pages/Products';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import FooterPage from './pages/Footer';

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
      </Routes>
    </Router>
  );
}

export default App;
