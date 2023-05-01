import { Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Profile from "./Profile";

const Navigation = () => {
  return (
    <Fragment>
      <div style={{ height: "100px" }} className="bg-green">
        <div className="fl w-20">
          <Link to="/">
            <button className="h2 w4 br3 green ba b--washed-green bg-white mt4 pointer">Home</button>
          </Link>
        </div>
        <div className="fl w-60">
          <Search />
        </div>
        <div className="fl w-20">
          <Profile />
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
