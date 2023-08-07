import React from "react";
import { useState, useEffect } from "react";

function Effect2() {
  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    console.log(
      "%cEffect 2 Mounted",
      "color:white; padding: 1em; background-color: #290698; border-radius: 0.5em;"
    );
    console.log(
      "%cEffect 2 Rendered",
      "color:white; padding: 1em; background-color: #290698; border-radius: 0.5em;"
    );
    return () => {
      console.log(
        "%cEffect 2 Clean-Up (Unmount)",
        "color:white; padding: 1em; background-color: #290698; border-radius: 0.5em;"
      );
    };
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setToggle(Math.floor((290698 / Math.random()) * Math.random()));
        }}
      >
        Toggle State
      </button>
      <br />
      <button>{toggle}</button>
    </>
  );
}

export default Effect2;
