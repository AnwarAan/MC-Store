import React, { Fragment } from "react";
import Navigation from "../Components/Navigation/Navigation";
import ProductList from "../Components/Product/ProductList";

const Home: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="ml6 mr6">
        <ProductList />
      </div>
    </Fragment>
  );
};

export default Home;
