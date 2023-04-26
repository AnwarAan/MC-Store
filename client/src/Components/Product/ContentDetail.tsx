import React, { Fragment } from "react";
import { ProductProps } from "../../interface";

const ContainDetail: React.FunctionComponent<ProductProps> = ({ title, price, stock, weight, description, rating }) => {
  return (
    <Fragment>
      <div className="w50">
        <h2>{title}</h2>
      </div>
      <div>{rating}</div>
      <div className="w50">
        <h1>${price}</h1>
      </div>
      <div>
        <p>stock: {stock}</p>
        <p>weight: {weight}g</p>
        <p>{description}</p>
      </div>
    </Fragment>
  );
};

export default ContainDetail;
