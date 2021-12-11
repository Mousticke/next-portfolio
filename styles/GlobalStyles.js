import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import breakpoints from "./breakpoints";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    
    :root{

        --baseline: 1.5rem;
        --h1: 2rem;
        --h2: 1.5rem;
        --h3: 1.25rem;
        --h4: 1rem;
        --h5: .875rem;
        --h6: .8rem;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

    html {
        height: 100%;
        scroll-behavior: smooth;
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
	    padding: var(--baseline) 0;
	    margin: 0 auto;  
        cursor: default;
    }
    
    h1,h2,h3,h4,h5,h6 {
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 700;
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
`;

export default GlobalStyles;
