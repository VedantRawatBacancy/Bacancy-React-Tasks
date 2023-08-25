import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import UserContext from "./UserContext";

import { Toaster } from "react-hot-toast";

import Home from "./components/ApplicationComponents/Home";
import User from "./components/ApplicationComponents/UserFunctions/User";
import AddEditUser from "./components/ApplicationComponents/UserFunctions/AddEditUser";

import "./App.css";
import "./Main.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/add-user" element={<AddEditUser type={"add"}/>} />
            <Route path="/user/edit-user" element={<AddEditUser type={"edit"}/>} />
          </Routes>
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
