import React, { Fragment, useEffect } from "react";

interface OnClick {
  totalPrice: number;
  shippingCharge: number;
  shippingInsurance: number;
  totalBill: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PayBox: React.FunctionComponent<OnClick> = ({
  totalPrice,
  shippingCharge,
  shippingInsurance,
  totalBill,
  onClick,
}) => {
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
              <p>${totalPrice}</p>
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
          <button className="fl w-100 h2 mb3 ba br3 b--green white bg-green pointer" onClick={onClick}>
            Pay
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PayBox;
