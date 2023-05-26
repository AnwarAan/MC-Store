import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { Data } from "../../../Data/DataProduct/Data";
import CounterAction from "../../Counter/CounterAction";

const Summary = () => {
	const { count } = useAppSelector((state) => state.counterReducer);
	const subTotal = count * Data[0].price;

	return (
		<div style={{ height: "360px" }} className="br3 shadow-2 ml4">
			<div className="mh4 pt1">
				<h2 className="">Set Amount</h2>
				<div className="mt4">
					<div className="w-50">
						<CounterAction />
						<div className="mt2">
							<span>Max</span>
						</div>
					</div>
				</div>
				<div className="flex flex-column tc mt4">
					<div className="flex justify-between">
						<p className="pt2">Subtotal</p>
						<h2 className="">${subTotal}</h2>
					</div>
					<div>
						<Link to="/cart">
							<button style={{ height: "40px" }} className="login br3 ba b--light-gray pointer white bg-green w-100">
								+ Cart
							</button>
						</Link>
					</div>
					<div className="mt2">
						<Link to="/buy">
							<button style={{ height: "40px" }} className="register br3 ba b--light-gray pointer green bg-white w-100">
								Buy
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Summary;
