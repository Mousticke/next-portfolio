import Link from "next/link";
import { NavLogoContainer } from "./NavLogo.styles";

function NavLogo() {
  return (
    <NavLogoContainer>
      <Link href="/" passHref={true}>
        <a aria-label="home" rel="noreferrer">
          <span className="text-secondary">{"<"}</span>
          <span className="text-hero"></span>
          <span className="text-secondary">{" />"}</span>
        </a>
      </Link>
    </NavLogoContainer>
  );
}

export default NavLogo;
