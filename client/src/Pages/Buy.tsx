import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { getOneProduct } from "../redux/productSlice";
import Navigation from "../Components/Navigation/Navigation";
import PayBox from "../Components/PayBox";
import Shipping from "../Components/Shipping/Shipping";
import CounterAction from "../Components/CounterAction";
import Courier from "../Components/Shipping/Courier";
import EWalet from "../Components/EWalet";

const Buy = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const link: string = `http://localhost:3000/v2/product/${id}`;
  const getProduct = async () => {
    const data = await api.getProductAPI(link);
    dispatch(getOneProduct(data.data.data[0]));
  };
  const { productReducer } = useAppSelector((state) => state);
  const { product } = productReducer;
  const { title, price, image } = product;

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Fragment>
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
          {/* Payment */}
          <div className="br3 bb b--washed-green shadow-5">
            <div className="ml2">
              <h2>Payment</h2>
              <div className="ba br3 b--gray w-30 mb2">
                <EWalet />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2 br3 fl w-30 tl ml5">
          <PayBox />
        </div>
      </div>
    </Fragment>
  );
};
export default Buy;
