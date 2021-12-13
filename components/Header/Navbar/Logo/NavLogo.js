import { NavLogoContainer } from "./NavLogo.styles";

function NavLogo() {
  return (
    <NavLogoContainer>
      <a href="https://github.com/Mousticke" target="_blank" rel="noreferrer">
        <span className="text-secondary">{"<"}</span>
        <span className="text-hero"></span>
        <span className="text-secondary">{" />"}</span>
      </a>
    </NavLogoContainer>
  );
}

export default NavLogo;
