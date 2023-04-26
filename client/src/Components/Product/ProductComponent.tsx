import React, { Fragment } from "react";
import { Link } from "react-router-dom";

interface ProductComponent {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductComponent: React.FunctionComponent<ProductComponent> = ({ id, title, price, image }) => {
  return (
    <Fragment>
      <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${id}`}>
        <div style={{ width: "180px", height: "300px", cursor: "pointer" }} className="ma3 br3 bg-near-white">
          <img style={{ width: "150px", height: "180px" }} src={image} alt=""></img>
          <div className="relative h3">
            <p className="tl ml3 mr3">{title.length > 50 ? `${title.substring(0, 50)}...` : title}</p>
          </div>
          <div className="relative">
            <h4 className="ml3" style={{ position: "absolute", top: "-30px" }}>
              ${price}
            </h4>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default ProductComponent;
