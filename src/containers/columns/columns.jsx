import React from "react";
import Column from "../../components/column/column";
import { useSelector, useDispatch } from "react-redux";
import { reorderCards } from './../../redux/actions/actions'
import { DragDropContext } from "react-beautiful-dnd";

const Columns = () => {

  const items = useSelector(({ columns }) => columns)
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
    dispatch(reorderCards({ source, destination }))
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {items.map((item, index) => (
          <Column
            key={index}
            {...item}
            columnIndex={index}
            dispatch={dispatch}
          />
        ))}
      </DragDropContext>
      <Column dispatch={dispatch}/>
    </>
  );
};

export default Columns

