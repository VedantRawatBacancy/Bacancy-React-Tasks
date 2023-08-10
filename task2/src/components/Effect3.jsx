import React, { useEffect } from "react";
import { useState } from "react";

function Effect3() {
  const [string, getString] = useState("uKlj");

  useEffect(() => {
    console.log(
      "%cEffect 3 Mounted",
      "color:white; padding: 1em; background-color: #250403; border-radius: 0.5em;"
    );
    console.log(
      "%cEffect 3 Rendered",
      "color:white; padding: 1em; background-color: #250403; border-radius: 0.5em;"
    );
    return () => {
      console.log(
        "%cEffect 3 Clean-Up (Unmount)",
        "color:white; padding: 1em; background-color: #250403; border-radius: 0.5em;"
      );
    };
  }, [string]);

  return (
    <>
      <button
        onClick={() => {
          getString(Math.random().toString(36).substring(2, 7));
        }}
      >
        Get String
      </button>
      <br />
      <button>{string}</button>
    </>
  );
}

export default Effect3;
