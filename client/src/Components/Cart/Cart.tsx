import React from 'react';
import { ItemProps } from '../../interface';
import { postAPI, url } from '../../api/api';
import images from '../../assets/images';

const Cart: React.FunctionComponent<ItemProps> = ({ item }) => {
  const { quantity, total } = item;
  const product = item.product;
  const { _id, name, image, price } = product;
  const user = window.localStorage.getItem('user');
  const dec = quantity + 1;

  const onClick = (e: any) => {
    const data = {
      userId: user,
      item: [
        {
          productId: _id,
          quantity: -dec,
        },
      ],
    };
    deleteItem(data);
    window.location.reload();
  };

  const deleteItem = async (data: any) => {
    try {
      const result = await postAPI(`${url}/cart`, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="br3 shadow-2 mv2">
      <div className="mh2">
        <div>
          <h2>Store</h2>
        </div>
        <div className="flex">
          <div>
            <img style={{ width: '100px', height: '100px' }} src={image} />
          </div>
          <div className="ml2">
            <span>{name}</span>
            <h2>${price}</h2>
            <h6>quantity: ${quantity}</h6>
            <h6>total: ${total}</h6>
            <img
              style={{ width: '20px', height: '20px', position: 'relative', marginLeft: '660px' }}
              className="mb2 pointer"
              onClick={onClick}
              src={images.garbage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
