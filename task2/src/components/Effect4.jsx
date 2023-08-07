import React from "react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Effect4() {
  const [input, setInput] = useState("hello");
  const [value, setValue] = useState("empty");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    setValue(input);
    toast.success(input, {
        style: {
          border: '1px solid #217ed4',
          padding: '1.4em',
          color: '#217ed4',
          boxShadow: '0 0 0.7em #000',
        },
        iconTheme: {
          primary: '#217ed4',
          secondary: '#FFFAEE',
        },
      });
  };

  useEffect(() => {
    console.log(
      "%cEffect 4 Mounted",
      "color:white; padding: 1em; background-color: #102529; border-radius: 0.5em;"
    );
    console.log(
      "%cEffect 4 Rendered",
      "color:white; padding: 1em; background-color: #102529; border-radius: 0.5em;"
    );
    return () => {
      console.log(
        "%cEffect 4 Clean-Up (Unmount)",
        "color:white; padding: 1em; background-color: #102529; border-radius: 0.5em;"
      );
    };
  }, [input, value]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <input type="text" value={input} onChange={changeHandler} />
      <br />
      <button onClick={clickHandler}>Submit Value</button>
    </>
  );
}

export default Effect4;
