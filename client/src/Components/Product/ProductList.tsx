import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getAPI, url } from '../../api/api';
import { getAllProduct } from '../../redux/productSlice';
import DataProduct from './Product';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(state => state.productReducer);

  const getProduct = async () => {
    const data = await getAPI(`${url}/product`);
    dispatch(getAllProduct(data.data.data));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const ProductList = product.map(result => <DataProduct key={result._id} product={result} />);
  return <div className="flex">{ProductList}</div>;
};

export default ProductList;
