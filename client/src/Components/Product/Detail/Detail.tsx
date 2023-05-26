import React, { useEffect, useState } from "react";
import { Data } from "../../../Data/DataProduct/Data";
import { useParams } from "react-router";
import Summary from "./Summary";

const Detail = () => {
	const { id } = useParams();
	const [data, setData] = useState<Array<any>>([]);

	useEffect(() => {
		setData(Data);
	}, [data]);

	return (
		<div className="mh6 flex">
			<div className="w-70">
				<div>
					<h1>Store</h1>
				</div>
				<div className="flex">
					<div className="w-30">
						<img style={{ width: "200px", height: "200px" }} src={Data[0].image} />
					</div>
					<div className="w-70">
						<h2>{Data[0].title}</h2>
						<h1>${Data[0].price}</h1>
						<p>{Data[0].description}</p>
					</div>
				</div>
			</div>
			<div className="w-30">
				<Summary />
			</div>
		</div>
	);
};

export default Detail;
