import React, { useState } from "react";
import TaskView from "./TaskView";
import './TaskInput.css';

export default function TaskInput(props) {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={() => props.handler(value)}>ADD ITEM</button>
      <button onClick={() => props.deleteHandler()} className="danger">DELETE ALL</button>
    </>
  );
}
