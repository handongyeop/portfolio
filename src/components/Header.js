import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const scrollY = useSelector((state) => state.scrollY.value);

  return (
    <header className={scrollY > 50 ? '' : 'transparent'}>
      <div className="inner">
        <div className="title">
          <Link to="home" smooth={true}>
            HDY's Portfolio
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="about" smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true}>
              Skill
            </Link>
          </li>
          <li>
            <Link to="archiving" smooth={true}>
              Archiving
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true}>
              Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
