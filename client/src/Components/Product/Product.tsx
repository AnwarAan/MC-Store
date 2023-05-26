import React, { useEffect } from "react";
import DataProduct from "../../Data/DataProduct/DataProduct";
import { Data } from "../../Data/DataProduct/Data";

const Product = () => {
	const [data, setData] = React.useState<Array<object>>([]);

	useEffect(() => {
		setData(Data);
	}, [data]);

	const ProductList = Data.map((result) => <DataProduct key={result.id} data={result} />);
	return <div className="flex">{ProductList}</div>;
};

export default Product;
