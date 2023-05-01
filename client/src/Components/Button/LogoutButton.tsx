import { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

const LogoutButton = () => {
  const logout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Fragment>
      <div>
        <button className="h2 w4 br3 green ba b--washed-green bg-white mt4 pointer" onClick={logout}>
          Logout
        </button>
      </div>
    </Fragment>
  );
};

export default LogoutButton;
