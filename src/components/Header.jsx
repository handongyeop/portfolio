import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import './Header.css';

const MenuMoblie = styled.button`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  background-color: #ffffff69;
  padding: 2px;
  display: none;

  &:hover {
    color: var(--color-link);
  }

  @media (max-width: 740px) {
    display: block;
  }
`;

const Header = () => {
  const scrollY = useSelector((state) => state.scrollY.value);

  const [menu, setMenu] = useState(false);

  return (
    <header className={scrollY > 50 ? '' : 'transparent'}>
      <div className="inner">
        <div className="title">
          <Link to="home" smooth={true}>
            HDY's Portfolio
          </Link>
        </div>
        <ul className={menu ? 'nav show' : 'nav'}>
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
      <MenuMoblie
        onClick={() => {
          setMenu(!menu);
        }}
      >
        menu
      </MenuMoblie>
    </header>
  );
};

export default Header;
