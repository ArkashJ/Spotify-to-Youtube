import React from "react";
import Login from "./components/LoginPage/Login";
import MainPage from "./components/MainPage/MainPage";
import './index.css' 

function App() {

  return (
    <div className="App" id="mainBody">
      <Login/>
      <MainPage/>
    </div>
  )
}

export default App