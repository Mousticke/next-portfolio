import Link from "next/link";
import Burger from "./Burger/Burger";
import NavLogo from "./Logo/NavLogo";
import { NavContainer, NavLinks, NavList, NavListItem } from "./Navbar.styles";
import HoCNavLink from "../../HoC/HoCNavLink";
import React from "react";

function HoCNavLinkDesktop({ navLinksData }) {
  return HoCNavLink(NavList, NavListItem, Link, navLinksData);
}

function Navbar({ toggleSideMenu, sideMenuOpen, navLinksData }) {
  return (
    <NavContainer>
      <NavLogo />
      <NavLinks>
        <HoCNavLinkDesktop navLinksData={navLinksData} />
      </NavLinks>
      <Burger toggle={toggleSideMenu} sideMenuOpen={sideMenuOpen} />
    </NavContainer>
  );
}

export default React.memo(Navbar);
