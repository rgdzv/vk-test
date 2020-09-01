import { ADD_CARD, REMOVE_CARD, ADD_COLUMN, REMOVE_COLUMN, REORDER_CARDS } from "../action-types/action-types";


export const addCard = (columnIndex, value) => ({
  type: ADD_CARD,
  columnIndex,
  value
});

export const removeCard = (columnIndex, cardIndex) => ({
  type: REMOVE_CARD,
  columnIndex,
  cardIndex
});

export const addColumn = (value) => ({
  type: ADD_COLUMN,
  value
});

export const removeColumn = (columnIndex) => ({
  type: REMOVE_COLUMN,
  columnIndex
});

export const reorderCards = ({ source, destination }) => ({
  type: REORDER_CARDS,
  source, 
  destination
});
