import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import LizardsVsHumans from './pages/LizardsVsHumans/LizardsVsHumans';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lizards-vs-humans" element={<LizardsVsHumans />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;