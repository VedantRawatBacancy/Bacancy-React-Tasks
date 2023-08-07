import React, { useEffect } from "react";
import { useState } from "react";

function Effect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(
      "%cEffect 1 Mounted",
      "color:white; padding: 1em; background-color: #121212; border-radius: 0.5em;"
    );
    console.log(
      "%cEffect 1 Rendered",
      "color:white; padding: 1em; background-color: #121212; border-radius: 0.5em;"
    );
    return () => {
      console.log(
        "%cEffect 1 Clean-Up (Unmount)",
        "color:white; padding: 1em; background-color: #121212; border-radius: 0.5em;"
      );
    };
  });

  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Counter : {count}
      </button>
      <br />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Counter
      </button>
    </>
  );
}

export default Effect1;
