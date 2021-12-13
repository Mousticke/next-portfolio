import { HeaderContainer } from "./Header.styles";
import React, { useEffect, useState } from "react";

import navLinksData from "../../config/navLinksData";

import SideMenu from "./SideMenu/SideMenu";
import Navbar from "./Navbar/Navbar";

function Header() {
  const [showSide, setShowSide] = useState(false);
  const toggleSideMenu = () => {
    setShowSide((prevState) => !prevState);
  };

  useEffect(() => {
    if (showSide) {
      document.querySelector("#__next").className = "blur";
    } else {
      document.querySelector("#__next").className = "";
    }
  }, [showSide]);

  return (
    <HeaderContainer>
      <Navbar
        toggleSideMenu={toggleSideMenu}
        sideMenuOpen={showSide}
        navLinksData={navLinksData}
      />
      <SideMenu sideMenuOpen={showSide} navLinksData={navLinksData} />
    </HeaderContainer>
  );
}

export default Header;
