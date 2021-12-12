import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { transitionAll, transitionHamburger } from "../../styles/transitions";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  padding: 0 20px;

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  transition: ${transitionAll};

  @media ${breakpoints.media_screens.landscape_tablet} {
    padding: 0 30px;
  }

  @media ${breakpoints.media_screens.desktop} {
    padding: 0 40px;
  }
`;

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  counter-reset: item 0;
  width: 100%;
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  font-size: 0.6em;

  @media ${breakpoints.media_screens.landscape_tablet} {
    display: flex;
  }
`;

const NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 0 5px;
  position: relative;
  counter-increment: item 1;

  a {
    padding: 10px;
    color: ${(props) => props.theme.colors.text};
    transition: ${transitionAll};
    &:hover {
      color: ${(props) => props.theme.colors.numbering};
    }
    &:before {
      color: ${(props) => props.theme.colors.numbering};
      content: "0" counter(item) ".";
      margin-right: 5px;
      text-align: right;
    }
  }
`;

const NavLogoContainer = styled.div`
  display: inline-block;
  font-size: 1.2em;
  font-family: "Orbitron";

  a {
    white-space: nowrap;
    text-decoration: none;
    color: #fff;
    overflow: hidden;
    width: 0;
    font-weight: 500;
    animation: typing 0.8s steps(20, end) forwards;
  }

  .text-secondary {
    color: ${(props) => props.theme.colors.text_secondary};
    margin-left: 2px;
    margin-right: 2px;
    font-weight: 400;
  }
  .text-hero {
    &:before {
      content: "A.B";
      @media ${breakpoints.media_screens.portrait_tablet} {
        content: "Akim Benchiha";
      }
    }
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const NavBurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  align-items: flex-end;
  z-index: 11;

  @media ${breakpoints.media_screens.landscape_tablet} {
    display: none;
  }
`;

const NavBurgerInner = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: ${(props) => (props.sideMenuOpen ? `1.1em` : `1.3em`)};
  width: 2.1rem;
  height: 1.6rem;
  transition: ${transitionAll};
`;

const NavBurgerLines = styled.div`
  position: absolute;
  width: 2.1rem;
  height: 2px;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  background-color: ${(props) => props.theme.colors.navbar_bar_burger};
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.sideMenuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.sideMenuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.sideMenuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${(props) => props.theme.colors.navbar_bar_burger};
    position: absolute;
    left: auto;
    right: 0;
    width: 2.1rem;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 0.2rem;
  }
  &:before {
    top: ${(props) => (props.sideMenuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.sideMenuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.sideMenuOpen
        ? transitionHamburger.beforeActive
        : transitionHamburger.before};
  }
  &:after {
    bottom: ${(props) => (props.sideMenuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.sideMenuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.sideMenuOpen
        ? transitionHamburger.afterActive
        : transitionHamburger.after};
  }
`;

const NavSideMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${transitionAll};
  transform: translateX(${(props) => (props.sideMenuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.sideMenuOpen ? "visible" : "hidden")};
  display: block;

  @media ${breakpoints.media_screens.landscape_tablet} {
    display: none;
  }
`;

const Aside = styled.aside`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-areas:
    "nav"
    "social";
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.navbar_aside};
  padding: 5em;
  width: 100vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  box-shadow: 16px 0px 30px -17px ${(props) => props.theme.colors.navbar_box_shadow};
`;

const AsideNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  transform: ${(props) =>
    props.sideMenuOpen ? `rotateX(0deg)` : `rotateX(-70deg)`};
  opacity: ${(props) => (props.sideMenuOpen ? `1` : `0`)};
  transition: ${transitionAll};
  transition-duration: 500ms;
`;

const AsideNavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;

const AsideNavListItem = styled.li`
  margin: 0 auto 1.1rem;
  position: relative;
  counter-increment: item 1;
  &:before {
    display: block;
    content: "0" counter(item) ".";
    color: ${(props) => props.theme.colors.numbering};
    margin-bottom: 5px;
  }

  a {
    color: ${(props) => props.theme.colors.text};
  }
`;

const AsideSocialContainer = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  svg {
    height: fit-content;
    width: fit-content;
    fill: white;
  }
  button,
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      outline: 0;
      &:before {
        transform: scale(1.2);
        filter: blur(3px);
      }
    }

    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      z-index: -12;
      transform: scale(0.9);
    }
  }
`;

export {
  HeaderContainer,
  NavContainer,
  NavLinks,
  NavList,
  NavListItem,
  NavLogoContainer,
  NavBurgerContainer,
  NavBurgerInner,
  NavBurgerLines,
  NavSideMenu,
  Aside,
  AsideNav,
  AsideNavList,
  AsideNavListItem,
  AsideSocialContainer,
};
