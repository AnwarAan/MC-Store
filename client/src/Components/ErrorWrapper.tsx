import React, { Fragment, useEffect } from "react";
import { ChildrenProps } from "../interface";
import { useAppSelector } from "../redux/hook";

const ErrorWrapper: React.FunctionComponent<ChildrenProps> = (props) => {
  const { responseReducer } = useAppSelector((state) => state);
  const { responseFail } = responseReducer;
  const { statusCode, message } = responseFail;

  if (statusCode === 404) {
    return (
      <Fragment>
        <h2>{statusCode}</h2>
        <h1>{message}</h1>
      </Fragment>
    );
  }

  return props.children;
};

export default ErrorWrapper;
