import { Fragment } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Fragment>
      <div></div>
    </Fragment>
  );
};

export default Cart;
