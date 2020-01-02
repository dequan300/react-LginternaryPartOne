import React from "react";
import Login from "./Login";

let loggedIn = true;
let currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {/* {loggedIn?<h1>Hello</h1>:<Login/>} */}
      {currentTime === 18 ? <h1>why are you still working</h1> : <Login />}
    </div>
  );
}

export default App;
