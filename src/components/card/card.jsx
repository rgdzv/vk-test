import React from "react";
import "./card.scss";
import close from "./../../images/close.svg";
import { Draggable } from "react-beautiful-dnd";

const cardDraggingStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "DeepSkyBlue" : "white",

  // styles we need to apply on draggables
  ...draggableStyle
});

const Card = ({ children, handleRemoveCard, cardIndex, columnIndex }) => 
  typeof cardIndex !== "undefined" ? (
    <Draggable
      draggableId={`card-${columnIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided, snapshot) => (
        <div 
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={cardDraggingStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <span>{children}</span>
          <img src={close} alt="close" onClick={handleRemoveCard}/>
        </div>
      )}
    </Draggable>
  ) : (
    <div className="card">{children}</div>
  );

export default Card;
