import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

export const NavLogoContainer = styled.div`
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
    animation: typing 1s steps(20, end) forwards;
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
