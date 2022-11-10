import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
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
