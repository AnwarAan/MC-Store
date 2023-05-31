import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getAPI, url } from '../../../api/api';
import { getOneProduct } from '../../../redux/productSlice';
import Summary from './Summary';

const Detail = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(state => state.productReducer);
  const { id } = useParams();

  const getProduct = async () => {
    const data = await getAPI(`${url}/product/${id}`);
    dispatch(getOneProduct(data.data.data));
  };

  const { name, price, description, image } = product[0];
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mh6 flex">
      <div className="w-70">
        <div>
          <h1>Store</h1>
        </div>
        <div className="flex">
          <div className="w-30">
            <img style={{ width: '200px', height: '200px' }} src={image} />
          </div>
          <div className="w-70">
            <h2>{name}</h2>
            <h1>${price}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="w-30">
        <Summary />
      </div>
    </div>
  );
};

export default Detail;
