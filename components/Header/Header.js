import { HeaderContainer } from "./Header.styles";
import breakpoints from "@/styles/breakpoints";
import navLinksData from "@/config/navLinksData";
import SideMenu from "./SideMenu/SideMenu";
import Navbar from "./Navbar/Navbar";
import { useHeaderStyle } from "@/hooks";
import { useCallback, useMemo, useState } from "react";

function Header() {
  const { isTop, showSide, setShowSide } = useHeaderStyle({
    sideMenu: false,
    top: true,
    sizeThreshold: breakpoints.px_sizes.landscape_tablet,
  });

  const [navLinks] = useState(navLinksData);

  const memoizeToggleMenuCallback = useCallback(() => {
    setShowSide((prevState) => !prevState);
  }, [setShowSide]);

  const memoizeNavLinksData = useMemo(() => {
    return navLinks;
  }, [navLinks]);

  return (
    <HeaderContainer isTop={isTop}>
      <Navbar
        toggleSideMenu={memoizeToggleMenuCallback}
        sideMenuOpen={showSide}
        navLinksData={memoizeNavLinksData}
      />
      <SideMenu sideMenuOpen={showSide} navLinksData={memoizeNavLinksData} />
    </HeaderContainer>
  );
}

export default Header;
