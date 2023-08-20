import React from "react";
import { useContextData } from "../../UserContext";
import "./Application.css";

function Home() {
  const cFetch = useContextData();

  return (
    <>
      <div className="max-container">
        <div className="child-container">
          <div className="card-container">
            <div className="flex-table">
              <div className="col-3">
                <h1>Welcome To The User Application</h1>
              </div>
              <div className="col-3">
                <div className="col-6">
                  <h1>{cFetch.users.length} Users</h1>
                </div>
                <div className="col-6">
                  <h2>Click on Users to go to User Module</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
