import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import '../components/Sidebar/Sidebar.scss'; // Import the Sidebar styles

const Navbar = ({ toggleSidebar }) => {
  const [active, setActive] = useState('');

  const toggleGamePage = () => {
    window.open('/lizards-vs-humans', '_blank');
  };

  const renderNavLinks = () => (
    <ul className="list-none hidden sm:flex flex-row gap-6">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li className="text-white hover:text-white text-[20px] font-medium cursor-pointer">
        <button onClick={toggleGamePage} className="px-4 py-2 bg-[#915EFF] rounded-md">Play Now</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="Project Allecc" className="w-9 h-9 object-contain" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              Project&nbsp;
              <span className="sm:block hidden">Allecc</span>
            </p>
          </Link>
          {renderNavLinks()}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div className="burger-icon" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;