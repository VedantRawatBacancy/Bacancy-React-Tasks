import React, { useEffect, useState } from "react";
import "./User.css";
import { useContextData } from "../../../UserContext";
import { NavLink } from "react-router-dom";

function DisplayUser() {
  const [deleteToggle, setDeleteToggle] = useState(true);

  const conFetch = useContextData();
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
                  <tr>
                    <td>
                      <button
                        className="delete"
                        onClick={() => {
                          conFetch.deleteUser(
                            userArray,
                            index,
                            setDeleteToggle,
                            deleteToggle
                          );
                        }}
                      >
                        DELETE
                      </button>

                      <NavLink
                        to={`./edit-user/${index}`}
                        className={"navigate"}
                      >
                        <button className="edit-user">EDIT</button>
                      </NavLink>
                      <br />
                      <NavLink
                        to={`${index}`}
                        className={"navigate"}
                      >
                        <button className="view-user">VIEW</button>
                      </NavLink>
                    </td>
                  </tr>
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
