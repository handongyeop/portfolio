import React from 'react';
import './Footer.css';
import Icon from './Icon';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="inner">
        <div className="icon-wrapper">
          <Icon
            link="https://github.com/handongyeop"
            url="github-icon"
            boxsize="5"
            bgsize="150"
            isCircle="true"
          >
            github
          </Icon>
          <Icon
            link="https://humble-developer.tistory.com"
            url="tistory-icon-black"
            boxsize="5"
            isCircle="true"
          >
            github
          </Icon>
          <Icon
            link="https://www.instagram.com/hd_yeobi/"
            url="instagram-icon"
            boxsize="5"
          >
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
