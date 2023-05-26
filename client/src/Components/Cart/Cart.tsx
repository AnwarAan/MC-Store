import React from "react";
import Summary from "./Summary";
import { Data } from "../../Data/DataProduct/Data";

const Cart = () => {
	return (
		<div className="mh6">
			<div className="flex">
				<div className="flex flex-column w-70 bb bw3 b--light-gray">
					<div>
						<h2>Store</h2>
					</div>
					<div className="flex">
						<div>
							<img style={{ width: "100px", height: "100px" }} src={Data[0].image} />
						</div>
						<div className="ml4">
							<span>{Data[0].title}</span>
						</div>
					</div>
				</div>
				<div className="w-30 ml4">
					<Summary />
				</div>
			</div>
		</div>
	);
};

export default Cart;
