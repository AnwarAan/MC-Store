import React, { useEffect } from 'react';
import { getAPI, url } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getAllCart } from '../../redux/cartSlice';
import Cart from './Cart';
import Summary from './Summary';

const CartList = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(state => state.cartReducer);
  const { item, subTotal } = cart[0];
  const userId = window.localStorage.getItem('user');

  const getCart = async () => {
    try {
      const data = await getAPI(`${url}/cart/${userId}`);
      dispatch(getAllCart(data.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const CartList = item.map(result => <Cart key={result._id} item={result} />);

  return (
    <div>
      <div className="mh6">
        <div className="flex">
          <div className="flex flex-column w-70">{CartList}</div>
          <div className="w-30 ml4">
            <Summary subTotal={subTotal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
