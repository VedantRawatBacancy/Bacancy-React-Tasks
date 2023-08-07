import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { kalkuleight } from "kalkuleight";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("");
  const [amount, setAmount] = useState(0);

  const principalChange = (e) => {
    setPrincipal(e.target.value);
  };
  const rateChange = (e) => {
    setRate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };
  const frequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const calculateInterest = () => {
    setAmount(kalkuleight(principal, rate, time, frequency).amount);
  };

  return (
    <>
      <div className="container">
        <table>
          <tr>
            <td>
              Principal
            </td>
            <td>
            <input type="text" onChange={principalChange} />
            </td>
            <td>
              Rate
            </td>
            <td>
            <input type="text" onChange={rateChange} />
            </td>
          </tr>
          <tr>
            <td>Time</td>
            <td>
              <input type="text" onChange={timeChange} />
            </td>
            <td>Frequency</td>
            <td>
              <input type="text" onChange={frequencyChange} />
            </td>
          </tr>
        </table>

        <button type="submit" onClick={calculateInterest}>
          Calculate
        </button>

        <h1>{amount}</h1>
      </div>
    </>
  );
}

export default App;
