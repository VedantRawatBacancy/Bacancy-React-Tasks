import React, { useState, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete, AiOutlineRollback } from "react-icons/ai";

const UsersData = createContext([]);

const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(true);

  let flag = 0;

  const deleteUser = (array, index, toggleFunction, toggle) => {
    toast(
      (t) => (
        <span>
          Are You Sure?
          <br></br>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              console.log(flag);
              toggleFunction(!toggle);
              flag = 1;
              if (flag === 1) {
                array.splice(index, 1);
                flag = 0;
              }
            }}
            className="bc-button delete-toast"
          >
            <AiFillDelete className="bin" />
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              toggleFunction(!toggle);
            }}
            className="bc-button edit-user-toast"
          >
            <AiOutlineRollback className="bin" />
          </button>
        </span>
      ),
      {
        duration: Infinity,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
      }
    );
  };

  const editUser = (index, value) => {
    users[index] = value;
  };

  return (
    <UsersData.Provider value={{ users, deleteUser, editUser }}>
      {children}
    </UsersData.Provider>
  );
};

export function useContextData() {
  const contextValue = useContext(UsersData);
  return contextValue;
}

export default UserContext;
