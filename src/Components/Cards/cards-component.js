import React,{useContext} from 'react';
import { CustomVariablesContext } from '../../Providers/customVariables-Provider';
import {CardContainer,CardMapped} from './cards.styles'

const CardsHome = () => {

  const {cardsInfo} = useContext(CustomVariablesContext)

  return (
    <CardContainer>
      {cardsInfo.map( (card) => {
          const {id,cardImg,cardAlt,cardTitle,cardSubTitle,cardText,cardButton} = card
        return (
            <CardMapped
            cardImg={cardImg}
            cardAlt={cardAlt}
            key = {id}
            cardTitle={cardTitle}
            cardSubtitle={cardSubTitle}
            cardText={cardText}
            cardButton={cardButton} />
        )
      })}
    </CardContainer>
  );
};

export default CardsHome;