import { Fragment, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { getOneProduct, responseFail } from "../../redux/productSlice";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import ImageDetail from "./ImageDetail";
import ContainDetail from "./ContentDetail";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { productReducer } = useAppSelector((state) => state);
  const { product } = productReducer;
  const basicAuth = { auth: { username: "mcnwr", password: "mcnwr76" } };
  const { id } = useParams();
  const link: string = `http://localhost:3000/v2/product/${id}`;
  const getProduct = async () => {
    try {
      const data = await api.getAPI(link, basicAuth);
      dispatch(getOneProduct(data.data.data[0]));
    } catch (error: any) {
      dispatch(responseFail(error.response.data));
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const { title, price, stock, weight, description, image } = product;

  return (
    <Fragment>
      <div className="fl w-40">
        <ImageDetail image={image} />
      </div>
      <div className="fl w-40 tl">
        <ContainDetail title={title} price={price} stock={stock} weight={weight} description={description} />
      </div>
    </Fragment>
  );
};

export default ProductDetail;
