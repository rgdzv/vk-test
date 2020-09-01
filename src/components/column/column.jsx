import React from "react";
import "./column.scss";
import close from "./../../images/close.svg";
import CardContainer from "./../../containers/card/card-container";
import AddFormContainer from "../../containers/add-form/add-form-container";
import { removeColumn } from './../../redux/actions/actions';
import { Droppable } from "react-beautiful-dnd";

const Column = ({
  title,
  cards,
  columnIndex,
  dispatch
}) => {
  const remove = () => {
    dispatch(removeColumn(columnIndex))
  };
  return cards ? (
    <Droppable droppableId={`column-${columnIndex}`}>
      {provided => (
        <div 
          className="column__wrapper" 
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="column">
            <div className="column__header">
              {title && (
                <>
                  <p>{title}</p>
                  <img src={close} alt="close" onClick={remove} />
                </>
              )}
            </div>
            <div className="column__items">
              {cards.map((card, index) => (
                <CardContainer
                  key={index}
                  cardIndex={index}
                  columnIndex={columnIndex}
                  card={card}
                  dispatch={dispatch}
                />
              ))}
              {provided.placeholder}
            </div>
            <AddFormContainer
              columnIndex={columnIndex}
              isEmptyColumn={false}
              dispatch={dispatch}
            />
          </div>
        </div>
      )}
    </Droppable>
  ) : (
    <div className="column__wrapper">
      <div className="column">
        <AddFormContainer
          columnIndex={columnIndex}
          isEmptyColumn={true}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default Column;
