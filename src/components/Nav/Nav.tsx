import React from "react";
import "./Nav.css";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "../../assets/footerLogo.png";
import "./Nav.css";

interface IMenuItem {
  link: string;
  title: string;
}

export const menuList: IMenuItem[] = [
  {
    link: "#destinations",
    title: "Destination",
  },
  {
    link: "#activities",
    title: "Activities",
  },
  {
    link: "#about-us",
    title: "About Us",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];

const Nav = () => {
  return (
    <nav id="destinations">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <p className="logo__text">TRAVELx</p>
      </div>
      <div className="menu__list">
        {menuList.map(({ link, title }) => (
          <a href={link} key={link}>
            {title}
          </a>
        ))}
      </div>
      <div className="burger__menu">
        <BiMenuAltRight className="burger__menu-logo" />
      </div>
    </nav>
  );
};

export default Nav;
