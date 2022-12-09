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
            tistory
          </Icon>
          <Icon
            link="https://www.instagram.com/hd_yeobi/"
            url="instagram-icon"
            boxsize="5"
          >
            instagram
          </Icon>
          <Icon
            link="https://m.facebook.com/profile.php?id=100002148660280"
            url="facebook-icon"
            boxsize="5"
            isCircle="true"
            bgsize="110"
          >
            facebook
          </Icon>
        </div>
        <p>© {year} Han Dong Yeop. All Rights Reserved.</p>
        <p>Humble Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
