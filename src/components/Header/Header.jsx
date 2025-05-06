import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/lizards-vs-humans', label: 'Games' },
    { path: '/documentation', label: 'Docs' },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-text">PROJECT ALLECC</span>
          <span className="header__logo-tagline">Game Studio</span>
        </Link>
        
        <nav className="header__nav">
          <ul className="header__menu">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`header__link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="header__actions">
            <Button 
              to="/lizards-vs-humans" 
              variant="primary" 
              size="small"
            >
              Play Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;