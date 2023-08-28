import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import UserContext, { useContextData } from "./UserContext";
import { useParams } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Home from "./components/ApplicationComponents/Home";
import User from "./components/ApplicationComponents/UserFunctions/User";
import AddEditUser from "./components/ApplicationComponents/UserFunctions/AddEditUser";

import "./App.css";
import "./Main.css";
import DeleteUser from "./components/ApplicationComponents/UserFunctions/DeleteUser";

function App() {
  const cFetch = useContextData();

  
  const index = cFetch.index;
  const data = cFetch.users;
  
  const dUser = () => {
    cFetch.deleteUser(data, index);
  };

  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route
              path="/user/add-user"
              element={<AddEditUser type={"add"} />}
            />
            <Route
              path="/user/edit-user/:id"
              element={<AddEditUser type={"edit"} />}
            />
            {/* <Route path="/user/delete-user" element={dUser(data, index)} /> */}
          </Routes>
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
