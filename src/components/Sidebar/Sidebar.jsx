import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { close } from '../../assets';
import { navLinks } from '../../constants';
import './Sidebar.scss';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    toggleSidebar();
  };

  const toggleGamePage = () => {
    window.open('/lizards-vs-humans', '_blank');
    toggleSidebar();
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-button" onClick={toggleSidebar}>
            <img src={close} alt="close menu" />
          </button>
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-links">
            {navLinks.map((link) => (
              <li key={link.id} className="sidebar-link">
                <a href={`#${link.id}`} onClick={handleLinkClick}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={toggleGamePage} 
            className="sidebar-play-button"
          >
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;