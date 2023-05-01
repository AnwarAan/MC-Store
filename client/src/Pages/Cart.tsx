import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ErrorWrapper from "../Components/ErrorWrapper";

const Cart = () => {
  const { id } = useParams();

  return (
    <ErrorWrapper>
      <Fragment>
        <h1>DURING DEVELOPMENT</h1>
      </Fragment>
    </ErrorWrapper>
  );
};

export default Cart;
