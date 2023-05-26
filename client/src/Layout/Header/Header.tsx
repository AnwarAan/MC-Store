import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";

const Header = () => {
	const [isLogin, setIsLogin] = useState<boolean>(false);

	const login = () => {
		setIsLogin(true);
	};

	const logout = () => {
		setIsLogin(false);
	};

	return (
		<nav style={{ height: "100px" }} className="flex tc bb b--light-gray mb4">
			<div className="w-25 mt3">
				<Link to="/">
					<img style={{ width: "60px" }} src={images.home} />
				</Link>
			</div>
			<div className="w-75">
				<input style={{ width: "600px", height: "30px" }} className="br3 ba b--light-gray mt4" type="search" placeholder="search" />
			</div>
			<div className="w-25 mt4 flex">
				<div>
					<Link to="/cart">
						<img style={{ width: "30px" }} src={images.cart} />
					</Link>
				</div>
				{isLogin === false ? (
					<div className="ml4">
						<Link to="/">
							<button style={{ height: "30px", width: "90px" }} className="login ba br3 green bg-white pointer mr2" onClick={login}>
								Log In
							</button>
						</Link>
						<Link to="/register">
							<button style={{ height: "30px", width: "90px" }} className="register ba br3 white bg-green pointer">
								Register
							</button>
						</Link>
					</div>
				) : (
					<div className="ml4">
						<button style={{ height: "30px", width: "90px" }} className="register ba br3 white bg-green pointer" onClick={logout}>
							Logout
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Header;
