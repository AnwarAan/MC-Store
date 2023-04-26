import React, { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { increase, decrease, increaseByAmount } from "../redux/counterSlice";

const CounterAction: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = React.useState<number>(1);
  const { counterReducer } = useAppSelector((state) => state);
  const { count } = counterReducer;

  const increment = () => {
    // setCounter(counter + 1);
    dispatch(increase(count));
  };

  const decrement = () => {
    if (count > 1) {
      // setCounter(counter - 1);
      dispatch(decrease(count));
    }
  };

  const onChange = async (event: any) => {
    if (event.target.value >= 0) {
      // setCounter(event.target.value);
      dispatch(increaseByAmount(event.target.value));
    }
  };

  useEffect(() => {
    // dispatch(increaseByAmount(counter));
  }, []);

  return (
    <Fragment>
      <div className="br3 ba b--gray flex justify-between">
        <button className="ma1 bg-white ba b--white pointer fw6 light-green" onClick={decrement}>
          -
        </button>
        <input className="w2 ba b--white tc" onChange={onChange} value={count} />
        <button className="ma1 bg-white ba b--white pointer fw6 green" onClick={increment}>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default CounterAction;
