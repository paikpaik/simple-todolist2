import React, { useState, useCallback } from "react";

const InsertForm = ({ onInsert, disabled }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      // 기본적인 HTML 동작으로 인해 페이지가 새로고침 되는 것을 방지
      event.preventDefault();
      // onInsert가 정상적인 함수인 지 확인하여 에러 방지
      if (typeof onInsert === "function" && inputValue) {
        onInsert(inputValue);
      }
      setInputValue("");
    },
    [onInsert, inputValue]
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        marginBottom: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        style={{
          flex: 1,
          border: "none",
          color: "#000000",
          padding: "6px 12px",
          backgroundColor: "transparent",
        }} disabled={disabled}
      />
      <button
        type="submit"
        style={{
          border: "none",
          borderRadius: 16,
          backgroundColor: "#3ab6bc",
          color: "#ffffff",
          cursor: "pointer",
          padding: "8px 16px",
        }}
      >
        등록
      </button>
    </form>
  );
};

export default InsertForm;
