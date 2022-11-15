import React from "react";
import Login from "./components/LoginPage/Login";
import MainPage from "./components/MainPage/MainPage";
import DisplaySongs from "./components/DisplaySongs/displaySongs";

function App() {

  return (
    <div className="App" id="mainBody">
      <Login/>
      <MainPage/>
      <DisplaySongs/>
    </div>
  )
}

export default App
