import React, { ReactElement } from "react";
import "./Footer.css";
import Logo from "../../assets/footerLogo.png";
import { menuList } from "../Nav/Nav";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

interface ISocial {
  icon: ReactElement;
  link: string;
}

const socials: ISocial[] = [
  { icon: <BsTwitter />, link: "https://twitter.com" },
  { icon: <BsInstagram />, link: "https://www.instagram.com" },
  { icon: <BsYoutube />, link: "https://www.youtube.com" },
];

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <p>TRAVELx</p>
      <div className="footer__links">
        {menuList.map(({ link, title }) => (
          <a href={link}>{title}</a>
        ))}
      </div>
      <hr className="footer__divider"/>
      <div className="footer__bottom">
        <p>© 2023 Bikart Design. All rights reserved</p>
        <div className="footer__socials">
          {socials.map(({ icon, link }) => (
            <a href={link}>{icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
