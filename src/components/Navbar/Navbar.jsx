import React, { useState } from "react";
import "./navbar.css";
import LoginLogout from "./logInLogOut";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <nav>
      <div className="">MR. NUR</div>
      <LoginLogout loggedIn={loggedIn} handleClick={handleLogin} />
    </nav>
  );
};

export default Navbar;
