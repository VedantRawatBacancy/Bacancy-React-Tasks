import React, { useState, createContext, useContext } from "react";
import EditUser from "./components/routes/User/EditUser";


const UsersData = createContext([]);

const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);

  const deleteUser = (array, index, toggleFunction, toggle) => {
      array.splice(index, 1);
      toggleFunction(!toggle);
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
