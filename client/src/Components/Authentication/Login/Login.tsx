import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="tc">
			<div className="flex justify-center mt6">
				<div style={{ height: "400px", width: "400px" }} className="br3 shadow-2">
					<form className="">
						<div className="flex flex-column mt4">
							<div>
								<label>Username</label>
							</div>
							<div className="mt2">
								<input style={{ height: "30px" }} className="w-60 br3 ba b--light-gray" />
							</div>
							<div className="mt4">
								<label>Password</label>
							</div>
							<div className="mt2">
								<input style={{ height: "30px" }} className="w-60 br3 ba b--light-gray" />
							</div>
						</div>
						<button style={{ height: "30px", width: "90px" }} className="register br3 ba b--light-gray bg-green white pointer mt4" type="submit">
							Submit
						</button>
					</form>
					<div className="flex flex-column mt5">
						<span>Have not Account</span>
						<div className="mt2">
							<Link to="/register">
								<button style={{ height: "30px", width: "90px" }} className="register br3 ba b--light-gray bg-green white pointer">
									Register
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
