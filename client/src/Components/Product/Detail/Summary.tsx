import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hook';
import { postAPI, url } from '../../../api/api';
import { Form } from 'react-bootstrap';
import CounterAction from '../../Counter/CounterAction';

const Summary = () => {
  const { count } = useAppSelector(state => state.counterReducer);
  const { product } = useAppSelector(state => state.productReducer);
  const { id } = useParams();
  const { price } = product[0];
  const subTotal = price * count;
  const user = window.localStorage.getItem('user');

  let path = `/buy/${id}`;
  if (window.localStorage.length === 0) {
    path = `/login`;
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      userId: user,
      item: [
        {
          productId: id,
          quantity: count,
        },
      ],
    };
    addCart(data);
  };

  const addCart = async (data: any) => {
    try {
      const result = await postAPI(`${url}/cart`, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: '360px' }} className="br3 shadow-2 ml4">
      <div className="mh4 pt1">
        <h2 className="">Set Amount</h2>
        <div className="mt4">
          <div className="w-50">
            <CounterAction />
            <div className="mt2">
              <span>Max</span>
            </div>
          </div>
        </div>
        <div className="flex flex-column tc mt4">
          <div className="flex justify-between">
            <p className="pt2">Subtotal</p>
            <h2 className="">${subTotal}</h2>
          </div>
          <div>
            <Form onSubmit={onSubmit}>
              <button style={{ height: '40px' }} className="login ba br3 w-100">
                + Cart
              </button>
            </Form>
          </div>
          <div className="mt2">
            <Link to={path}>
              <button style={{ height: '40px' }} className="register ba br3 w-100">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
