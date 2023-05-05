import React from "react";

const ListView = ({todoList, onComplete, onRemove}) => {
  return (
    <div>
      <ol>
        {todoList.map((item, index) => {
          return (
            <li key={item.key}>
              <span>{item.value}</span>
              <button type="button" onClick={() => {
                if(typeof onComplete === "function"){
                  onComplete(index)
                }
              }}>완료</button>
              <button type="button" onClick={() => {
                if(typeof onComplete === "function"){
                  onRemove(index)
                }
              }}>삭제</button>
            </li>
          );
        })}
      </ol>
    </div>
  )
}

export default ListView;