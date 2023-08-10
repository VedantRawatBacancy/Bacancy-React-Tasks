import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskView from "./TaskView";
import { kalkuleight } from "kalkuleight";
import './Task.css'

export default function Task() {
  const [items, setItems] = useState([]);

  console.log(kalkuleight(items));

  const clickHandler = (value) => {
    if(value === ""){
      alert("Invalid Input");
    }
    else{
    setItems((prev) => [...prev, value]);
    }
  };

  let length = items.length;

  const deleteHandler = () =>{
    setItems([]);
  }

  console.table(items);

  return (
    <>
      <TaskInput handler={clickHandler} deleteHandler={deleteHandler}></TaskInput>
      <TaskView value={items} className="overflow-section"></TaskView>
    </>
  );
}
