import React from "react";
import "./Footer.css";
import Icon from "./Icon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="inner">
        <div className="icon-wrapper">
          <Icon url="" size="5" circle="true">
            github
          </Icon>
          <Icon url="" size="5" circle="true">
            github
          </Icon>
          <Icon url="" size="5" circle="true">
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
