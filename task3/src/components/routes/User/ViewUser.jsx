import React from "react";
import { useContextData } from "../../../UserContext";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./ViewUser.css";

function ViewUser() {
  const { id } = useParams();
  const conFetch = useContextData();

  console.log(id);
  console.log(conFetch.users[id].firstName);

  return (
    <>
      <div className="main-container">
        <div className="child-container display">
          <div className="display-card">
            <h1 className="display-head">
              Name: {conFetch.users[id].firstName} {conFetch.users[id].lastName}
            </h1>
            <h2 className="display-email">Email: {conFetch.users[id].email}</h2>
            <h3 className="display-city">City: {conFetch.users[id].city}</h3>
            <NavLink to={`../user`} className={"navigate"}>
              <button className="bc-button delete close">
                <AiOutlineClose className="check" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
