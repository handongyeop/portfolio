import React from 'react';
import './Footer.css';
import Icon from './Icon';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="inner">
        <div className="icon-wrapper">
          <Icon url="github-icon" boxsize="5" bgsize="150" isCircle="true">
            github
          </Icon>
          <Icon url="" boxsize="5" isCircle="true">
            github
          </Icon>
          <Icon url="" boxsize="5" isCircle="true">
            github
          </Icon>
        </div>
        <p>© {year} Han Dong Yeop. All Rights Reserved.</p>
        <p>Humble Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
