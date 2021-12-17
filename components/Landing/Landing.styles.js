import styled from "styled-components";
import { transitionAll } from "@/styles/transitions";
import breakpoints from "@/styles/breakpoints";

export const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  background: ${(props) => props.theme.colors.landing};
`;

export const BitmojiContainer = styled.div`
  position: relative;
  display: none;
  max-width: 200px;
  min-width: 131px;
  @media ${breakpoints.media_screens.portrait_tablet} {
    display: block;
    margin-right: 20px;
    align-self: center;
  }
`;

export const IntroductionContainer = styled.article`
  display: flex;
  align-items: flex-start;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroGreet = styled.p`
  margin: 0px 0px 20px 2px;
  font-size: clamp(0.55rem, 5vw, 0.75rem);
  font-family: ${(props) => props.theme.fonts.mono};
  color: ${(props) => props.theme.colors.text_secondary};
`;

export const HeroName = styled.h1`
  line-height: 1.1;
  margin: 0px;
  font-size: clamp(30px, 5vw, 60px);
  font-weight: 600;
`;

export const HeroDoing = styled.h2`
  line-height: 0.9;
  margin-top: 10px;
  font-size: clamp(30px, 5vw, 60px);
  font-weight: 600;
  color: ${(props) => props.theme.colors.text_slate_blue};
`;

export const HeroSummary = styled.h3`
  font-size: 0.8rem;
  margin: 20px 0px 0px;
  font-weight: 400;
`;

export const HeroActions = styled.div`
  margin-top: 50px;
  a {
    color: ${(props) => props.theme.colors.text_secondary};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.text_secondary};
    border-radius: 4px;
    padding: 18px;
    font-size: 0.7rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transitionAll};
    margin-right: 1rem;
    margin-top: 10px;
    &:hover {
      background-color: ${(props) => props.theme.colors.hover_button};
      outline: none;
    }
  }
`;
