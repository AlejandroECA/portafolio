import React,{useContext} from 'react';
import {
  CardContainerStyled,
  CardImagStyled,
  CardBodyStyled,
  CardTitleStyled,
  CardSubtitleStyled,
  CardTextStyled,
  ButtonStyled

} from './card-individual.styles';
import {CustomVariablesContext} from './../../../Providers/customVariables-Provider'


const CardIndividual = (props) => {

    const {cardImg,cardAlt,cardTitle,cardSubtitle,cardText,cardButton,id} = props;
    const{cardsSubTitleColor,cardsTextColor, cardsButtonColor} = useContext(CustomVariablesContext)

  return (

      <CardContainerStyled key={id}>
        <CardImagStyled src={cardImg} alt={cardAlt} />
        <CardBodyStyled>
          <CardTitleStyled >{cardTitle}</CardTitleStyled>
          <CardSubtitleStyled color={cardsSubTitleColor}>
            {cardSubtitle}
          </CardSubtitleStyled>
          <CardTextStyled color={cardsTextColor}>
            {cardText}
          </CardTextStyled>
          <ButtonStyled color={cardsButtonColor}>
            {cardButton}
          </ButtonStyled>
        </CardBodyStyled>
      </CardContainerStyled>
      

  );
};

export default CardIndividual;