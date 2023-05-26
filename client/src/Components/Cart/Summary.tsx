import React from "react";

const Summary = () => {
	return (
		<div className="br3 shadow-3">
			<div className="mh4 pt2">
				<h2>Summary Shopping</h2>
				<div className="flex justify-between">
					<span>Total price (1 item)</span>
					<span>Price</span>
				</div>
				<div className="flex justify-between">
					<h4>Total Fee</h4>
					<h4>$Price</h4>
				</div>
				<div className="tc pb4 mt2">
					<button style={{ height: "40px" }} className="register w-80 br3 ba b--light-gray bg-green white pointer">
						Buy
					</button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
