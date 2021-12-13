import {
  NavBurgerContainer,
  NavBurgerInner,
  NavBurgerLines,
} from "./Burger.styles";

function Burger({ toggle, sideMenuOpen }) {
  return (
    <NavBurgerContainer onClick={toggle}>
      <NavBurgerInner sideMenuOpen={sideMenuOpen}>
        <NavBurgerLines sideMenuOpen={sideMenuOpen} />
      </NavBurgerInner>
    </NavBurgerContainer>
  );
}

export default Burger;
