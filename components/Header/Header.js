import Link from "next/link";
import {
  HeaderContainer,
  NavBurgerContainer,
  NavBurgerInner,
  NavBurgerLines,
  NavContainer,
  NavLinks,
  NavList,
  NavListItem,
  NavLogoContainer,
  NavSideMenu,
  Aside,
  AsideNav,
  AsideNavList,
  AsideNavListItem,
  AsideSocialContainer,
} from "./Header.styles";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaStackOverflow,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Button from "../Button";
import socialLinks from "../../config/socialMediaLinks";
import navLinks from "../../config/navLinks";

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

  const getSocialIcon = (name) => {
    switch (name) {
      case "facebook":
        return <FaFacebookF />;
      case "github":
        return <FaGithub />;
      case "linkedIn":
        return <FaLinkedinIn />;
      case "instagram":
        return <FaInstagram />;
      case "stackOverflow":
        return <FaStackOverflow />;
      default:
        return <></>;
    }
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <NavLogoContainer>
          <a
            href="https://github.com/Mousticke"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-secondary">{"<"}</span>
            <span className="text-hero"></span>
            <span className="text-secondary">{" />"}</span>
          </a>
        </NavLogoContainer>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ id, url, name }) => (
                <NavListItem key={id}>
                  <Link href={url}>
                    <a>{name}</a>
                  </Link>
                </NavListItem>
              ))}
          </NavList>
        </NavLinks>
        <NavBurgerContainer onClick={toggleSideMenu}>
          <NavBurgerInner sideMenuOpen={showSide}>
            <NavBurgerLines sideMenuOpen={showSide} />
          </NavBurgerInner>
        </NavBurgerContainer>
      </NavContainer>
      <NavSideMenu sideMenuOpen={showSide} aria-hidden={!showSide}>
        <Aside>
          <AsideNav sideMenuOpen={showSide}>
            <AsideNavList>
              {navLinks &&
                navLinks.map(({ id, url, name }) => (
                  <AsideNavListItem key={id}>
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  </AsideNavListItem>
                ))}
            </AsideNavList>
          </AsideNav>
          <AsideSocialContainer>
            {socialLinks &&
              socialLinks.map(({ id, url, name }) => (
                <Button
                  key={id}
                  style={{ transitionDelay: `${100}ms` }}
                  as={Link}
                  ariaLabel={name}
                  href={url}
                  className={`${name}Button`}
                  backgroundColor="#151b27"
                  size="xs"
                  shape="rounded"
                >
                  {getSocialIcon(name)}
                </Button>
              ))}
          </AsideSocialContainer>
        </Aside>
      </NavSideMenu>
    </HeaderContainer>
  );
}

export default Header;
