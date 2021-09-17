import styled, {css} from "styled-components";
import font from '../../../data/BinaryWaters.ttf'

const componentCSS = css`

    ul{

        color:white;
        font-weight:'bold';
        letter-spacing: 2px;
        font-size:1.25rem;
        text-shadow: 2px 2px 1px purple;
        cursor: pointer;

    }

    button{

        color:white;
        font-weight:'bold';
        background-color:#00BFFF;
        border-radius: 10%;
        box-shadow: 2px 2px 1px purple;
        font-size:2rem;
        margin-top:20px
    }

    .title{
        font-size:3rem;
        color:#00BFFF;
        font-weight:'bold';
        text-shadow: 2px 2px 1px purple;
        @media (max-width:850px){
            font-size:2rem;
        }
        @media (max-width:600px){
            font-size:1.5rem;
        }
    }
    .contentComp{

        margin-top:20px;

        font-size:2rem;
        color:#00BFFF;
        font-weight:'bold';
        text-shadow: 2px 2px 1px purple
    }

`;



export const DivHeaderContainer = styled.div`

    @font-face{
        font-family:'BinaryWatters';
        src:url(${font}) format('truetype');
        font-style:'normal'
    }

    &&&{

    display:flex; 
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin:20px;
    padding:20px;


    .logo{

        width:80px;
        >img{
            max-height:80%;
            max-width: 80%;
            cursor: pointer;
        }     
    }

    .title{

        font-size:2rem;
        color:#00BFFF;
        font-weight:'bold';
        /* padding-left:20%; */
        /* margin-right:20px; */
        /* font-family: Arial, Helvetica, sans-serif; */
        text-shadow: 2px 2px 1px purple;
        @media (max-width:850px){
            font-size:1rem;
        }
    }

    }
`
export const TransitionContainerStyled = styled.div`

    @font-face{
        font-family:'BinaryWatters';
        src:url(${font}) format('truetype');
        font-style:'normal'
    }

    height:1000px;

    margin:10px;

    /* background-image: url('https://media.giphy.com/media/l1J9K8V2MgXVX4vug/giphy.gif?cid=ecf05e47p12z7qexvfv6h0si3w894tkipgi84vnq0mmw58yq&rid=giphy.gif&ct=g'); */
    background-image: url('https://media.giphy.com/media/cjHyFCoOgUzhgNytdg/giphy-downsized-large.gif?cid=ecf05e47v0xi8pcg9kuf19ugz91ldpg9l460sics12xmsw7y&rid=giphy-downsized-large.gif&ct=g');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    font-family:BinaryWatters;

    opacity:0.75;

    .content{
        padding-left:20vw;
        padding-top:10vh
     
    }

`

export const HomeContainer = styled.div`

    height:800px;
    /* margin:10px; */

    .title{
        font-size:3rem;
        color:#00BFFF;
        font-weight:'bold';
        /* font-family: Arial, Helvetica, sans-serif; */
        text-shadow: 2px 2px 1px purple;

        @media (max-width:850px){
            font-size:2rem;
        }
        @media (max-width:600px){
            font-size:1.5rem;
        }  

    }
    .button{
        padding-top:15px;
        padding-left:25vw;
        font-size:1.5rem;

        button{
  
            color:white;
            font-weight:'bold';
            background-color:#00BFFF;
            border-radius: 10%;
            box-shadow: 2px 2px 1px purple
        }
    }
`

export const PrimaContainer = styled.div`

    ${componentCSS}
    
`
export const SecondaContainer = styled.div`

    ${componentCSS}
`
export const TerzaContainer = styled.div`

    p{

        color:white;
        font-weight:'bold';
        /* font-family: 'Quicksand'; */
        letter-spacing: 2px;
        font-size:1.25rem;
        text-shadow: 2px 2px 1px purple;

        //p:hover {
            /* font-size: 2rem;
            transform: scale(1,1);
            /* box-shadow: 0 3px 15px -2px; */
        //} */
    }



    .title{
        font-size:3rem;
        color:#00BFFF;
        font-weight:'bold';
        /* font-family: Arial, Helvetica, sans-serif; */
        text-shadow: 2px 2px 1px purple;
        margin-bottom:40px;
        @media (max-width:850px){
            font-size:2rem;
        }
        @media (max-width:600px){
            font-size:1.5rem;
        }
    }
    div{
        font-size:1.5rem;
        color:#00BFFF;
        font-weight:'bold';
        /* font-family: Arial, Helvetica, sans-serif; */
        text-shadow: 2px 2px 1px purple;
        
    }
    button{
        
        margin-top:30px;
        color:white;
        font-weight:'bold';
        background-color:#00BFFF;
        border-radius: 10%;
        box-shadow: 2px 2px 1px purple;
        font-size:2rem;
    }
    
`