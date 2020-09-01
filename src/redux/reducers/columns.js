import { ADD_CARD, REMOVE_CARD, ADD_COLUMN, REMOVE_COLUMN, REORDER_CARDS } from "../action-types/action-types";
import reorderCards from './../helper/helper';

const initialState = [
  {
    title: "План на месяц",
    cards: [
      "Пройти курс по React",
      "Сделать тестовое задание",
      "Отремонтировать машину",
    ],
  },
  {
    title: "План на день",
    cards: ["Записаться на курс по React"],
  },
];

export const columns = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return state.map((item, index) => {
        if (action.columnIndex === index) {
          return {
            ...item,
            cards: [...item.cards, action.value],
          };
        }
        return item;
      });
    case REMOVE_CARD:
      return state.map((item, index) => {
        if (action.columnIndex === index) {
          return {
            ...item,
            cards: item.cards.filter((el, cardIndex) => action.cardIndex !== cardIndex),
          };
        }
        return item;
      });
    case ADD_COLUMN:
      return [
        ...state,
        {
          title: action.value,
          cards: []
        }
      ]
    case REORDER_CARDS:
      const { source, destination } = action;
      return reorderCards({
        state,
        source,
        destination
      });
    case REMOVE_COLUMN:
      return [...state].filter((el, index) => action.columnIndex !== index)
    default:
      return state;
  }
};

