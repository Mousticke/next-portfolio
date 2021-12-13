import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const LandingSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 0;
`;

export const BitmojiContainer = styled.div`
  display: none;
  @media ${breakpoints.media_screens.portrait_tablet} {
    display: block;
    margin-right: 10px;
  }
`;
