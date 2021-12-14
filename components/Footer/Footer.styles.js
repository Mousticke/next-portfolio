import styled from "styled-components";
import { transitionAll } from "../../styles/transitions";
import breakpoints from "../../styles/breakpoints";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 80px;
  padding: 10px;
  text-align: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.mono};
`;

export const FooterLink = styled.a`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  cursor: pointer;
  transition: ${transitionAll};
  &:hover {
    color: ${(props) => props.theme.colors.hover_link};
  }
  p {
    line-height: 2;
  }
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;
  margin: 0px auto 10px;
  svg {
    height: fit-content;
    width: fit-content;
    fill: white;
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    display: none;
  }
`;
