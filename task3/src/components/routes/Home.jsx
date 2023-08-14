import { useContextData } from "../../UserContext";
import "./Home.css";

function Home() {
  const conFetch = useContextData();
  const userLength = conFetch.users.length;
  return (
    <>
      <div className="main-container">
        <div className="child-container main">
          <h1 className="welcome">Welcome Home</h1>
          <h1 className="welcome-edit">Current Users : {userLength}</h1>

          <h1>Click On the User Button to Add Users</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
