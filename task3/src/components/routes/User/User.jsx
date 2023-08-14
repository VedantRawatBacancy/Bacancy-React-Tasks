import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import DisplayUser from "./DisplayUser";
import "./User.css";

import { useContextData } from "../../../UserContext";

function User() {
  const conFetch = useContextData();

  return (
    <>
      <div className="main-container">
        <NavLink to={"./add-user"} className={"navigate"}>
          <button className="add-user">Add User</button>
        </NavLink>
        <div className="child-container">
          <br></br>
          <DisplayUser />
        </div>
      </div>
    </>
  );
}

export default User;
