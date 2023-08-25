import React, { useState, createContext, useContext, useReducer } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete, AiOutlineRollback } from "react-icons/ai";

const UsersData = createContext([]);

const UserContext = ({ children }) => {
  const [index, setIndex] = useState();
  const [users, setUsers] = useState([
    {
      firstName: "Vedant",
      lastName: "Rawat",
      email: "test@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Aishwary",
      lastName: "Rawat",
      email: "test2@gmail.com",
      city: "Bangalore",
    },
    {
      firstName: "Labdhi",
      lastName: "Shah",
      email: "test3@gmail.com",
      city: "Goa",
    },
    {
      firstName: "Zeel",
      lastName: "Mewada",
      email: "test4@gmail.com",
      city: "Gandhinagar",
    },
    {
      firstName: "Zeel",
      lastName: "Parekh",
      email: "test4@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Dhruv",
      lastName: "Patel",
      email: "test5@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Om",
      lastName: "Mishra",
      email: "test6@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Saif",
      lastName: "Sheikh",
      email: "test7@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Harsh",
      lastName: "Ghelani",
      email: "test9@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Aarsh",
      lastName: "Dayal",
      email: "test10@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Dhriti",
      lastName: "Bhatt",
      email: "test11@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Smit",
      lastName: "Dudhat",
      email: "test12@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Priya",
      lastName: "Intwala",
      email: "test13@gmail.com",
      city: "Valsad",
    },
    {
      firstName: "Medha",
      lastName: "Singh",
      email: "test14@gmail.com",
      city: "Surat",
    },
    {
      firstName: "Saurav",
      lastName: "Bhrambhatt",
      email: "test15@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Ronak",
      lastName: "Shrimalli",
      email: "test16@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Devang",
      lastName: "Desani",
      email: "test17@gmail.com",
      city: "Gondal",
    },
    {
      firstName: "Harsh",
      lastName: "Kubawat",
      email: "test18gmail.com",
      city: "Dwarka",
    },
    {
      firstName: "Vaidik",
      lastName: "Rajguru",
      email: "test19@gmail.com",
      city: "Ahmedabad",
    },
    {
      firstName: "Shubhra",
      lastName: "Adhikari",
      email: "test20@gmail.com",
      city: "Ahmedabad",
    },
  ]);

  const [update, setUpdate] = useState(true);

  let flag = 0;

  const deleteAll = () => {
    toast(
      (t) => (
        <span>
          Are You Sure You Want To Delete All Entries?
          <br></br>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              setUsers([]);
              setUpdate(!update);
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
          border: "2px solid #323031",
          padding: "1em",
          color: "#323031",
          boxShadow: "0 0.25em 0.5em #000",
          filter: "drop-shadow(0 0.25em 0.75em #000)",
          fontSize: "1.25em",
          minWidth: "25em",
        },
      }
    );
  };

  const deleteUser = (array, index) => {
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
                array.splice(index, 1);
                flag = 0;
                setUpdate(!update);
              }
            }}
            className="toast-button delete"
          >
            <AiFillDelete className="bin" />
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
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

  const findUserIndex = (value) => {
    return users.findIndex((i) => {
      return (
        i.firstName === value.firstName &&
        i.lastName === value.lastName &&
        i.city === value.city &&
        i.email === value.email
      );
    });
  };

  const editUser = (index, value) => {
    users[index] = value;
  };

  return (
    <UsersData.Provider
      value={{ users, index, setIndex, deleteUser, editUser, deleteAll, findUserIndex }}
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
