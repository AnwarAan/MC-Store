import { Fragment } from "react";
import { selectShipping } from "../../redux/shippingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Shipping = () => {
  const dispatch = useAppDispatch();
  const { shippingReducer } = useAppSelector((state) => state);
  const { shipping } = shippingReducer;
  const getValue = (e: any) => {
    dispatch(selectShipping(e.target.value));
  };
  return (
    <Fragment>
      <div>
        <select className="fl w-100 br3 h2" onChange={getValue}>
          <option value="Same Day">Same Day</option>
          <option value="Next Day">Next Day</option>
          <option value="Reguler">Reguler</option>
        </select>
      </div>
    </Fragment>
  );
};

export default Shipping;
