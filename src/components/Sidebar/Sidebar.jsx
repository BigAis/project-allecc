import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import './Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/about', label: 'About Us', icon: '👥' },
      ]
    },
    {
      title: 'Games',
      items: [
        { path: '/lizards-vs-humans', label: 'Lizards Vs Humans', icon: '🎮' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { path: '/documentation', label: 'Documentation', icon: '📚' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Sidebar Overlay for Mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar__header">
          <Link to="/" className="sidebar__logo">
            PROJECT ALLECC
          </Link>
        </div>

        <nav className="sidebar__nav">
          {navigationItems.map((section, index) => (
            <div key={index} className="sidebar__section">
              <h3 className="sidebar__section-title">{section.title}</h3>
              <ul className="sidebar__list">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className={`sidebar__link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sidebar__link-icon">{item.icon}</span>
                      <span className="sidebar__link-text">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="sidebar__footer">
          <Button 
            variant="secondary" 
            size="small"
            href="https://github.com/BigAis/project-allecc"
            icon="🔗"
          >
            View on GitHub
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;