import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ scrollPosition }) => {
  const location = useLocation();
  return (
    <header
      className={`${
        location.pathname === '/' && scrollPosition === 0
          ? 'header'
          : 'header-white'
      }`}
    >
      <div className="header-wrapper">
        <div className="header-title">
          <Link to={'/'}>HDY's Portfolio</Link>
        </div>
        <div className="header-nav">
          <Link to={'/about'} className="header-nav-content">
            About
          </Link>
          <Link to={'/skill'} className="header-nav-content">
            Skill
          </Link>
          <Link to={'/archiving'} className="header-nav-content">
            Archiving
          </Link>
          <Link to={'/project'} className="header-nav-content">
            Project
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
