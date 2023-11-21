import React from "react";
import "./navbar.css";
const Navbar = () => {
  const loggedIN = true;
  return (
    <nav>
      <div className="">MR. NUR</div>
      <div className="">
        {loggedIN ? (
          <div className="profile-icon"></div>
        ) : (
          <button>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
