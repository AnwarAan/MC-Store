import React, { Fragment, useEffect, useState } from "react";
import { ChildrenProps } from "../interface";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { getResponseFail } from "../redux/responseSlice";

const ErrorBoundaries = () => {
  const dispatch = useAppDispatch();
  const { responseReducer } = useAppSelector((state) => state);
  const { responseFail } = responseReducer;
  const { message, statusCode } = responseFail;
  console.log(statusCode);

  useEffect(() => {}, [statusCode]);

  if (statusCode === 400) {
    return (
      <Fragment>
        <h1>{message}</h1>
      </Fragment>
    );
  }

  if (statusCode === 403) {
    return (
      <Fragment>
        <h1>{message}</h1>
      </Fragment>
    );
  }

  return <Fragment></Fragment>;
};
export default ErrorBoundaries;
