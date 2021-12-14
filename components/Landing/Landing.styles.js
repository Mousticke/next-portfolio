import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const LandingSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 0;
  background: ${(props) => props.theme.colors.landing};

  height: 2000px;
`;

export const BitmojiContainer = styled.div`
  position: relative;
  display: none;
  max-width: 131px;
  @media ${breakpoints.media_screens.portrait_tablet} {
    display: block;
    margin-right: 10px;
  }
`;
