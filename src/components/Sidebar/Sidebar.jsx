import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const toggle = document.querySelector('.sidebar-toggle');
      
      if (isOpen && sidebar && !sidebar.contains(event.target) && 
          toggle && !toggle.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button - Always visible */}
      <button 
        className={`sidebar-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Sidebar Overlay - Only visible when sidebar is open */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar - Hidden by default, shown when isOpen is true */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar__header">
          <div className="sidebar__logo">
            PROJECT<br/>ALLECC
          </div>
        </div>

        <nav className="sidebar__nav">
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">MAIN</h3>
            <ul className="sidebar__list">
              <li>
                <Link to="/" className={`sidebar__link ${location.pathname === '/' ? 'active' : ''}`}>
                  <span className="sidebar__link-icon">🏠</span>
                  <span className="sidebar__link-text">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={`sidebar__link ${location.pathname === '/about' ? 'active' : ''}`}>
                  <span className="sidebar__link-icon">👥</span>
                  <span className="sidebar__link-text">About Us</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">GAMES</h3>
            <ul className="sidebar__list">
              <li>
                <Link to="/lizards-vs-humans" className={`sidebar__link ${location.pathname === '/lizards-vs-humans' ? 'active' : ''}`}>
                  <span className="sidebar__link-icon">🦎</span>
                  <span className="sidebar__link-text">Lizards Vs Humans</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">RESOURCES</h3>
            <ul className="sidebar__list">
              <li>
                <Link to="/documentation" className={`sidebar__link ${location.pathname === '/documentation' ? 'active' : ''}`}>
                  <span className="sidebar__link-icon">📚</span>
                  <span className="sidebar__link-text">Documentation</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="sidebar__footer">
          <Link to="/about" className="sidebar__about-btn">
            <span className="icon">ℹ️</span> ABOUT PROJECT ALLECC
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;