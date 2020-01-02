import React from "react";
import Input from "./input";

function login() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="UserName" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default login;
