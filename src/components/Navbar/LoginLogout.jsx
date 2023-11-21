import React from "react";

const LoginLogout = (props) => {
  const { loggedIn, handleClick } = props;

  return (
    <div>
      {loggedIn ? (
        <div className="profile-icon" onClick={() => handleClick()}></div>
      ) : (
        <button onClick={() => handleClick()}>Login</button>
      )}
    </div>
  );
};

export default LoginLogout;
