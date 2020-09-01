import React from "react";
import { removeCard } from "./../../redux/actions/actions";
import Card from "../../components/card/card";

const CardContainer = ({ cardIndex, columnIndex, card, dispatch }) => {

  const handleRemoveCard = () => {
    dispatch(removeCard(columnIndex, cardIndex))
  }
  
  return (
    <Card 
      cardIndex={cardIndex}
      handleRemoveCard={handleRemoveCard}
      columnIndex={columnIndex}
    >
      {card}
    </Card>
  )
}

export default CardContainer