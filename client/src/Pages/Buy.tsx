import { Fragment, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { getOneProduct } from "../redux/productSlice";
import { getOneUser } from "../redux/userSlice";
import { getResponseFail } from "../redux/responseSlice";
import api from "../api/api";
import Navigation from "../Components/Navigation/Navigation";
import PayBox from "../Components/PayBox";
import Shipping from "../Components/Shipping/Shipping";
import CounterAction from "../Components/CounterAction";
import Courier from "../Components/Shipping/Courier";
import EWalet from "../Components/EWalet";
import ErrorWrapper from "../Components/ErrorWrapper";

const Buy = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { productReducer, userReducer, counterReducer, shippingReducer, responseReducer } = useAppSelector(
    (state) => state
  );
  const { user } = userReducer;
  const { product } = productReducer;
  const { count } = counterReducer;
  const { responseFail } = responseReducer;
  const getUserId = window.localStorage.getItem("userId");
  const getToken = window.localStorage.getItem("token");
  const link = `http://localhost:3000/v2/product/auth/${id}`;
  const UrlUser = `http://localhost:3000/v2/user/${getUserId}`;
  const basicAuth = { auth: { username: "mcnwr", password: "mcnwr76" } };
  const authorization = { headers: { Authorization: `Bearer ${getToken}` } };
  // console.log(window.localStorage);

  const { price, weight, title, image } = product;
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

  const getProduct = async () => {
    try {
      const data = await api.getAPI(link, authorization);
      dispatch(getOneProduct(data.data.data[0]));
    } catch (error: any) {
      dispatch(getResponseFail(error.response.data));
      console.log(error.response.data);
    }
  };

  const getUser = async () => {
    try {
      const data = await api.getAPI(UrlUser, basicAuth);
      dispatch(getOneUser(data.data.data[0]));
    } catch (error: any) {
      dispatch(getResponseFail(error.response.data));
      console.log(error.response.data);
    }
  };

  const onClickPay = async () => {
    try {
      if (balance > 0) {
        await api.updateAPI(UrlUser, afterPayment);
      } else {
        alert("No Much Money");
      }
      window.location.reload();
    } catch (error: any) {
      dispatch(getResponseFail(error.response.data));
      console.log(error.response.data);
    }
  };

  const { balance } = user;
  const afterPayment = { balance: balance - totalBill };

  useEffect(() => {
    getProduct();
    getUser();
  }, []);

  return window.localStorage.length === 0 ? (
    <Fragment>
      <Navigate to="/login" />
    </Fragment>
  ) : (
    <Fragment>
      <ErrorWrapper>
        <div>
          <Navigation />
          <div className="ml6 mr6 mt4">
            <div className="fl w-60 tl">
              {/* Product */}
              <div style={{ height: "200px" }} className="br3 bb b--washed-green shadow-5">
                <div className="ml2">
                  <h2 className="mt0">Product</h2>
                  <div className="fl w-20">
                    <img style={{ height: "100px", width: "100px" }} src={image}></img>
                  </div>
                  <div className="h4 fl w-80">
                    <p className="mt0">{title}</p>
                    <h4 className="mt0">${price}</h4>
                    <div className="w-20">
                      <CounterAction />
                    </div>
                  </div>
                </div>
              </div>
              {/* Shipping */}
              <div className="br3 bb b--washed-green shadow-5">
                <div className="ml2">
                  <h2>Shipping</h2>
                  <div className="flex mb2">
                    <div className="fl w-30 mr6">
                      <Shipping />
                    </div>
                    <div className="fl w-30">
                      <Courier />
                    </div>
                  </div>
                </div>
              </div>
              Payment
              <div className="br3 bb b--washed-green shadow-5">
                <div className="ml2">
                  <h2>Payment</h2>
                  <div className="ba br3 b--gray w-30 mb2">
                    <EWalet balance={balance} />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-2 br3 fl w-30 tl ml5">
              <PayBox
                totalPrice={totalPrice}
                shippingCharge={shippingCharge}
                shippingInsurance={shippingInsurance}
                totalBill={totalBill}
                onClick={onClickPay}
              />
            </div>
          </div>
        </div>
      </ErrorWrapper>
    </Fragment>
  );
};
export default Buy;
