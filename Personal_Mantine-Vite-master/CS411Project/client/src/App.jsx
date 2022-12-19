import React from "react";
import MainPage from "./components/MainPage/MainPage";
import DisplaySongs from "./components/MainPage/DisplaySongs";

function App() {

  return (
    <div className="App" id="mainBody">
      <MainPage/>
      <DisplaySongs/>
    </div>
  )
}

export default App
