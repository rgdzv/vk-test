import React, { useState, useRef, useEffect } from 'react';
import AddForm from '../../components/add-form/add-form';
import { addCard, addColumn } from './../../redux/actions/actions'

const AddFormContainer = ({ columnIndex, isEmptyColumn, dispatch }) => {

  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const handleAddCard = () => {
    if (isEmptyColumn) {
      dispatch(addColumn(value))
    } else {
      dispatch(addCard(columnIndex, value))
    }
    setValue("");
    setShowForm(false);
  }
  
  return (
    <AddForm
      showForm={showForm}
      setShowForm={setShowForm} 
      value={value}
      setValue={setValue}
      textareaRef={textareaRef}
      handleAddCard={handleAddCard}
      isEmptyColumn={isEmptyColumn}
    />
  )
}

export default AddFormContainer;
