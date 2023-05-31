import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const logout = () => {
    setIsLogin(false);
    window.localStorage.clear();
  };

  useEffect(() => {
    if (window.localStorage.length !== 0) {
      setIsLogin(true);
    }
  }, []);

  return (
    <nav style={{ height: '100px' }} className="flex tc bb b--light-gray mb4">
      <div className="w-25 mt3">
        <Link to="/">
          <img style={{ width: '60px' }} src={images.home} />
        </Link>
      </div>
      <div className="w-75">
        <input
          style={{ width: '600px', height: '40px' }}
          className="br3 ba b--light-gray mt4"
          type="search"
          placeholder="search"
        />
      </div>
      <div className="w-30 mt4 flex">
        <div>
          <Link to="/cart">
            <img style={{ width: '40px' }} src={images.cart} />
          </Link>
        </div>
        {isLogin === false ? (
          <div className="ml3">
            <Link to="/login">
              <button className="login size-m ba br3 mr2">Log In</button>
            </Link>
            <Link to="/register">
              <button className="register size-m ba br3">Register</button>
            </Link>
          </div>
        ) : (
          <div className="ml4">
            <button className="register size-m ba br3" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
