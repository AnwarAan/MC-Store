import React, { Fragment } from "react";
import Search from "./Search";

const Navigation = (): JSX.Element => {
  return (
    <Fragment>
      <div style={{ height: "100px" }} className="bg-green">
        <Search />
      </div>
    </Fragment>
  );
};

export default Navigation;
