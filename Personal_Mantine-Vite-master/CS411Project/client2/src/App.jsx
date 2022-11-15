import React from "react";
import Login from "./components/LoginPage/Login";
import MainPage from "./components/MainPage/MainPage";
import DisplaySongs from "./components/DisplaySongs/displaySongs";
import SignUp from "./components/LoginPage/Login";

function App() {

  return (
    <div className="App" id="mainBody">
      <SignUp/>
      <DisplaySongs/>
    </div>
  )
}

export default App
