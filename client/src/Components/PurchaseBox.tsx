import React, { Fragment } from "react";
import CounterAction from "./CounterAction";
import { useAppSelector } from "../redux/hook";
import { Link } from "react-router-dom";

const PurchaseBox: React.FunctionComponent = () => {
  const { productReducer, counterReducer } = useAppSelector((state) => state);
  const { count } = counterReducer;
  const { product } = productReducer;
  const { price } = product;
  const subTotal = price * count;
  return (
    <Fragment>
      <div className="fl w-100">
        <div className="ml3 mr3">
          <h4 className="tl">Set Amount</h4>
          <div className="h1 mb3 fl w-60 ml4">
            <CounterAction />
          </div>
          <div className="h2 mb3 fl w-100 flex justify-between">
            <p>Subtotal</p>
            <h4 className="mt3">${subTotal}</h4>
          </div>
          <div>
            <Link to="/cart">
              <button className="fl w-100 h2 mb1 br3 pointer bg-green ba b--green white f4 lh-copy">+ Cart</button>
            </Link>
            <Link to={`/buy/${product.product_id}`}>
              <button className="fl w-100 h2 mb2 br3 pointer ba b--green green f4 lh-copy">Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PurchaseBox;
