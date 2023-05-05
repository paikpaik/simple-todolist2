import React, { useState } from 'react'

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(typeof onInsert === "function"){
      onInsert(inputValue);
    }
    setInputValue("");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={(event) => {
        setInputValue(event.target.value)
      }}/>
      <button type="submit">등록</button>
    </form>
  )
}

export default InsertForm;