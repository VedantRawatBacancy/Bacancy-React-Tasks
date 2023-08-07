import { useState } from "react";
import Task from "./components/Task";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Hello

function App() {
  //Task 1 State
  const [value, setValue] = useState("");

  //Task 2 States
  const [data, setData] = useState("");
  const [reData, setReData] = useState("");

  //Task 3 States
  const [values, setValues] = useState("");
  const [buttonValues, setButtonValues] = useState("");

  //Task 1 Function
  const changeHandler = (e) => {
    console.log(e);
    setValue(e.target.value);
  };

  //Task 2 Functions
  const secondChangeHandler = (e) => {
    setData(e.target.value);
  };
  const clickHandler = () => {
    setReData(data);
  };

  //Task 3 Functions
  const thirdChangeHandler = (e) => {
    setValues(e.target.value);
  };

  const secondClickHandler = () => {
    setButtonValues(values);
    setValues("");
  };

  const resetHandler = () => {
    setValues("");
    setButtonValues("");
  };

  const resetAll = () => {
    setValues("");
    setData("");
    setButtonValues("");
    setReData("");
    setValue("");
  };

  return (
    <>
    <section>
      <table>
        <tr>
          <td>
            <div className="section" id="task1">
              <h2>TASK 1</h2>
              <input type="text" value={value} onChange={changeHandler} />
              <h3>OUTPUT</h3>
              <p>{value}</p>
            </div>
          </td>
          <td>
            <div className="section" id="task2">
              <h2>TASK 2</h2>
              <input type="text" value={data} onChange={secondChangeHandler} />
              <br />
              <h3>OUTPUT</h3>
              <button onClick={clickHandler}>SUBMIT</button>
              <p>{reData}</p>
            </div>
          </td>
          <td>
            <div className="section" id="task3">
              <h2>TASK 3</h2>
              <input type="text" value={values} onChange={thirdChangeHandler} />
              <br />
              <h3>OUTPUT</h3>
              <p>{buttonValues}</p>
              <br />
              <button onClick={secondClickHandler} disabled={values === ""}>
                SUBMIT
              </button>
              <button onClick={resetHandler} className="danger">X</button>
            </div>
          </td>
        </tr>
      </table>
      </section>
      <section>
        <button onClick={resetAll} className="danger">RESET ALL</button>
      </section>
      <section>
      <div className="section">
        <h2>TASK 4</h2>
        <Task></Task>
      </div>
      </section>
    </>
  );
}

export default App;
