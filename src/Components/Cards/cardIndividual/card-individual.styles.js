import styled from "styled-components";

import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';


export const CardContainerStyled = styled(Card)`

    height:500px;
    margin: 10px;
    padding:5px;
    border:none;
    border-radius:0px 0px 10px 10px ;
    box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, .2);
    display:flex;
    flex-direction:column;
    justify-content: center;


`
export const CardImagStyled = styled(CardImg)`

    min-height:255px;
    overflow:hidden;
    border-color:none;
    border-radius: 10px 10px 0px 0px ;
    display:flex;
    justify-content:center;

`

export const CardBodyStyled = styled(CardBody)`

    border-color:none;
    display:flex;
    flex-direction:column;


`

export const CardTitleStyled = styled(CardTitle)`

    font-size: 1.5rem;
    display:flex;
    justify-content: center;

`
export const CardSubtitleStyled = styled(CardSubtitle)`

    display:flex;
    justify-content: center;
    margin-bottom:5px;
    color:${({color}) =>`rgb(${color.R},${color.G},${color.B},${color.P})`};

`
export const CardTextStyled = styled(CardText)`

    border: none;
    max-height:80px;
    overflow: scroll;
    font-size:0.8rem;
    color:${({color}) =>`rgb(${color.R},${color.G},${color.B},${color.P})`};

    

`
export const ButtonStyled = styled(Button)`

    border: none;
    background-color:${({color}) =>`rgb(${color.R},${color.G},${color.B},${color.P})`};
    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, .2);


`
