import React, { Fragment } from "react";
import { useAppSelector } from "../redux/hook";

const PayBox: React.FunctionComponent = () => {
  const { productReducer, counterReducer, shippingReducer } = useAppSelector((state) => state);
  const { count } = counterReducer;
  const { product } = productReducer;
  const { price, weight } = product;
  const { shipping } = shippingReducer;
  const totalPrice = count * price;
  const totalWeight = weight * count;
  const convertWeight = totalWeight / 1000;
  const shippingInsurance = 1;

  let shippingCharge;
  if (shipping === "Same Day") {
    shippingCharge = 5;
  } else if (shipping === "Next Day") {
    shippingCharge = 3;
  } else {
    shippingCharge = 1 * Math.ceil(convertWeight);
  }

  const totalBill = totalPrice + shippingCharge + shippingInsurance;
  return (
    <Fragment>
      <div>
        <div className="ml3 mr3">
          <div>
            <h3>Summary</h3>
          </div>
          <div className="h1 mt4">
            <h4>Total Shopping</h4>
          </div>
          <div>
            <div className="flex justify-between h2">
              <p>Total Price</p>
              <p>${count * price}</p>
            </div>
            <div className="flex justify-between h2">
              <p>Shipping Charges</p>
              <p>${shippingCharge}</p>
            </div>
            <div className="flex justify-between h2">
              <p>Shipping Insurance</p>
              <p>${shippingInsurance}</p>
            </div>
          </div>
          <div className="flex justify-between mt3">
            <h4>Total Bill</h4>
            <h4>${totalBill}</h4>
          </div>
        </div>
        <div className="ml3 mr3">
          <button className="fl w-100 h2 mb3 ba br3 b--green white bg-green pointer">Pay</button>
        </div>
      </div>
    </Fragment>
  );
};

export default PayBox;
