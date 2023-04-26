import React, { Fragment, useEffect } from "react";
import Navigation from "../Components/Navigation/Navigation";
import PurchaseBox from "../Components/PurchaseBox";
import ProductDetail from "../Components/Product/ProductDetail";

const Detail: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="ml6 mr6 mt4">
        <ProductDetail />
        <div className="fl w-20 br3 shadow-2">
          <PurchaseBox />
        </div>
      </div>
    </Fragment>
  );
};

export default Detail;
