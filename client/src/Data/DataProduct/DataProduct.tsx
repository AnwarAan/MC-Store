import React from "react";
import { Link } from "react-router-dom";

interface Data {
	data: any;
}
const DataProduct: React.FunctionComponent<Data> = ({ data }) => {
	const { id, title, price, image } = data;
	return (
		<div>
			<Link style={{ textDecoration: "none" }} to={`/detail/${id}`}>
				<div style={{ width: "150px", height: "300px" }} className="br3 shadow-2 ma2 black">
					<div>
						<img style={{ width: "150px", height: "150px" }} className="" src={image} />
					</div>
					<div className="ml3 mt3">
						<span className="ma0">{title}</span>
						<h2 className="ma0">${price}</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default DataProduct;
