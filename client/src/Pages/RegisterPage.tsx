import React, { Fragment } from "react";
import { useAppDispatch } from "../redux/hook";
import { getResponseFail } from "../redux/responseSlice";
import { getUserId } from "../redux/userSlice";
import { Link } from "react-router-dom";
import ErrorBoundaries from "../Components/ErrorBoudaries";
import api from "../api/api";

const RegisterPage = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const url = `http://localhost:3000/v2/user/register`;
  const dispatch = useAppDispatch();

  const register = async (data: any) => {
    try {
      const result = await api.postAPI(url, data);
      dispatch(getUserId(result.data.data.user_id));
      window.localStorage.setItem("userId", `${result.data.data.user_id}`);
      window.history.go(-1);
      console.log(window.localStorage.length);
    } catch (error: any) {
      console.log(error.response.data);
      dispatch(getResponseFail(error.response.data));
    }
  };

  const getName = (e: any) => {
    setName(e.target.value);
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
      name: name,
      email: email,
      password: password,
    };
    register(data);
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        <div style={{ height: "420px", width: "400px" }} className="flex flex-column mt4 br3 shadow-3">
          <div className="ma5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-column mb1">
                <label>name</label>
                <input className="br3 ba b--green ma1" type="text" onChange={getName}></input>
              </div>
              <div className="flex flex-column mb1">
                <label>email</label>
                <input className="br3 ba b--green ma1" type="text" onChange={getEmail}></input>
              </div>
              <div className="flex flex-column mb1">
                <label>password</label>
                <input className="br3 ba b--green ma1" type="password" onChange={getPass}></input>
              </div>
              <div className="mt3">
                <button className="w-40 br3 ba b--washed-green bg-green white h2 pointer" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="mt4">
              <p>Have Account</p>
              <Link to="/login">
                <button className="w-40 br3 ba b--washed-green bg-green white h2 pointer" type="submit">
                  Login
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

export default RegisterPage;
