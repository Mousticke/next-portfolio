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
            <NavListItem>
              <Link href="/">
                <a>About</a>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/">
                <a>Experience</a>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/">
                <a>Project</a>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </NavListItem>
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
              <AsideNavListItem>
                <Link href="/">
                  <a>About</a>
                </Link>
              </AsideNavListItem>
              <AsideNavListItem>
                <Link href="/">
                  <a>Experience</a>
                </Link>
              </AsideNavListItem>
              <AsideNavListItem>
                <Link href="/">
                  <a>Project</a>
                </Link>
              </AsideNavListItem>
              <AsideNavListItem>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </AsideNavListItem>
            </AsideNavList>
          </AsideNav>
          <AsideSocialContainer>
            <Button
              style={{ transitionDelay: `${100}ms` }}
              as={Link}
              ariaLabel={"facebook"}
              href={"https://facebook.com"}
              className={`facebookButton`}
              backgroundColor="#151b27"
              size="xs"
              shape="rounded"
            >
              <FaFacebookF />
            </Button>
            <Button
              style={{ transitionDelay: `${100}ms` }}
              as={Link}
              ariaLabel={"github"}
              href={"https://github.com"}
              className={`githubButton`}
              backgroundColor="#151b27"
              size="xs"
              shape="rounded"
            >
              <FaGithub />
            </Button>
            <Button
              style={{ transitionDelay: `${100}ms` }}
              as={Link}
              ariaLabel={"linkedIn"}
              href={"https://linkedIn.com"}
              className={`linkedInButton`}
              backgroundColor="#151b27"
              size="xs"
              shape="rounded"
            >
              <FaLinkedinIn />
            </Button>
            <Button
              style={{ transitionDelay: `${100}ms` }}
              as={Link}
              ariaLabel={"instagram"}
              href={"https://instagram.com"}
              className={`instagramButton`}
              backgroundColor="#151b27"
              size="xs"
              shape="rounded"
            >
              <FaInstagram />
            </Button>
            <Button
              style={{ transitionDelay: `${100}ms` }}
              as={Link}
              ariaLabel={"stackOverflow"}
              href={"https://stackOverflow.com"}
              className={`stackOverflowButton`}
              backgroundColor="#151b27"
              size="xs"
              shape="rounded"
            >
              <FaStackOverflow />
            </Button>
          </AsideSocialContainer>
        </Aside>
      </NavSideMenu>
    </HeaderContainer>
  );
}

export default Header;
