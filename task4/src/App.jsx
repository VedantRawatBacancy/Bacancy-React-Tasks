import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import UserContext from "./UserContext";
import Home from "./components/ApplicationComponents/Home";
import User from "./components/ApplicationComponents/UserFunctions/User";
import UserList from "./components/ApplicationComponents/UserList";
import "./App.css";
import "./Main.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/userList" element={<UserList />} />
          </Routes>
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
