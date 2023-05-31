import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { postAPI, url } from '../../../api/api';
import images from '../../../assets/images';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    await login(data);
  };

  const login = async (data: any) => {
    try {
      const user = await postAPI(`${url}/user/login`, data);
      window.localStorage.setItem('token', user.data.data.token);
      window.localStorage.setItem('user', user.data.data._id);
      history.back();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <Form
        style={{ height: '450px', width: '400px' }}
        className="container tc col col-lg-6 mt6 shadow-2 br3"
        onSubmit={onSubmit}>
        <div className="pt5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="w-80 m-auto" type="email" placeholder="batman@mail.com" onChange={getEmail} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="w-80 m-auto" type="password" placeholder="123456" onChange={getPassword} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div>
              <button className="register size-m ba br3 mt3" type="submit">
                Submit
              </button>
            </div>
            <div className="mt4">
              <p className="mb2">Have not Account</p>
              <button className="register size-m ba br3" type="submit">
                Register
              </button>
            </div>
          </Form.Group>
        </div>
        <div style={{ position: 'relative', display: '', marginTop: '-410px', marginLeft: '360px' }} className="flex">
          <Link to="/">
            <img style={{ width: '12px' }} src={images.close} />
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
