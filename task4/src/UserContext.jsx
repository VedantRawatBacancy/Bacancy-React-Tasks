import React, { useState, createContext, useContext, useReducer } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete, AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const UsersData = createContext([]);

const UserContext = ({ children }) => {
  const [index, setIndex] = useState();
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Vedant",
      lastName: "Rawat",
      email: "test@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 2,
      firstName: "Aishwary",
      lastName: "Rawat",
      email: "test2@gmail.com",
      city: "Bangalore",
    },
    {
      id: 3,
      firstName: "Labdhi",
      lastName: "Shah",
      email: "test3@gmail.com",
      city: "Goa",
    },
    {
      id: 4,
      firstName: "Zeel",
      lastName: "Mewada",
      email: "test4@gmail.com",
      city: "Gandhinagar",
    },
    {
      id: 5,
      firstName: "Zeel",
      lastName: "Parekh",
      email: "test4@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 6,
      firstName: "Dhruv",
      lastName: "Patel",
      email: "test5@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 7,
      firstName: "Om",
      lastName: "Mishra",
      email: "test6@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 8,
      firstName: "Saif",
      lastName: "Sheikh",
      email: "test7@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 9,
      firstName: "Harsh",
      lastName: "Ghelani",
      email: "test9@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 10,
      firstName: "Aarsh",
      lastName: "Dayal",
      email: "test10@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 11,
      firstName: "Dhriti",
      lastName: "Bhatt",
      email: "test11@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 12,
      firstName: "Smit",
      lastName: "Dudhat",
      email: "test12@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 13,
      firstName: "Priya",
      lastName: "Intwala",
      email: "test13@gmail.com",
      city: "Valsad",
    },
    {
      id: 14,
      firstName: "Medha",
      lastName: "Singh",
      email: "test14@gmail.com",
      city: "Surat",
    },
    {
      id: 15,
      firstName: "Saurav",
      lastName: "Bhrambhatt",
      email: "test15@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 16,
      firstName: "Ronak",
      lastName: "Shrimalli",
      email: "test16@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 17,
      firstName: "Devang",
      lastName: "Desani",
      email: "test17@gmail.com",
      city: "Gondal",
    },
    {
      id: 18,
      firstName: "Harsh",
      lastName: "Kubawat",
      email: "test18gmail.com",
      city: "Dwarka",
    },
    {
      id: 19,
      firstName: "Vaidik",
      lastName: "Rajguru",
      email: "test19@gmail.com",
      city: "Ahmedabad",
    },
    {
      id: 20,
      firstName: "Shubhra",
      lastName: "Adhikari",
      email: "test20@gmail.com",
      city: "Ahmedabad",
    },
  ]);

  const [editedUser, setEditedUser] = useState([
    {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      city: "",
    },
  ]);

  const navigate = useNavigate();

  const [update, setUpdate] = useState(true);

  let flag = 0;

  const deleteUser = (userId) => {
    console.log("hello");
    toast(
      (t) => (
        <span>
          Are You Sure?
          <br></br>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              flag = 1;
              if (flag === 1) {
                let updatedArray = users.filter((val) => +val.id !== +userId);
                setUsers(updatedArray);
                navigate("./user");
              }
            }}
            className="toast-button delete"
          >
            <AiFillDelete className="bin" />
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              navigate("./user");
            }}
            className="toast-button success"
          >
            <AiOutlineRollback className="bin" />
          </button>
        </span>
      ),
      {
        duration: Infinity,
        style: {
          border: "2px solid rgba(0,0,0,0.5)",
          padding: "1em",
          color: "#323031",
          boxShadow: "0 0.25em 0.5em rgba(0,0,0,0.35)",
          filter: "drop-shadow(0 0.25em 0.75em rgba(0,0,0,0.2))",
          fontSize: "1.25em",
          minWidth: "10em",
        },
      }
    );
  };

  const editUser = (value) => {
    let updatedArray = users.map((val) => +val.id === +editedUser.id ? value : val);
    console.log(updatedArray)
    setUsers(updatedArray);
    navigate("./user");
  };

  return (
    <UsersData.Provider
      value={{
        users,
        index,
        editedUser,
        setIndex,
        deleteUser,
        editUser,
        setEditedUser,
        setUsers
      }}
    >
      {children}
    </UsersData.Provider>
  );
};

export function useContextData() {
  const contextValue = useContext(UsersData);
  return contextValue;
}

export default UserContext;
