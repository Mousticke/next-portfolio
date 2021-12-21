import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import { transitionAll } from "@/styles/transitions";
export const SomethingContainer = styled.div`
  position: fixed;
  display: none;
  top: 20%;
  left: -90px;
  max-width: 180px;
  min-width: 170px;

  transition: ${transitionAll};
  @media ${breakpoints.media_screens.landscape_tablet} {
    display: block;
    margin-block-end: 20px;
    align-self: center;
  }

  .something-bubble {
    display: none;
    position: absolute;
    right: -80px;
    top: -50px;
    width: 150px;
    background-color: #fff;
    color: black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 -0.25vmin, 0 0.125vmin;
    transition: ${transitionAll};
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 40%;
      height: 100%;
      bottom: -51%;
      border-radius: 50%;
      left: 10%;
      box-shadow: 1px 1px, 8px 0px #fff, 7px 1px 0 0;
      clip-path: polygon(0% 49%, 150% 48%, 150% 100%, 0% 100%);
      transition: ${transitionAll};
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
    }
  }

  &:hover {
    cursor: pointer;
    left: -60px;
    & > .something-bubble {
      display: block;
    }
  }
`;
export const BitmojiContainer = styled.div``;
