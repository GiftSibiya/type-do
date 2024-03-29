// IMPORT DEPENDENICES //
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT FILES //
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import Home from "./screens/home/Home";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
// RETURN //
function App() {
  return (
    <BrowserRouter>
      <Routes>
        (// AUTH PAGES //)
        <Route path="/" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
        (// HOME SCREEN //)
        <Route path="/Home" Component={Home}></Route>
        <Route path="/AddBook" Component={AddBook} />
        <Route path="/Update/:id" Component={UpdateBook} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
