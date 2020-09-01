import React from "react";
import plus from "./../../images/plus.svg";
import "./add-form.scss";
import Card from "./../card/card";
import close from "./../../images/close.svg";

const AddForm = ({
  value,
  setValue,
  showForm,
  setShowForm,
  textareaRef,
  handleAddCard,
  isEmptyColumn,
}) => {
  return showForm ? (
    <div className="add__form">
      <div className="add__form__opened">
        <Card>
          <textarea
            rows="3"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={textareaRef}
            placeholder={
              isEmptyColumn
                ? "Введите название колонки"
                : "Введите название карточки"
            }
          />
        </Card>
        <div className="add__form__opened__btn">
          <button onClick={handleAddCard}>
            {isEmptyColumn ? "Добавить колонку" : "Добавить карточку"}
          </button>
          <img src={close} alt="close" onClick={() => setShowForm(false)} />
        </div>
      </div>
    </div>
  ) : (
    <div className="add__form__closed" onClick={() => setShowForm(true)}>
      <img src={plus} alt="plus" />
      <span>
        {isEmptyColumn
          ? "Добавить еще одну колонку"
          : "Добавить еще одну карточку"}
      </span>
    </div>
  );
};

export default AddForm;
