import React, { useState } from 'react';
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleInsert = (value) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList.push({
        // JSX에서 Array의 값을 표현할 때 각 요소를 구분하기 위한 값
        key: new Date().getTime(),
        // onInsert로부터 전달받은 값,
        value: value, 
        // 완료 처리를 위한 flag
        isCompleted: false 
      })
      return newTodoList
    });
  }
  return (
    <div className="App">
      <ListView todoList={todoList} />
      <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;