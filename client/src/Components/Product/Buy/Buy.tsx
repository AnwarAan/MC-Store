import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getAPI, url } from '../../../api/api';
import { getOneProduct } from '../../../redux/productSlice';
import { Form } from 'react-bootstrap';
import CounterAction from '../../Counter/CounterAction';
import Summary from './Sumary';

const Buy = (...arg: any) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(state => state.productReducer);
  const { count } = useAppSelector(state => state.counterReducer);
  const { name, price, description, image } = product[0];

  const getProduct = async () => {
    const data = await getAPI(`${url}/product/${id}`);
    dispatch(getOneProduct(data.data.data));
  };

  const [shipping, setShipping] = useState<string>('1');
  const onChange = (e: any) => {
    setShipping(e.target.value);
  };

  const totalShopping = count * price;
  let insurance = 0;
  let shipment = 0;
  if (shipping === '1') {
    shipment = 2;
  } else if (shipping === '2') {
    shipment = 1;
  } else {
    shipment = 0;
  }
  const bill = totalShopping + insurance + shipment;

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mh6 flex">
      <div className="w-70 flex flex-column">
        <div style={{ overflow: 'scroll', height: '600px' }}>
          <div className="flex-column bb b--light-gray pb4 bw3">
            <div>
              <h2>Store</h2>
            </div>
            <div className="flex">
              <div className="w-20 flex">
                <img style={{ width: '150px', height: '150px' }} src={image} />
              </div>
              <div className="w-80">
                <span>{name}</span>
                <h4>${price}</h4>
                <div className="w-20">
                  <CounterAction />
                </div>
              </div>
            </div>
          </div>
          <div className="mt4 br3 shadow-2">
            <div className="pa4 bb b--light-gray">
              <h2 className="ma0">Shipment and Payment</h2>
            </div>
            <div className="flex flex-column bb b--light-gray pa4">
              <h4 className="mt0">Address</h4>
              <span>{}</span>
            </div>
            <div className="pa4 flex bb b--light-gray">
              <div className="w-30 mr5">
                <label>Select Courier</label>
                <div className="d-flex rounded-3"></div>
                <Form.Select aria-label="Default select example" onChange={onChange} value={shipping}>
                  <option value={1}>Same Day</option>
                  <option value={2}>Next Day</option>
                  <option value={3}>Reguler</option>
                </Form.Select>
              </div>
              <div className="w-30">
                <label>Select Courier</label>
                <Form.Select>
                  <option value={1}>Go Bike $(2)</option>
                  <option value={2}>J&J $(1)</option>
                  <option value={3}>Cargo (free)</option>
                </Form.Select>
              </div>
            </div>
            <div className="pa4">
              <h4 className="mb2 mt0">Balance</h4>
              <span>${}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-30">
        <Summary shopping={totalShopping} insurance={insurance} shipment={shipment} bill={bill} />
      </div>
    </div>
  );
};

export default Buy;
