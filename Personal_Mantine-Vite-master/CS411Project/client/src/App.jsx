import React from "react";
import SignUp from "./components/LoginPage/SignUp";
import MainPage from "./components/MainPage/MainPage";
import './index.css'
import {Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/LoginPage/Login" 

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user&&<Route path="/" exact element={<MainPage/>}/>}
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/signup" exact element={<Navigate replace to = "/login"/>}/>
    </Routes>
      
  )
}

export default App
