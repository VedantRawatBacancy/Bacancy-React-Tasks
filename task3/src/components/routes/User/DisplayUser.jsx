import React, { useState } from "react";
import { useContextData } from "../../../UserContext";
import { NavLink } from "react-router-dom";
import { AiFillEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./User.css";

function DisplayUser() {
  const [deleteToggle, setDeleteToggle] = useState(false);
  const conFetch = useContextData();
  // useEffect(() => {setDeleteToggle()}, [conFetch.users]);
  let userArray = conFetch.users;

  if (userArray.length != 0) {
    return (
      <>
        <div className="main-container">
          <div className="user-container">
            {userArray.map((value, index) => (
              <div key={index} className="card">
                <table>
                  <tr>
                    <td className="head">
                      <h3>
                        {value.firstName} {value.lastName}
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="city">
                      <h4>{value.city}</h4>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td className="email">
                      <p>{value.email}</p>
                    </td>
                  </tr>
                  <br />

                  <div className="buttonContainer">
                    <button
                      className="bc-button delete"
                      onClick={() => {
                        conFetch.deleteUser(
                          userArray,
                          index,
                          setDeleteToggle,
                          deleteToggle
                        );
                      }}
                    >
                      <AiOutlineDelete className="bin" />
                    </button>
                    <NavLink to={`./edit-user/${index}`} className={"navigate"}>
                      <button className="bc-button edit-user">
                        <AiOutlineEdit className="pencil" />
                      </button>
                    </NavLink>
                    <NavLink to={`${index}`} className={"navigate"}>
                      <button className="bc-button view-user">
                        <AiFillEye className="eye" />
                      </button>
                    </NavLink>
                  </div>
                </table>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <h1>NO USERS IN THE LIST</h1>;
  }
}

export default DisplayUser;
