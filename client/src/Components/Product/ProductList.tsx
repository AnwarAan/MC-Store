import React, { Fragment, useEffect } from "react";
import ProductComponent from "./ProductComponent";
import NotFound from "../NotFound";
import api from "../../api/api";
import { AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getProducts, responseFail } from "../../redux/productSlice";

interface Result {
  product_id: number;
  title: string;
  price: number;
  // category: Category;
  image: string;
}

const CardList: React.FunctionComponent = () => {
  const { productReducer } = useAppSelector((state) => state);
  const { products, getProductFail } = productReducer;
  const dispatch = useAppDispatch();
  const link: string = "http://localhost:3000/v2/product";
  const basicAuth = { auth: { username: "mcnwr", password: "mcnwr76" } };
  const getAllProducts = async () => {
    try {
      const data: AxiosResponse<any, any> = await api.getAPI(link, basicAuth);
      return dispatch(getProducts(data.data.data));
    } catch (error: any) {
      dispatch(responseFail(error.response.data));
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const ListComponent: JSX.Element[] = products.map((product: Result) => (
    <ProductComponent
      key={product.product_id}
      id={product.product_id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));

  return getProductFail.status === false ? (
    <NotFound />
  ) : (
    <Fragment>
      <div className="flex flex-wrap">{ListComponent}</div>
    </Fragment>
  );
};
export default CardList;
