import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Effect1 from "./components/Effect1";
import Effect2 from "./components/Effect2";
import Effect3 from "./components/Effect3";
import Effect4 from "./components/Effect4";

function App() {
  return (
    <>
    <div className="container">
      <div className="container-internal">
      <Effect1></Effect1>
      </div>
      <div className="container-internal">
      <Effect2></Effect2>
      </div>
      <div className="container-internal">
      <Effect3></Effect3>
      </div>
      <div className="container-internal">
      <Effect4></Effect4>
      </div>
    </div>
    </>
  );
}

export default App;
