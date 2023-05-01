import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { getResponseFail } from "../redux/responseSlice";
import { useAppDispatch } from "../redux/hook";
import { getUserId, getToken } from "../redux/userSlice";
import ErrorBoundaries from "../Components/ErrorBoudaries";

const LoginPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const url = `http://localhost:3000/v2/user/login`;
  const dispatch = useAppDispatch();

  const login = async (data: any) => {
    try {
      const result = await api.postAPI(url, data);
      dispatch(getUserId(result.data.data.user_id));
      dispatch(getToken(result.data.data.token));
      window.localStorage.setItem("userId", `${result.data.data.user_id}`);
      window.localStorage.setItem("token", `${result.data.data.token}`);
      if (window.localStorage.length !== 0) {
        window.history.back();
      }
    } catch (error: any) {
      console.log(error.response.data);
      dispatch(getResponseFail(error.response.data));
    }
  };

  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const getPass = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    login(data);
  };

  if (window.localStorage.length !== 0) {
    window.history.back();
  }

  return (
    <Fragment>
      <div className="flex justify-center">
        <div style={{ height: "420px", width: "400px" }} className="flex flex-column mt4 br3 shadow-3">
          <div className="ma5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-column">
                <label>email</label>
                <input className="br3 ba b--green ma1" type="text" onChange={getEmail}></input>
              </div>
              <div className="flex flex-column mt4">
                <label>password</label>
                <input className="br3 ba b--green ma1" type="password" onChange={getPass}></input>
              </div>
              <div className="mt3">
                <button className="w-40 br3 ba b--washed-green bg-green white h2 pointer" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="mt5">
              <p>Have no Account</p>
              <Link to="/register">
                <button className="w-40 br3 ba b--washed-green bg-green white h2 pointer" type="submit">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ErrorBoundaries />
    </Fragment>
  );
};

export default LoginPage;
