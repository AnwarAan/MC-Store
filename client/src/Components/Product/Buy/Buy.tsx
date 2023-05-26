import React from "react";
import CounterAction from "../../Counter/CounterAction";
import Summary from "./Sumary";
import { Data, User } from "../../../Data/DataProduct/Data";
import { useAppSelector } from "../../../redux/hook";
const Buy = () => {
	const { count } = useAppSelector((state) => state.counterReducer);
	const totalBill = Data[0].price * count;
	return (
		<div className="mh6 flex">
			<div className="w-70 flex flex-column">
				<div style={{ overflow: "scroll", height: "600px" }}>
					<div className="flex-column bb b--light-gray pb4 bw3">
						<div>
							<h2>Store</h2>
						</div>
						<div className="flex">
							<div className="w-20 flex">
								<img style={{ width: "150px", height: "150px" }} src={Data[0].image} />
							</div>
							<div className="w-80">
								<span>{Data[0].title}</span>
								<h4>${totalBill}</h4>
								<div className="w-20">
									<CounterAction />
								</div>
							</div>
						</div>
					</div>
					<div className="mt4 br3 shadow-2">
						<div className="pa4 bb b--light-gray">
							<h2 className="ma0">Shipment and Payment</h2>
						</div>
						<div className="flex flex-column bb b--light-gray pa4">
							<h4 className="mt0">Address</h4>
							<span>{User[0].address}</span>
						</div>
						<div className="pa4 flex bb b--light-gray">
							<div className="flex flex-column mr4">
								<label>Select Courier</label>
								<select className="mt2">
									<option value={"Fast"}>Fast</option>
									<option value={"Reguler"}>Reguler</option>
									<option value={"Slow"}>Slow</option>
								</select>
							</div>
							<div className="flex flex-column">
								<label>Select Courier</label>
								<select className="mt2">
									<option>JNE</option>
									<option>SiCepat</option>
									<option>Wahana</option>
								</select>
							</div>
						</div>
						<div className="pa4">
							<h4 className="mb2 mt0">Balance</h4>
							<span>${User[0].balance}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-30">
				<Summary />
			</div>
		</div>
	);
};

export default Buy;
