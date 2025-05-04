import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import LizardsVsHumans from './pages/LizardsVsHumans/LizardsVsHumans';
import Documentation from './pages/Documentation/Documentation';
import './styles/main.scss';

function App() {
  return (
    <Router>
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