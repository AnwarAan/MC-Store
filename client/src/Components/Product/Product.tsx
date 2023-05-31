import React from 'react';
import { Link } from 'react-router-dom';
import { ProductProps } from '../../interface';

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
  const { _id, name, price, image } = product;
  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to={`/detail/${_id}`}>
        <div style={{ width: '150px', height: '300px' }} className="br3 shadow-2 ma2 black">
          <div>
            <img style={{ width: '150px', height: '150px' }} className="" src={image} />
          </div>
          <div className="ml3 mt3">
            <span className="ma0">{name}</span>
            <h2 className="ma0">${price}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
