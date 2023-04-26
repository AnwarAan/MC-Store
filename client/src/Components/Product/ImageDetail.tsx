import React, { Fragment } from "react";
import { ProductProps } from "../../interface";

const ImageDetail: React.FunctionComponent<ProductProps> = ({ image }) => {
  return (
    <Fragment>
      <img style={{ height: "400px", width: "400px" }} src={image}></img>
    </Fragment>
  );
};

export default ImageDetail;
