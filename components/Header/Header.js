import { HeaderContainer } from "./Header.styles";
import breakpoints from "../../styles/breakpoints";
import navLinksData from "../../config/navLinksData";
import SideMenu from "./SideMenu/SideMenu";
import Navbar from "./Navbar/Navbar";
import { useHeaderStyle } from "../../hooks";

function Header() {
  const { isTop, showSide, setShowSide } = useHeaderStyle({
    sideMenu: false,
    top: true,
    sizeThreshold: breakpoints.px_sizes.landscape_tablet,
  });

  const toggleSideMenu = () => {
    setShowSide((prevState) => !prevState);
  };

  console.log(isTop);

  return (
    <HeaderContainer isTop={isTop}>
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
