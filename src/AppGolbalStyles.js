
import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`



 
    a{
        text-decoration: none;
        color:${props => props.fontColor};

        &:hover{
            text-decoration: none;
            color:${props => props.fontColor};
        };

    };

    body {


        font-family: 'Cairo', sans-serif;
        color:${props => props.fontColor};
        background-image: ${props => `url(${props.backgroundImage})`};
        // background-size: cover;
        background-repeat: no-repeat;

        
    }



    
`



