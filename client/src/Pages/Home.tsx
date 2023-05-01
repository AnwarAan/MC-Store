import React, { Fragment } from "react";
import Navigation from "../Components/Navigation/Navigation";
import ProductList from "../Components/Product/ProductList";
import ErrorWrapper from "../Components/ErrorWrapper";

const Home: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="ml6 mr6">
        <ErrorWrapper>
          <ProductList />
        </ErrorWrapper>
      </div>
    </Fragment>
  );
};

export default Home;
