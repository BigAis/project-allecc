import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import LizardsVsHumans from './pages/LizardsVsHumans/LizardsVsHumans';
import Documentation from './pages/Documentation/Documentation';
import { initScrollAnimations } from './scrollAnimations';
import './styles/main.scss';

// Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    // Cleanup on unmount
    return cleanup;
  }, []);
  
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Sidebar />
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lizards-vs-humans" element={<LizardsVsHumans />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;