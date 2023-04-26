import { Fragment } from "react";
import { useAppSelector } from "../../redux/hook";

const Courier = () => {
  const { shippingReducer } = useAppSelector((state) => state);
  const { shipping } = shippingReducer;

  if (shipping === "Same Day") {
    return (
      <div>
        <select className="fl w-100 br3 h2">
          <option value="Fast Bike $(5)">Fast Bike $(5)</option>
        </select>
      </div>
    );
  } else if (shipping === "Next Day") {
    return (
      <div>
        <select className="fl w-100 br3 h2">
          <option value="Fast Truck $(3)">Fast Truck $(3)</option>
        </select>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div>
          <select className="fl w-100 br3 h2">
            <option value="Cargo $(1)">Cargo $(1)</option>
          </select>
        </div>
      </Fragment>
    );
  }
};
export default Courier;
