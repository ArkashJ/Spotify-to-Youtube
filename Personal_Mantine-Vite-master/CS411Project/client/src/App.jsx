import React from "react";
import SignUp from "./components/LoginPage/SignUp";
import MainPage from "./components/MainPage/MainPage";
import './index.css' 

function App() {

  return (
    <div className="App" id="mainBody">
      <SignUp/>
      <MainPage/>
    </div>
  )
}

export default App
