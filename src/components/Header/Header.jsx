import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            PROJECT ALLECC
          </Link>
          
          <ul className="header__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lizards-vs-humans">Lizards Vs Humans</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;