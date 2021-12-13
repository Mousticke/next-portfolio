import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import breakpoints from "./breakpoints";
import { transitionAll } from "./transitions";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    
    :root{
        --baseline: 1.3rem;
        --h1: 2rem;
        --h2: 1.5rem;
        --h3: 1.25rem;
        --h4: 1rem;
        --h5: .875rem;
        --h6: .8rem;
    }

    *, 
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

    ::selection {
      background-color: ${(props) => props.theme.colors.selection_background};
      color: ${(props) => props.theme.colors.selection_color};
    }

    html {
        height: 100%;
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-color: ${(props) => props.theme.colors.scrollbar} 
        ${(props) => props.theme.colors.background};;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;

        //credit Mike Riethmuller: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
        @media ${breakpoints.media_screens.portrait_phone} {
            font-size: 
            calc(
                16px + 
                (24 - 16) * 
                (
                    (100vw - ${breakpoints.px_sizes.portrait_phone}px)
                    / 
                    (
                        ${breakpoints.px_sizes.desktop} - 
                        ${breakpoints.px_sizes.portrait_phone}
                    )
                )
            );
        }

        @media ${breakpoints.media_screens.desktop} {
            font-size: 24px;
        }
    }

    body {
      font-family: ${(props) => props.theme.fonts.main};
      line-height: var(--baseline);
	    padding: 0;
	    margin: 0 auto;  
      cursor: default;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};    

      &::-webkit-scrollbar {
         width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.scrollbar};
        border: 3px solid ${(props) => props.theme.colors.background};
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.background};
      }
    }
    
    #__next{
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;

        &.blur {
            overflow: hidden;
            #wrapper > *{
                filter: blur(5px) brightness(0.7);
                transition: ${transitionAll};
                pointer-events: none;
                user-select: none;
            }
            
        }
    }

    section {
      position: relative;
      max-width: 1000px;
      margin: 0px auto;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${(props) => props.theme.fonts.title};
        color: ${(props) => props.theme.colors.lightest_slate};
        font-weight: 600;
	    margin-bottom: var(--baseline);
    }

    h1 {
        font-size: var(--h1);
        line-height: var(--h1);
    }

    h2 {
        font-size: var(--h2);
        line-height: var(--h2);
    }

    h3 {
        font-size: var(--h3);
        line-height: var(--h3);
    }

    h4 {
        font-size: var(--h4);
        line-height: var(--h4);
    }

    h5 {
        font-size: var(--h5);
        line-height: var(--h5);
    }

    
    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    svg {
        fill: currentColor;
        vertical-align: middle;
        &:not(:root) {
            overflow: hidden;
        }
    }
    img {
        border: 0; /* Removes border when inside 'a' element in IE6/7/8/9 */
        -ms-interpolation-mode: bicubic; /* Improves image quality when scaled in IE7 */
    }

  .facebookButton:hover:before{
        box-shadow: 0 0 15px ${(props) => props.theme.colors.facebookButton};
  }
  
  .facebookButton:hover{
    svg{
      fill: ${(props) => props.theme.colors.facebookButton};
    } 
    box-shadow: 0 0 15px ${(props) => props.theme.colors.facebookButton};
    text-shadow: 0 0 15px ${(props) => props.theme.colors.facebookButton};
  }
  .facebookButton:before{
    background-color:${(props) => props.theme.colors.facebookButton};
  }
  .twitterButton:hover:before{
    box-shadow: 0 0 15px ${(props) => props.theme.colors.twitterButton};
  }
  .twitterButton:hover{
    svg{
      fill: ${(props) => props.theme.colors.twitterButton};
    } 
    box-shadow: 0 0 15px ${(props) => props.theme.colors.twitterButton};
    text-shadow: 0 0 15px ${(props) => props.theme.colors.twitterButton};
  }
  .twitterButton:before{
    background-color:${(props) => props.theme.colors.twitterButton};
  }
  .instagramButton:hover:before{
    box-shadow: 0 0 15px ${(props) => props.theme.colors.instagramButton}; 
  }
  .instagramButton:hover{
    svg{
      fill: ${(props) => props.theme.colors.instagramButton}; 
    } 
    box-shadow: 0 0 15px ${(props) => props.theme.colors.instagramButton}; 
    text-shadow: 0 0 15px ${(props) => props.theme.colors.instagramButton}; 
  }
  .instagramButton:before{
    background-color:${(props) => props.theme.colors.instagramButton}; 
  }
  .githubButton:hover:before{
    box-shadow: 0 0 15px ${(props) => props.theme.colors.githubButton};
  }
  .githubButton:hover{
    svg{
      fill: ${(props) => props.theme.colors.githubButton};
    } 
    box-shadow: 0 0 15px ${(props) => props.theme.colors.githubButton};
    text-shadow: 0 0 15px ${(props) => props.theme.colors.githubButton};
  }
  .githubButton:before{
    background-color:${(props) => props.theme.colors.githubButton};
  }
  .linkedInButton:hover:before{
    box-shadow: 0 0 15px ${(props) => props.theme.colors.linkedInButton};
  }
  .linkedInButton:hover{
    svg{
      fill: ${(props) => props.theme.colors.linkedInButton};
    } 
    box-shadow: 0 0 15px ${(props) => props.theme.colors.linkedInButton};
    text-shadow: 0 0 15px ${(props) => props.theme.colors.linkedInButton};
  }
  .linkedInButton:before{
    background-color:${(props) => props.theme.colors.linkedInButton};
  }
  .stackOverflowButton:hover:before{
    box-shadow: 0 0 15px ${(props) => props.theme.colors.stackOverflowButton};
  }
  .stackOverflowButton:hover{
    svg{
      fill: ${(props) => props.theme.colors.stackOverflowButton};
    } 
    box-shadow: 0 0 15px ${(props) => props.theme.colors.stackOverflowButton};
    text-shadow: 0 0 15px ${(props) => props.theme.colors.stackOverflowButton};
  }
  .stackOverflowButton:before{
    background-color:${(props) => props.theme.colors.stackOverflowButton};
  }
`;

export default GlobalStyles;
