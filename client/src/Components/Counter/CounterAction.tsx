import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { increase, decrease, increaseByAmount } from "../../redux/counterSlice";

const CounterAction = () => {
	const dispatcth = useAppDispatch();
	const { count } = useAppSelector((state) => state.counterReducer);
	const inc = () => {
		dispatcth(increase());
	};
	const dec = () => {
		if (count > 1) {
			dispatcth(decrease());
		}
	};
	const onChange = (e: any) => {
		dispatcth(increaseByAmount(e.target.value));
	};

	return (
		<div className="flex ba br3 b--gray">
			<button style={{ height: "30px" }} className="mh2 ba br3 b--white bg-white dark-green pointer" onClick={dec}>
				-
			</button>
			<input className="ba b--white bg-white w-80 tc" onChange={onChange} value={count} />
			<button style={{ height: "30px" }} className="mh2 ba br3 b--white bg-white green pointer" onClick={inc}>
				+
			</button>
		</div>
	);
};

export default CounterAction;
