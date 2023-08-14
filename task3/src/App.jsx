import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/UI/Navbar";
import Home from "./components/routes/Home";
import User from "./components/routes/User/User";
import AddUser from "./components/routes/User/AddUser";
import EditUser from "./components/routes/User/EditUser";
import ViewUser from "./components/routes/User/ViewUser";

import UserContext from "./UserContext";
import "./App.css";

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
            <Route path="/user/add-user" element={<AddUser />} />
            <Route path="/user/edit-user/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<ViewUser />} />
          </Routes>
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
