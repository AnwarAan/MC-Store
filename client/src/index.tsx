import React, { Fragment, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './assets/css/index.css';

const App = lazy(() => import('./Components/App'));
const Loader = lazy(() => import('./Components/Loader/Loader'));
const Home = lazy(() => import('./Components/Home/Home'));
const Register = lazy(() => import('./Components/Authentication/Register/Register'));
const Login = lazy(() => import('./Components/Authentication/Login/Login'));
const CartList = lazy(() => import('./Components/Cart/CartList'));
const Detail = lazy(() => import('./Components/Product/Detail/Detail'));
const Buy = lazy(() => import('./Components/Product/Buy/Buy'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/register`} element={<Register />} />
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />

          {/* APP */}
          <Route path={`${process.env.PUBLIC_URL}/`} element={<App />}>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/cart`} element={<CartList />} />
            <Route path={`${process.env.PUBLIC_URL}/detail/:id`} element={<Detail />} />
            <Route path={`${process.env.PUBLIC_URL}/buy/:id`} element={<Buy />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
