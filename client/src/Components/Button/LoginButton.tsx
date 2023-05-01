import { Fragment } from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Fragment>
      <Link to="/login">
        <button className="h2 w4 br3 green ba b--washed-green bg-white mt4 pointer" type="button">
          Login
        </button>
      </Link>
    </Fragment>
  );
};

export default LoginButton;
